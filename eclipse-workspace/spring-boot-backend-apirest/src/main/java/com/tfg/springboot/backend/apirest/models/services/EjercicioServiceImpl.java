package com.tfg.springboot.backend.apirest.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.tfg.springboot.backend.apirest.models.dao.IEjercicioDao;
import com.tfg.springboot.backend.apirest.models.entity.Ejercicio;

public class EjercicioServiceImpl implements IEjercicioService {
	
	@Autowired
	private IEjercicioDao ejercicioDao;
	
	@Override
	public List<Ejercicio> findAll() {
		return ejercicioDao.findAll();
	}

}
