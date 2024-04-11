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

import com.tfg.springboot.backend.apirest.models.entity.RutinaPers;
import com.tfg.springboot.backend.apirest.models.entity.RutinaPred;
import com.tfg.springboot.backend.apirest.models.services.IRutinaPredService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class RutinaPredRestController {
	
	@Autowired
	private IRutinaPredService rutinapredService;
	
	@GetMapping("/rutinasPred")
	public List<RutinaPred> index(){
		return rutinapredService.findAll();
	}
	
	@GetMapping("/rutinasPred/{id}")
	public RutinaPred show(@PathVariable Integer id) {
		return rutinapredService.findById(id);
	}
	
	@PostMapping("/rutinasPred")
	@ResponseStatus(HttpStatus.CREATED)
	public RutinaPred create(@RequestBody RutinaPers rutinasPred) {
		return rutinapredService.save(rutinasPred);
	}
	
	@PutMapping("/rutinasPred/{id}")
	@ResponseStatus(HttpStatus.CREATED)
	public RutinaPred update(@RequestBody RutinaPred rutinasPred, @PathVariable Integer id) {
		
		RutinaPred rutinasPredActual = rutinapredService.findById(id);
		
		rutinasPredActual.setNombre(rutinasPred.getNombre());
		rutinasPredActual.setDescripcion(rutinasPred.getDescripcion());
		rutinasPredActual.setRecomendaciones(rutinasPred.getRecomendaciones());
		rutinasPredActual.setEjercicios(rutinasPred.getEjercicios());
		
		return rutinapredService.save(rutinasPredActual);
		
	}
	
	@DeleteMapping("/rutinasPred/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Integer id) {
		rutinapredService.delete(id);
	}
}
