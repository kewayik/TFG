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
import com.tfg.springboot.backend.apirest.models.entity.Ejercicio;
import com.tfg.springboot.backend.apirest.models.entity.Ejercicio;
import com.tfg.springboot.backend.apirest.models.services.IActividadService;
import com.tfg.springboot.backend.apirest.models.services.IDiaRutinaService;
import com.tfg.springboot.backend.apirest.models.services.IEjercicioService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class EjercicioRestController {
	
	@Autowired
	private IEjercicioService ejercicioService;
	
	
	@GetMapping("/ejercicios")
	public List<Ejercicio> index(){
		return ejercicioService.findAll();
	}
	
	@GetMapping("/ejercicios/{id}")
	public Ejercicio show(@PathVariable Integer id) {
		return ejercicioService.findById(id);
	}
	
	@PostMapping("/ejercicios")
	@ResponseStatus(HttpStatus.CREATED)
	public Ejercicio create(@RequestBody Ejercicio ejercicio) {
		return ejercicioService.save(ejercicio);
	}
	
	@PutMapping("/ejercicios/{id}")
	@ResponseStatus(HttpStatus.CREATED)
	public Ejercicio update(@RequestBody Ejercicio ejercicio, @PathVariable Integer id) {
		
		Ejercicio ejercicioActual = ejercicioService.findById(id);
		
		ejercicioActual.setNombre(ejercicio.getNombre());
		ejercicioActual.setDescripcion(ejercicio.getDescripcion());
		ejercicioActual.setGrupoMuscular(ejercicio.getGrupoMuscular());
		//ejercicioActual.setRegistros(ejercicios.getRegistros());
		//ejercicioActual.setMaterialesEj(ejercicios.getMaterialesEj));
		
		return ejercicioService.save(ejercicioActual);
		
	}
	
	@DeleteMapping("/ejercicios/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Integer id) {
		
		ejercicioService.delete(id);
	}
}
