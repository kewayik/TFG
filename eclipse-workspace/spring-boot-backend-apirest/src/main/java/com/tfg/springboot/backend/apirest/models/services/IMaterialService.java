package com.tfg.springboot.backend.apirest.models.services;

import java.util.List;

import com.tfg.springboot.backend.apirest.models.entity.Ejercicio;
import com.tfg.springboot.backend.apirest.models.entity.Material;

public interface IMaterialService {

	public List<Material> findAll();
	
	public Material findById(Integer id);
	
	public Material save(Material material);
	
	public void delete(Integer id);
	
	public List<Ejercicio> ejerciciosMaterial(Integer id);
	
}
