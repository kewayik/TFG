package com.tfg.springboot.backend.apirest.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tfg.springboot.backend.apirest.models.dao.IMaterialDao;
import com.tfg.springboot.backend.apirest.models.entity.Material;
@Service
public class MaterialServiceImpl implements IMaterialService {
	
	@Autowired
	private IMaterialDao materialDao;
	
	@Override
	@Transactional(readOnly = true)
	public List<Material> findAll() {
		return materialDao.findAll();
	}

	@Override
	@Transactional(readOnly = true)
	public Material findById(Integer id) {
		return materialDao.findById(id).orElse(null);
	}

	@Override
	@Transactional
	public Material save(Material material) {
		return materialDao.save(material);
	}

	@Override
	@Transactional
	public void delete(Integer id) {
		materialDao.deleteById(id);
		
	}

}
