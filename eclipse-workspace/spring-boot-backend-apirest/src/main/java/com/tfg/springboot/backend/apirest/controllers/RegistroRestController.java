package com.tfg.springboot.backend.apirest.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tfg.springboot.backend.apirest.models.entity.Registro;
import com.tfg.springboot.backend.apirest.models.services.IRegistroService;

@RestController
@RequestMapping("/api")
public class RegistroRestController {

	@Autowired
	private IRegistroService registroService;
	
	@GetMapping("/registros")
	public List<Registro> index(){
		return registroService.findAll();
	}
}
