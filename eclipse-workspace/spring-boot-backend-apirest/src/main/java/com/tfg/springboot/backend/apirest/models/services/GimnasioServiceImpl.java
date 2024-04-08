package com.tfg.springboot.backend.apirest.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.tfg.springboot.backend.apirest.models.dao.IGimnasioDao;
import com.tfg.springboot.backend.apirest.models.entity.Gimnasio;

public class GimnasioServiceImpl implements IGimnasioService {
	
	@Autowired
	private IGimnasioDao gimnasioDao;
	
	@Override
	public List<Gimnasio> findAll() {
		return gimnasioDao.findAll();
	}

}
