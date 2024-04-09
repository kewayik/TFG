package com.tfg.springboot.backend.apirest.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tfg.springboot.backend.apirest.models.entity.RutinaPers;
import com.tfg.springboot.backend.apirest.models.services.IRutinaPersService;

@RestController
@RequestMapping("/api")
public class RutinaPersRestController {
	
	@Autowired
	private IRutinaPersService rutinapersService;
	
	@GetMapping("rutinasPers")
	public List<RutinaPers> index(){
		return rutinapersService.findAll();
	}
}
