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

import com.tfg.springboot.backend.apirest.models.entity.DiaRutina;
import com.tfg.springboot.backend.apirest.models.entity.DiaRutina;
import com.tfg.springboot.backend.apirest.models.services.IDiaRutinaService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class DiaRutinaRestController {
	
	@Autowired
	private IDiaRutinaService diarutinaService;
	
	@GetMapping("/diasrutinas")
	public List<DiaRutina> index(){
		return diarutinaService.findAll();
	}
	
	@GetMapping("/diasrutinas/{id}")
	public DiaRutina show(@PathVariable Integer id) {
		return diarutinaService.findById(id);
	}
	
	@PostMapping("/diasrutinas")
	@ResponseStatus(HttpStatus.CREATED)
	public DiaRutina create(@RequestBody DiaRutina diaRutina) {
		return diarutinaService.save(diaRutina);
	}
	
	@PutMapping("/diasrutinas/{id}")
	@ResponseStatus(HttpStatus.CREATED)
	public DiaRutina update(@RequestBody DiaRutina diaRutina, @PathVariable Integer id) {
		
		DiaRutina diaRutinaActual = diarutinaService.findById(id);
		
		diaRutinaActual.setDia(diaRutina.getDia());
		diaRutinaActual.setNombre(diaRutina.getNombre());
		//diaRutinaActual.setEjercicios(diaRutina.getEjercicios());
		
		return diarutinaService.save(diaRutinaActual);
		
	}
	
	@DeleteMapping("/diasrutinas/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Integer id) {
		diarutinaService.delete(id);
	}
}
