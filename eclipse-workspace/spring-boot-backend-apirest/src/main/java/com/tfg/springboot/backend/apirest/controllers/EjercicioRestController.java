package com.tfg.springboot.backend.apirest.controllers;

import java.io.IOException;
import java.net.MalformedURLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.tfg.springboot.backend.apirest.models.dto.EjercicioDTO;
import com.tfg.springboot.backend.apirest.models.entity.Ejercicio;
import com.tfg.springboot.backend.apirest.models.services.IEjercicioService;
import com.tfg.springboot.backend.apirest.models.services.IUploadFileService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class EjercicioRestController {

    @Autowired
    private IEjercicioService ejercicioService;
    
    @Autowired
    private IUploadFileService uploadService;

    @GetMapping("/ejercicios")
    public List<EjercicioDTO> index() {
        List<Ejercicio> ejercicios = ejercicioService.findAll();
        return ejercicios.stream()
                .map(this::mapToDTO)
                .collect(Collectors.toList());
    }

    @GetMapping("/ejercicios/{id}")
    public EjercicioDTO show(@PathVariable Integer id) {
        Ejercicio ejercicio = ejercicioService.findById(id);
        return mapToDTO(ejercicio);
    }

    @PostMapping("/ejercicios")
    @ResponseStatus(HttpStatus.CREATED)
    public EjercicioDTO create(@RequestBody EjercicioDTO ejercicioDTO) {
    	
        Ejercicio ejercicio = mapToEntity(ejercicioDTO);        
        Ejercicio savedEjercicio = ejercicioService.save(ejercicio);
        return mapToDTO(savedEjercicio);
    }

    @PutMapping("/ejercicios/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public EjercicioDTO update(@RequestBody EjercicioDTO ejercicioDTO, @PathVariable Integer id) {
        Ejercicio ejercicio = mapToEntity(ejercicioDTO);
        Ejercicio ejercicioActual = ejercicioService.findById(id);
        
        // Actualizar los campos del ejercicio actual con los valores del DTO
        ejercicioActual.setNombre(ejercicio.getNombre());
        ejercicioActual.setDescripcion(ejercicio.getDescripcion());
        ejercicioActual.setGrupoMuscular(ejercicio.getGrupoMuscular());
        ejercicioActual.setMaterialesEj(ejercicio.getMaterialesEj());
        
        // Guardar y retornar el ejercicio actualizado
        Ejercicio updatedEjercicio = ejercicioService.save(ejercicioActual);
        return mapToDTO(updatedEjercicio);
    }


    @DeleteMapping("/ejercicios/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Integer id) {
    	
			ejercicioService.delete(id);

		
    }

    @PostMapping("/ejercicios/upload")
    public ResponseEntity<?> upload (@RequestParam("fotoEjercicio") MultipartFile archivo, @RequestParam("id") Integer id){
    	
    	Map<String, Object> response = new HashMap<>();
    	Ejercicio ejercicio = ejercicioService.findById(id);
    	
    	if(!archivo.isEmpty()) {
			
			String nombreArchivo = null;
			
			try {
				nombreArchivo = uploadService.copiar(archivo);
			} catch (IOException e) {
				response.put("mensaje", "Error al subir la imagen del ejercicio ");
				response.put("error", e.getMessage().concat(": ").concat(e.getCause().getMessage()));
				return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
			}
			String nombreFotoAnterior = ejercicio.getFoto();
			
			uploadService.eliminar(nombreFotoAnterior);
			
			ejercicio.setFoto(nombreArchivo);
			ejercicioService.save(ejercicio);
			response.put("ejercicio", ejercicio);
			response.put("mensaje", "Has subido correctamente la imagen: "+ nombreArchivo);
		}
    	
    	return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
    }
    
    
    @GetMapping("uploads/img/{nombreFoto:.+}")
	public ResponseEntity<Resource> verFoto(@PathVariable String nombreFoto){
	
		Resource recurso = null;
		
		try {
			recurso = uploadService.cargar(nombreFoto);
		} catch (MalformedURLException e) {
			e.printStackTrace();
		}
		
		HttpHeaders cabecera = new HttpHeaders();
		cabecera.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\""+recurso.getFilename()+"\"");
		
		return new ResponseEntity<Resource>(recurso, cabecera, HttpStatus.OK);
	}
    
    
    
    private EjercicioDTO mapToDTO(Ejercicio ejercicio) {
    	
        return new EjercicioDTO(ejercicio.getId(), ejercicio.getNombre(), ejercicio.getDescripcion(), ejercicio.getGrupoMuscular(), ejercicio.getFoto(), ejercicio.getMaterialesEj());
    }

    private Ejercicio mapToEntity(EjercicioDTO ejercicioDTO) {
        Ejercicio ejercicio = new Ejercicio();
        
        // Verificar si ejercicioDTO.getId() no es null antes de llamar a intValue()
        if (ejercicioDTO.getId() != null) {
            ejercicio.setId(ejercicioDTO.getId().intValue());
        }
        
        ejercicio.setNombre(ejercicioDTO.getNombre());
        ejercicio.setDescripcion(ejercicioDTO.getDescripcion());
        ejercicio.setGrupoMuscular(ejercicioDTO.getGrupoMuscular());
        ejercicio.setMaterialesEj(ejercicioDTO.getMateriales());
        
        return ejercicio;
    }


}
