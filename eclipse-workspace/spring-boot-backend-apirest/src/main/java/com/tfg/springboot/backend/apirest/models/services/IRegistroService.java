package com.tfg.springboot.backend.apirest.models.services;

import java.util.List;

import com.tfg.springboot.backend.apirest.models.entity.Registro;

public interface IRegistroService {

	public List<Registro> findAll();
	
	public Registro findById(Integer id);
	
	public Registro save(Registro registro);
	
	public void delete(Integer id);
	
}
