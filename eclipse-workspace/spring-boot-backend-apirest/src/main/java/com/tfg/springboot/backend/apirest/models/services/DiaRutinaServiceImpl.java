package com.tfg.springboot.backend.apirest.models.services;

import java.util.List;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tfg.springboot.backend.apirest.models.dao.IDiaRutinaDao;
import com.tfg.springboot.backend.apirest.models.entity.DiaRutina;
import com.tfg.springboot.backend.apirest.models.entity.Ejercicio;

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
		
//		List<Ejercicio> ejercicios = new ArrayList<>();
//		for(Ejercicio ejercicio: diaRutina.getEjercicios()) {
//			ejercicio.setRegistros(null);
//			ejercicios.add(ejercicio);
//		}
//		diaRutina.setEjercicios(ejercicios);
		return diarutinaDao.save(diaRutina);
	}

	@Override
	@Transactional
	public void delete(Integer id) {
		diarutinaDao.deleteDiasRutinasRutinasPred(id);
		diarutinaDao.deleteById(id);
		
	}

}
