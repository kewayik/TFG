package com.tfg.springboot.backend.apirest.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tfg.springboot.backend.apirest.models.entity.RutinaPred;
import com.tfg.springboot.backend.apirest.models.services.IRutinaPredService;

@RestController
@RequestMapping("/api")
public class RutinaPredRestController {
	
	@Autowired
	private IRutinaPredService rutinapredService;
	
	@GetMapping("/rutinasPred")
	public List<RutinaPred> index(){
		return rutinapredService.findAll();
	}
}
