package com.tfg.springboot.backend.apirest.models.services;

import java.util.List;

import com.tfg.springboot.backend.apirest.models.entity.RutinaPers;
public interface IRutinaPersService {
	
	public List<RutinaPers> findAll();
	
	public RutinaPers findById(Integer id);
	
	public RutinaPers findByIdDeUsuario(Integer id);
	
	public RutinaPers save(RutinaPers rutinaPers);
	
	public void delete(Integer id);
	
}
