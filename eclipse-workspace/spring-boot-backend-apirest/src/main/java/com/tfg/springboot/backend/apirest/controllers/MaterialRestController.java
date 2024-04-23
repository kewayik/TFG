package com.tfg.springboot.backend.apirest.controllers;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.tfg.springboot.backend.apirest.models.entity.Material;
import com.tfg.springboot.backend.apirest.models.services.IMaterialService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class MaterialRestController {
	
	@Autowired
	private IMaterialService materialService;
	
	@GetMapping("/materiales")
	public List<Material> index(){
		return materialService.findAll();
	}
	
	@GetMapping("/materiales/{id}")
	public Material show(@PathVariable Integer id) {
		return materialService.findById(id);
	}
	
	@PostMapping("/materiales")
	@ResponseStatus(HttpStatus.CREATED)
	public Material create(@RequestBody Material material) {
		return materialService.save(material);
	}
	
	@PutMapping("/materiales/{id}")
	@ResponseStatus(HttpStatus.CREATED)
	public Material update(@RequestBody Material material, @PathVariable Integer id) {
		
		Material materialActual = materialService.findById(id);
		
		materialActual.setNombre(material.getNombre());
		materialActual.setDescripcion(material.getDescripcion());
		materialActual.setStock(material.getStock());
		materialActual.setTipo(material.getTipo());
		//materialActual.setEjerciciosMat(material.getEjerciciosMat());
		
		return materialService.save(materialActual);
		
	}
	
	@DeleteMapping("/materiales/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Integer id) {
		materialService.delete(id);
	}
	
}
