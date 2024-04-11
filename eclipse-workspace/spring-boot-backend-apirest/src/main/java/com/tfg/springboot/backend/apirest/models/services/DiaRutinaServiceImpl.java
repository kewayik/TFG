package com.tfg.springboot.backend.apirest.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tfg.springboot.backend.apirest.models.dao.IDiaRutinaDao;
import com.tfg.springboot.backend.apirest.models.entity.DiaRutina;

@Service
public class DiaRutinaServiceImpl implements IDiaRutinaService {
	
	@Autowired
	private IDiaRutinaDao diarutinaDao;
	
	@Override
	@Transactional(readOnly = true)
	public List<DiaRutina> findAll() {
		return diarutinaDao.findAll();
	}

	@Override
	@Transactional(readOnly = true)
	public DiaRutina findById(Integer id) {
		return diarutinaDao.findById(id).orElse(null);
	}

	@Override
	@Transactional
	public DiaRutina save(DiaRutina diaRutina) {
		return diarutinaDao.save(diaRutina);
	}

	@Override
	@Transactional
	public void delete(Integer id) {
		diarutinaDao.deleteById(id);
		
	}

}
