package com.tfg.springboot.backend.apirest.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tfg.springboot.backend.apirest.models.entity.Actividad;
import com.tfg.springboot.backend.apirest.models.services.IActividadService;

@RestController
@RequestMapping("/api")
public class ActividadRestController {

	@Autowired
	private IActividadService actividadService;
	
	@GetMapping("/actividades")
	public List<Actividad> index() {
		return actividadService.findAll();
	}
}
