package com.tfg.springboot.backend.apirest.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tfg.springboot.backend.apirest.models.entity.Material1;
import com.tfg.springboot.backend.apirest.models.services.IMaterial1Service;

@RestController
@RequestMapping("/api")
public class Material1RestController {
	
	@Autowired
	private IMaterial1Service material1Service;
	
	@GetMapping("/materiales1")
	public List<Material1> index(){
		return material1Service.findAll();
	}
}
