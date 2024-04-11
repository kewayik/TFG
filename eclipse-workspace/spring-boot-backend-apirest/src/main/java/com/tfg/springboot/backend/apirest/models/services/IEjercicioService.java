package com.tfg.springboot.backend.apirest.models.services;

import java.util.List;

import com.tfg.springboot.backend.apirest.models.entity.Ejercicio;

public interface IEjercicioService {
	
	public List<Ejercicio> findAll();
	
	public Ejercicio findById(Integer id);
	
	public Ejercicio save(Ejercicio ejercicio);
	
	public void delete(Integer id);
	
}
