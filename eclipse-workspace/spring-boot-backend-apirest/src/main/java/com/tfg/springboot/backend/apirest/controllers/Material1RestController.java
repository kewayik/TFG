package com.tfg.springboot.backend.apirest.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.tfg.springboot.backend.apirest.models.entity.Material;
import com.tfg.springboot.backend.apirest.models.entity.Material1;
import com.tfg.springboot.backend.apirest.models.services.IMaterial1Service;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class Material1RestController {
	
	@Autowired
	private IMaterial1Service material1Service;
	
	@GetMapping("/materiales1")
	public List<Material1> index(){
		return material1Service.findAll();
	}
	
	@GetMapping("/materiales1/{id}")
	public Material1 show(@PathVariable Integer id) {
		return material1Service.findById(id);
	}
	
	@PostMapping("/materiales1")
	@ResponseStatus(HttpStatus.CREATED)
	public Material1 create(@RequestBody Material1 material) {
		return material1Service.save(material);
	}
	
	@PutMapping("/materiales1/{id}")
	@ResponseStatus(HttpStatus.CREATED)
	public Material1 update(@RequestBody Material1 material, @PathVariable Integer id) {
		
		Material1 materialActual = material1Service.findById(id);
		
		materialActual.setNombre(material.getNombre());
		materialActual.setDescripcion(material.getDescripcion());
		materialActual.setStock(material.getStock());
		materialActual.setTipo(material.getTipo());
		//materialActual.setEjerciciosMat(material.getEjerciciosMat());
		
		return material1Service.save(materialActual);
		
	}
	
	@DeleteMapping("/materiales1/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Integer id) {
		material1Service.delete(id);
	}
}
