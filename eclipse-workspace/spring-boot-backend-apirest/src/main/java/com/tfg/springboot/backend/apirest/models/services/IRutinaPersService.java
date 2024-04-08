package com.tfg.springboot.backend.apirest.models.services;

import java.util.List;

import com.tfg.springboot.backend.apirest.models.entity.RutinaPers;

public interface IRutinaPersService {
	
	public List<RutinaPers> findAll();
}
