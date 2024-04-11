package com.tfg.springboot.backend.apirest.models.services;

import java.util.List;

import com.tfg.springboot.backend.apirest.models.entity.Material1;

public interface IMaterial1Service {

	public List<Material1> findAll();
	
	public Material1 findById(Integer id);
	
	public Material1 save(Material1 material);
	
	public void delete(Integer id);
	
}
