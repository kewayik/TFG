package com.tfg.springboot.backend.apirest.models.services;

import java.util.List;

import com.tfg.springboot.backend.apirest.models.entity.Gimnasio;

public interface IGimnasioService {

	public List<Gimnasio> findAll();
}
