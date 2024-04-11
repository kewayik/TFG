package com.tfg.springboot.backend.apirest.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tfg.springboot.backend.apirest.models.dao.IRutinaPredDao;
import com.tfg.springboot.backend.apirest.models.entity.RutinaPred;
@Service
public class RutinaPredServiceImpl implements IRutinaPredService {
	
	@Autowired
	private IRutinaPredDao rutinapredDao;
	
	@Override
	@Transactional(readOnly = true)
	public List<RutinaPred> findAll() {
		return rutinapredDao.findAll();
	}

	@Override
	@Transactional(readOnly = true)
	public RutinaPred findById(Integer id) {
		return rutinapredDao.findById(id).orElse(null);
	}

	@Override
	@Transactional
	public RutinaPred save(RutinaPred rutinaPred) {
		return rutinapredDao.save(rutinaPred);
	}

	@Override
	@Transactional
	public void delete(Integer id) {
		rutinapredDao.deleteById(id);
		
	}

}
