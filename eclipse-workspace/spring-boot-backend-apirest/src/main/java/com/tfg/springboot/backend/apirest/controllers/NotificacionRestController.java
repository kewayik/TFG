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

import com.tfg.springboot.backend.apirest.models.entity.Notificacion;
import com.tfg.springboot.backend.apirest.models.entity.Notificacion;
import com.tfg.springboot.backend.apirest.models.services.INotificacionService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class NotificacionRestController {
	
	@Autowired
	private INotificacionService notificacionService;
	
	@GetMapping("/notificaciones")
	public List<Notificacion> index(){
		return notificacionService.findAll();
	}
	
	@GetMapping("/notificaciones/{id}")
	public Notificacion show(@PathVariable Integer id) {
		return notificacionService.findById(id);
	}
	
	@PostMapping("/notificaciones")
	@ResponseStatus(HttpStatus.CREATED)
	public Notificacion create(@RequestBody Notificacion notificacion) {
		return notificacionService.save(notificacion);
	}
	
	@PutMapping("notificaciones/{id}")
	@ResponseStatus(HttpStatus.CREATED)
	public Notificacion update(@RequestBody Notificacion notificacion, @PathVariable Integer id) {
		
		Notificacion notificacionActual = notificacionService.findById(id);
		
		notificacionActual.setDescripcion(notificacion.getDescripcion());
		notificacionActual.setFecha(notificacion.getFecha());
		notificacionActual.setHoraGeneracion(notificacion.getHoraGeneracion());
		notificacionActual.setTipo(notificacion.getTipo());
		
		return notificacionService.save(notificacionActual);
		
	}
	
	@DeleteMapping("/notificaciones/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Integer id) {
		notificacionService.delete(id);
	}
}
