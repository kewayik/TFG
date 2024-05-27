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

import com.tfg.springboot.backend.apirest.models.entity.Registro;
import com.tfg.springboot.backend.apirest.models.entity.Registro;
import com.tfg.springboot.backend.apirest.models.services.IRegistroService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class RegistroRestController {

	@Autowired
	private IRegistroService registroService;
	
	@GetMapping("/registros")
	public List<Registro> index(){
		return registroService.findAll();
	}
	
	@GetMapping("/registros/{id}")
	public Registro show(@PathVariable Integer id) {
		return registroService.findById(id);
	}
	
	@PostMapping("/registros")
	@ResponseStatus(HttpStatus.CREATED)
	public Registro create(@RequestBody Registro registro) {
		
		System.out.println("Registo de ejercicio: "+registro.getEjercicio());
		return registroService.save(registro);
	}
	
	
	@DeleteMapping("/registros/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Integer id) {
		registroService.delete(id);
	}
}
