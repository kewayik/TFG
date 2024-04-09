package com.tfg.springboot.backend.apirest.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tfg.springboot.backend.apirest.models.dao.IGimnasioDao;
import com.tfg.springboot.backend.apirest.models.entity.Gimnasio;
@Service
public class GimnasioServiceImpl implements IGimnasioService {
	
	@Autowired
	private IGimnasioDao gimnasioDao;
	
	@Override
	public List<Gimnasio> findAll() {
		return gimnasioDao.findAll();
	}

}
