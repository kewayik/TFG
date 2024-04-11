package com.tfg.springboot.backend.apirest.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tfg.springboot.backend.apirest.models.dao.IGimnasioDao;
import com.tfg.springboot.backend.apirest.models.entity.Gimnasio;
@Service
public class GimnasioServiceImpl implements IGimnasioService {
	
	@Autowired
	private IGimnasioDao gimnasioDao;
	
	@Override
	@Transactional(readOnly = true)
	public List<Gimnasio> findAll() {
		return gimnasioDao.findAll();
	}

	@Override
	@Transactional(readOnly = true)
	public Gimnasio findById(Integer id) {
		return gimnasioDao.findById(id).orElse(null);
	}

	@Override
	@Transactional
	public Gimnasio save(Gimnasio gimnasio) {
		return gimnasioDao.save(gimnasio);
	}

	@Override
	@Transactional
	public void delete(Integer id) {
		gimnasioDao.deleteById(id);
		
	}

}
