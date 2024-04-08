package com.tfg.springboot.backend.apirest.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.tfg.springboot.backend.apirest.models.dao.IRegistroDao;
import com.tfg.springboot.backend.apirest.models.entity.Registro;

public class RegistroServiceImpl implements IRegistroService {

	@Autowired
	private IRegistroDao registroDao;
	
	@Override
	public List<Registro> findAll() {
		return registroDao.findAll();
	}

}
