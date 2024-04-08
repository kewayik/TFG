package com.tfg.springboot.backend.apirest.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.tfg.springboot.backend.apirest.models.dao.IMaterial1Dao;
import com.tfg.springboot.backend.apirest.models.entity.Material1;

public class Material1ServiceImpl implements IMaterial1Service {
	
	@Autowired
	private IMaterial1Dao material1Dao;
	
	@Override
	public List<Material1> findAll() {
		return material1Dao.findAll();
	}

}
