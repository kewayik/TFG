package com.tfg.springboot.backend.apirest.models.services;

import java.util.List;

import com.tfg.springboot.backend.apirest.models.entity.DiaRutina;

public interface IDiaRutinaService {
	
	public List<DiaRutina> findAll();
	
	public DiaRutina findById(Integer id);
	
	public DiaRutina save(DiaRutina diaRutina);
	
	public void delete(Integer id);
	
}
