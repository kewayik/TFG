package com.tfg.springboot.backend.apirest.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tfg.springboot.backend.apirest.models.dao.INotificacionDao;
import com.tfg.springboot.backend.apirest.models.entity.Notificacion;
@Service
public class NotificacionServiceImpl implements INotificacionService {

	@Autowired
	private INotificacionDao notificacionDao;
	
	@Override
	public List<Notificacion> findAll() {
		return notificacionDao.findAll();
	}

}
