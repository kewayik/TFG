package com.tfg.springboot.backend.apirest.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tfg.springboot.backend.apirest.models.dao.IDiaRutinaDao;
import com.tfg.springboot.backend.apirest.models.entity.DiaRutina;

@Service
public class DiaRutinaServiceImpl implements IDiaRutinaService {
	
	@Autowired
	private IDiaRutinaDao diarutinaDao;
	
	@Override
	public List<DiaRutina> findAll() {
		return diarutinaDao.findAll();
	}

}
