package com.tfg.springboot.backend.apirest.models.services;

import java.util.List;

import com.tfg.springboot.backend.apirest.models.entity.Actividad;

public interface IActividadService {
	
	public List<Actividad> findAll();
	
	public Actividad findById(Integer id);
	
	public Actividad save(Actividad actividad);
	
	public void delete(Integer id);
	
}
