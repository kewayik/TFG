package com.tfg.springboot.backend.apirest.models.services;

import java.util.List;

import com.tfg.springboot.backend.apirest.models.entity.Notificacion;

public interface INotificacionService {

	public List<Notificacion> findAll();
}
