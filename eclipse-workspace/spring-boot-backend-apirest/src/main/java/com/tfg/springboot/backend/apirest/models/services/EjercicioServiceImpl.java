package com.tfg.springboot.backend.apirest.models.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tfg.springboot.backend.apirest.models.dao.IDiaRutinaDao;
import com.tfg.springboot.backend.apirest.models.dao.IEjercicioDao;
import com.tfg.springboot.backend.apirest.models.entity.DiaRutina;
import com.tfg.springboot.backend.apirest.models.entity.Ejercicio;

@Service
public class EjercicioServiceImpl implements IEjercicioService {
	
	@Autowired
	private IEjercicioDao ejercicioDao;
	
	@Autowired
	private IDiaRutinaDao diaRutinaDao;
	
	@Override
	@Transactional(readOnly = true)
	public List<Ejercicio> findAll() {
		return ejercicioDao.findAll();
	}

	@Override
	@Transactional(readOnly = true)
	public Ejercicio findById(Integer id) {
		return ejercicioDao.findById(id).orElse(null);
	}

	@Override
	@Transactional
	public Ejercicio save(Ejercicio ejercicio) {
		return ejercicioDao.save(ejercicio);
	}

	@Override
	@Transactional
	public void delete(Integer id) {
		ejercicioDao.deleteEjerciciosMateriales(id);
		ejercicioDao.deleteEjerciciosDiasRutinas(id);
		ejercicioDao.deleteById(id);
		
	}

}
