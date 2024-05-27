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
import com.tfg.springboot.backend.apirest.models.entity.RutinaPers;
import com.tfg.springboot.backend.apirest.models.services.IRutinaPersService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class RutinaPersRestController {
	
	@Autowired
	private IRutinaPersService rutinapersService;
	
	@GetMapping("/rutinasPers")
	public List<RutinaPers> index(){
		return rutinapersService.findAll();
	}
	
	@GetMapping("/rutinasPers/{id}")
	public RutinaPers show(@PathVariable Integer id) {		
		return rutinapersService.findByIdDeUsuario(id);		
	}
	
	@PostMapping("/rutinasPers")
	@ResponseStatus(HttpStatus.CREATED)
	public RutinaPers create(@RequestBody RutinaPers rutinasPers) {
		return rutinapersService.save(rutinasPers);
	}
	
	@PutMapping("/rutinasPers/{id}")
	@ResponseStatus(HttpStatus.CREATED)
	public RutinaPers update(@RequestBody RutinaPers rutinasPers, @PathVariable Integer id) {
		
		RutinaPers rutinasPersActual = rutinapersService.findById(id);
		
		rutinasPersActual.setNombre(rutinasPers.getNombre());
		rutinasPersActual.setDescripcion(rutinasPers.getDescripcion());
		rutinasPersActual.setRecomendaciones(rutinasPers.getRecomendaciones());
		rutinasPersActual.setDiasRutinas(rutinasPers.getDiasRutinas());
		rutinasPersActual.setUsuario(rutinasPers.getUsuario());
		
		return rutinapersService.save(rutinasPersActual);
		
	}
	
	@DeleteMapping("/rutinasPers/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Integer id) {
		rutinapersService.delete(id);
	}
}
