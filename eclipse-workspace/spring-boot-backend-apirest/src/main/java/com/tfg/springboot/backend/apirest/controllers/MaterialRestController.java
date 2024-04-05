package com.tfg.springboot.backend.apirest.controllers;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tfg.springboot.backend.apirest.models.entity.Material;
import com.tfg.springboot.backend.apirest.models.services.IClienteService;
import com.tfg.springboot.backend.apirest.models.services.IMaterialService;

import jakarta.validation.Valid;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class MaterialRestController {
	
	@Autowired
	private IMaterialService materialService;
	
	@GetMapping("/materiales")
	public List<Material> index() {
		return materialService.findAll();
	}
	
	@GetMapping("/materiales/page/{page}")
	public Page<Material> index(@PathVariable Integer page) {
		return materialService.findAll(PageRequest.of(page, 5));
	}
	
	@GetMapping("/materiales/{id}")
	public ResponseEntity<?> show(@PathVariable Long id) {
		
		Material material = null;
		Map<String, Object> response = new HashMap<>();

		// Control de errores
		try {
			material = materialService.findById(id);
		} catch (DataAccessException e) {
			response.put("mensaje", "Error al realizar la consulta en la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}

		if (material == null) {
			response.put("mensaje", "El material ID: ".concat(id.toString().concat(" no existe en la base de datos!")));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
		}

		return new ResponseEntity<Material>(material, HttpStatus.OK);
	}
	
	@PostMapping("/materiales")
	public ResponseEntity<?> create(@Valid @RequestBody Material material, BindingResult result) {
		
		Material materialNew = null;
		Map<String, Object> response = new HashMap<>();
		
		//Control de errores al ser incorrecto el formato
		
		if(result.hasErrors()) {
			
			List<String> errors = result.getFieldErrors()
					.stream()
					.map(err -> "El campo '"+err.getField()+ "' "+err.getDefaultMessage())
					.collect(Collectors.toList());
			response.put("errors", errors);
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.BAD_REQUEST);
		}
		
		//Control de errores al clickar y que esté mal
		try {
			materialNew = materialService.save(material);
		} catch (DataAccessException e) {
			response.put("mensaje", "Error al realizar el insert en la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}

		response.put("mensaje", "El material ha sido creado con éxito!");
		response.put("material", materialNew);
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
		
	}
	
	@PutMapping("/materiales/{id}")
	public ResponseEntity<?> update(@Valid @RequestBody Material material, BindingResult result, @PathVariable Long id) {
		
		
		Material materialActual = materialService.findById(id);

		Material materialUpdated = null;

		Map<String, Object> response = new HashMap<>();
		
		if(result.hasErrors()) {
			
			List<String> errors = result.getFieldErrors()
					.stream()
					.map(err -> "El campo '"+err.getField()+ "' "+err.getDefaultMessage())
					.collect(Collectors.toList());
			response.put("errors", errors);
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.BAD_REQUEST);
		}

		if (materialActual == null) {
			response.put("mensaje", "Error: no se pudo editar, el material ID: "
					.concat(id.toString().concat(" no existe en la base de datos!")));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
		}

		try {
			
			materialActual.setNombre(material.getNombre());
			materialActual.setTipo(material.getTipo());
			materialActual.setStock(material.getStock());
			materialActual.setDescripcion(material.getDescripcion());
			
			materialUpdated = materialService.save(materialActual);
			
		} catch (DataAccessException e) {
			response.put("mensaje", "Error al actualizar en la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}

		response.put("mensaje", "El material ha sido actualizado con éxito!");
		response.put("material", materialUpdated);

		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
		
	}
	
	@DeleteMapping("/materiales/{id}")
	public ResponseEntity<?> delete(@PathVariable Long id) {
		
		
		Map<String, Object> response = new HashMap<>();
		//Cliente clienteEliminar = clienteService.findById(id);


		try {
			/*String nombreFotoAnterior = clienteEliminar.getFoto();
			uploadService.eliminar(nombreFotoAnterior);
			
			*/materialService.delete(id);

		} catch (DataAccessException e) {
			response.put("mensaje", "Error al eliminar en la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		response.put("mensaje", "El material ha sido eliminado con éxito!");
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
		
	}
	
	
	
	
	/*
	MAS TARDE --------------------------------------------
	
	@Autowired
	private IUploadFileService uploadService;

	
	

	@PostMapping("/clientes/upload")
	public ResponseEntity<?> upload (@RequestParam("fotoCliente") MultipartFile archivo, @RequestParam("id") Long id){
		
		Map<String, Object> response = new HashMap<>();
		
		Cliente cliente = clienteService.findById(id);
		
		if(!archivo.isEmpty()) {
			
			String nombreArchivo = null;
			
			try {
				nombreArchivo = uploadService.copiar(archivo);
			} catch (IOException e) {
				response.put("mensaje", "Error al subir la imagen del cliente ");
				response.put("error", e.getMessage().concat(": ").concat(e.getCause().getMessage()));
				return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
			}
			String nombreFotoAnterior = cliente.getFoto();
			
			uploadService.eliminar(nombreFotoAnterior);
			
			cliente.setFoto(nombreArchivo);
			clienteService.save(cliente);
			response.put("cliente", cliente);
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
	}*/
}
