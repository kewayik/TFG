package com.tfg.springboot.backend.apirest.models.services;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.tfg.springboot.backend.apirest.models.entity.Material;

public interface IMaterialService {
	
	public List<Material> findAll();
	
	public Page<Material> findAll(Pageable pageable);
	
	public Material findById(Long id);
	
	public Material save(Material cliente);
	
	public void delete(Long id);
	
}
