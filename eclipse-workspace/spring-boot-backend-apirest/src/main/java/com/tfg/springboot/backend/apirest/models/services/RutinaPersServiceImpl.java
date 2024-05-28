package com.tfg.springboot.backend.apirest.models.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tfg.springboot.backend.apirest.models.dao.IRutinaPersDao;
import com.tfg.springboot.backend.apirest.models.entity.RutinaPers;
@Service
public class RutinaPersServiceImpl implements IRutinaPersService {

	@Autowired
	private IRutinaPersDao rutinapersDao;
	
	
	@Override
	@Transactional(readOnly = true)
	public List<RutinaPers> findAll() {
		return rutinapersDao.findAll();
	}


	@Override
	@Transactional(readOnly = true)
	public RutinaPers findById(Integer id) {
		return rutinapersDao.findById(id).orElse(null);
	}
	
	@Override
	public RutinaPers findByIdDeUsuario(Integer id) {
		
		
		Integer idRutina = rutinapersDao.findByIdDeUsuario(id);
		System.out.println("Id de la rutina: "+idRutina+" Id del usuario: "+id);
		if(idRutina!=null) {
			return rutinapersDao.findById(idRutina).orElse(null);
		}else {
			return null;
		}
		

	}

	@Override
	@Transactional
	public RutinaPers save(RutinaPers rutinaPers) {
		return rutinapersDao.save(rutinaPers);
	}


	@Override
	@Transactional
	public void delete(Integer id) {
		rutinapersDao.deleteById(id);
		
	}


}
