package com.tfg.springboot.backend.apirest.models.services;

import java.util.List;

import com.tfg.springboot.backend.apirest.models.entity.DiaRutina;

public interface IDiaRutinaService {
	
	public List<DiaRutina> findAll();
}
