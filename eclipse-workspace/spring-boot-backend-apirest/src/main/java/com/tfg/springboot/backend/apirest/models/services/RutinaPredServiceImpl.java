package com.tfg.springboot.backend.apirest.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.tfg.springboot.backend.apirest.models.dao.IRutinaPredDao;
import com.tfg.springboot.backend.apirest.models.entity.RutinaPred;

public class RutinaPredServiceImpl implements IRutinaPredService {
	
	@Autowired
	private IRutinaPredDao rutinapredDao;
	
	@Override
	public List<RutinaPred> findAll() {
		return rutinapredDao.findAll();
	}

}
