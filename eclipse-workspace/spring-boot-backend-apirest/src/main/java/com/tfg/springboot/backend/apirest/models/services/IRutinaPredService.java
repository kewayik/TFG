package com.tfg.springboot.backend.apirest.models.services;

import java.util.List;

import com.tfg.springboot.backend.apirest.models.entity.RutinaPred;

public interface IRutinaPredService {

	public List<RutinaPred> findAll();
	
	public RutinaPred findById(Integer id);
	
	public RutinaPred save(RutinaPred rutinaPred);
	
	public void delete(Integer id);
	
}
