package com.tfg.springboot.backend.apirest.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tfg.springboot.backend.apirest.models.dao.IMaterial1Dao;
import com.tfg.springboot.backend.apirest.models.entity.Material1;
@Service
public class Material1ServiceImpl implements IMaterial1Service {
	
	@Autowired
	private IMaterial1Dao material1Dao;
	
	@Override
	@Transactional(readOnly = true)
	public List<Material1> findAll() {
		return material1Dao.findAll();
	}

	@Override
	@Transactional(readOnly = true)
	public Material1 findById(Integer id) {
		return material1Dao.findById(id).orElse(null);
	}

	@Override
	@Transactional
	public Material1 save(Material1 material) {
		return material1Dao.save(material);
	}

	@Override
	@Transactional
	public void delete(Integer id) {
		material1Dao.deleteById(id);
		
	}

}
