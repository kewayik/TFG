package com.tfg.springboot.backend.apirest.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tfg.springboot.backend.apirest.models.dao.IActividadDao;
import com.tfg.springboot.backend.apirest.models.entity.Actividad;

@Service
public class ActividadServiceImpl implements IActividadService {
	
	@Autowired
	private IActividadDao actividadDao;
	
	@Override
	@Transactional(readOnly = true)
	public List<Actividad> findAll() {
		return actividadDao.findAll();
	}
}
