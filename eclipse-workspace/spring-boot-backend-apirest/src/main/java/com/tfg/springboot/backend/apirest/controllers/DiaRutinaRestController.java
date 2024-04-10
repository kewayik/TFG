package com.tfg.springboot.backend.apirest.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tfg.springboot.backend.apirest.models.entity.DiaRutina;
import com.tfg.springboot.backend.apirest.models.services.IDiaRutinaService;

@RestController
@RequestMapping("/api")
public class DiaRutinaRestController {
	
	@Autowired
	private IDiaRutinaService diarutinaService;
	
	@GetMapping("/diasrutinas")
	public List<DiaRutina> index(){
		return diarutinaService.findAll();
	}
}
