package com.tfg.springboot.backend.apirest.models.services;

import java.util.List;

import com.tfg.springboot.backend.apirest.models.entity.Notificacion;

public interface INotificacionService {

	public List<Notificacion> findAll();
	
	public Notificacion findById(Integer id);
	
	public Notificacion save(Notificacion notificacion);
	
	public void delete(Integer id);
	
}
