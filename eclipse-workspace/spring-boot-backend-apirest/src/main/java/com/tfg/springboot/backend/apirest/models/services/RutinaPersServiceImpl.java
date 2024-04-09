package com.tfg.springboot.backend.apirest.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tfg.springboot.backend.apirest.models.dao.IRutinaPersDao;
import com.tfg.springboot.backend.apirest.models.entity.RutinaPers;
@Service
public class RutinaPersServiceImpl implements IRutinaPersService {

	@Autowired
	private IRutinaPersDao rutinapersDao;
	
	
	@Override
	public List<RutinaPers> findAll() {
		return rutinapersDao.findAll();
	}

}
