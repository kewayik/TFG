package com.tfg.springboot.backend.apirest.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tfg.springboot.backend.apirest.models.dao.INotificacionDao;
import com.tfg.springboot.backend.apirest.models.entity.Notificacion;
@Service
public class NotificacionServiceImpl implements INotificacionService {

	@Autowired
	private INotificacionDao notificacionDao;
	
	@Override
	@Transactional(readOnly = true)
	public List<Notificacion> findAll() {
		return notificacionDao.findAll();
	}

	@Override
	@Transactional(readOnly = true)
	public Notificacion findById(Integer id) {
		return notificacionDao.findById(id).orElse(null);
	}

	@Override
	@Transactional
	public Notificacion save(Notificacion notificacion) {
		return notificacionDao.save(notificacion);
	}

	@Override
	@Transactional
	public void delete(Integer id) {
		notificacionDao.deleteById(id);
		
	}

}
