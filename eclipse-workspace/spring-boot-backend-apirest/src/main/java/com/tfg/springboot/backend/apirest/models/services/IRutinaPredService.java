package com.tfg.springboot.backend.apirest.models.services;

import java.util.List;

import com.tfg.springboot.backend.apirest.models.entity.RutinaPred;

public interface IRutinaPredService {

	public List<RutinaPred> findAll();
}
