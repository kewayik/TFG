package com.tfg.springboot.backend.apirest.controllers;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.HttpHeaders;

import java.io.IOException;
import java.net.MalformedURLException;
import java.util.HashMap;

import com.tfg.springboot.backend.apirest.models.dto.MaterialDTO;
import com.tfg.springboot.backend.apirest.models.entity.Ejercicio;
import com.tfg.springboot.backend.apirest.models.entity.Material;
import com.tfg.springboot.backend.apirest.models.services.IMaterialService;
import com.tfg.springboot.backend.apirest.models.services.IUploadFileService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class MaterialRestController {
    
    @Autowired
    private IMaterialService materialService;
    
    @Autowired
    private IUploadFileService uploadService;
    
    @GetMapping("/materiales")
    public List<MaterialDTO> index() {
        List<Material> materiales = materialService.findAll();
        return materiales.stream()
                .map(this::mapToDTO)
                .collect(Collectors.toList());
    }
    
    @GetMapping("/materiales/{id}")
    public MaterialDTO show(@PathVariable Integer id) {
        Material material = materialService.findById(id);
        return mapToDTO(material);
    }
    
    @GetMapping("/materiales/{id}/ejercicios")
    public List<Ejercicio> showEjercicios(@PathVariable Integer id) {
    	List<Ejercicio> ejercicios = materialService.ejerciciosMaterial(id);
    	return ejercicios;
    }
    
    @PostMapping("/materiales")
    @ResponseStatus(HttpStatus.CREATED)
    public MaterialDTO create(@RequestBody MaterialDTO materialDTO) {
        Material material = mapToEntity(materialDTO);
        Material savedMaterial = materialService.save(material);
        return mapToDTO(savedMaterial);
    }
    
    @PutMapping("/materiales/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public MaterialDTO update(@RequestBody MaterialDTO materialDTO, @PathVariable Integer id) {
        Material material = mapToEntity(materialDTO);
        Material materialActual = materialService.findById(id);
        
        // Actualizar los campos del material actual con los valores del DTO
        materialActual.setNombre(material.getNombre());
        materialActual.setDescripcion(material.getDescripcion());
        materialActual.setStock(material.getStock());
        materialActual.setTipo(material.getTipo());
        
        // Guardar y retornar el material actualizado
        Material updatedMaterial = materialService.save(materialActual);
        return mapToDTO(updatedMaterial);
    }
    
    @DeleteMapping("/materiales/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Integer id) {
         materialService.delete(id);
    }


    @PostMapping("/materiales/upload")
    public ResponseEntity<?> upload(@RequestParam("fotoMaterial") MultipartFile archivo, @RequestParam("id") Integer id) {
        Map<String, Object> response = new HashMap<>();
        Material material = materialService.findById(id);
        if (!archivo.isEmpty()) {
            String nombreArchivo = null;
            try {
                nombreArchivo = uploadService.copiar(archivo);
            } catch (IOException e) {
                response.put("mensaje", "Error al subir la imagen del material");
                response.put("error", e.getMessage().concat(": ").concat(e.getCause().getMessage()));
                return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
            }
            String nombreFotoAnterior = material.getFoto();
            uploadService.eliminar(nombreFotoAnterior);
            material.setFoto(nombreArchivo);
            materialService.save(material);
            response.put("material", material);
            response.put("mensaje", "Has subido correctamente la imagen: " + nombreArchivo);
        }
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
    }
    
    @GetMapping("/materiales/img/{nombreFoto:.+}")
    public ResponseEntity<Resource> verFoto(@PathVariable String nombreFoto) {
        Resource recurso = null;
        try {
            recurso = uploadService.cargar(nombreFoto);
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
        HttpHeaders cabecera = new HttpHeaders();
        cabecera.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + recurso.getFilename() + "\"");
        return new ResponseEntity<Resource>(recurso, cabecera, HttpStatus.OK);
    }

    
    private MaterialDTO mapToDTO(Material material) {
        MaterialDTO materialDTO = new MaterialDTO();
        materialDTO.setId(material.getId());
        materialDTO.setNombre(material.getNombre());
        materialDTO.setDescripcion(material.getDescripcion());
        materialDTO.setStock(material.getStock());
        materialDTO.setTipo(material.getTipo());
        materialDTO.setFoto(material.getFoto());
        return materialDTO;
    }
    
    private Material mapToEntity(MaterialDTO materialDTO) {
        Material material = new Material();
     // Verificar si ejercicioDTO.getId() no es null antes de llamar a intValue()
        if (materialDTO.getId() != null) {
        	material.setId(materialDTO.getId().intValue());
        }
        material.setNombre(materialDTO.getNombre());
        material.setDescripcion(materialDTO.getDescripcion());
        material.setStock(materialDTO.getStock());
        material.setTipo(materialDTO.getTipo());
        material.setFoto(materialDTO.getFoto());
        return material;
    }
}
