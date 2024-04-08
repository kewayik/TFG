package com.tfg.springboot.backend.apirest.models.services;

import java.util.List;

import com.tfg.springboot.backend.apirest.models.entity.Ejercicio;

public interface IEjercicioService {
	
	public List<Ejercicio> findAll();
	
}
