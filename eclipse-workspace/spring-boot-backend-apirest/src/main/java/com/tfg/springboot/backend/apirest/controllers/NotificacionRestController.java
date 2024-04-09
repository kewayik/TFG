package com.tfg.springboot.backend.apirest.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tfg.springboot.backend.apirest.models.entity.Notificacion;
import com.tfg.springboot.backend.apirest.models.services.INotificacionService;

@RestController
@RequestMapping("/api")
public class NotificacionRestController {
	
	@Autowired
	private INotificacionService notificacionService;
	
	@GetMapping("/notificaciones")
	public List<Notificacion> index(){
		return notificacionService.findAll();
	}
}
