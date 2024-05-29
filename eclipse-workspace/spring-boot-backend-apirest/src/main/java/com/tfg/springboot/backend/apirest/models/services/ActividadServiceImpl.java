package com.tfg.springboot.backend.apirest.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tfg.springboot.backend.apirest.models.dao.IActividadDao;
import com.tfg.springboot.backend.apirest.models.entity.Actividad;
import com.tfg.springboot.backend.apirest.models.entity.Notificacion;

@Service
public class ActividadServiceImpl implements IActividadService {
	
	@Autowired
	private IActividadDao actividadDao;

	@Autowired
	private INotificacionService notificacionService; 
	
	@Override
	@Transactional(readOnly = true)
	public List<Actividad> findAll() {
		return actividadDao.findAll();
	}

	@Override
	@Transactional(readOnly = true)
	public Actividad findById(Integer id) {
		return actividadDao.findById(id).orElse(null);
	}

	@Override
	@Transactional
	public Actividad save(Actividad actividad) {
		Actividad savedActividad = actividadDao.save(actividad);

		Notificacion notificacion = new Notificacion();
		notificacion.setDescripcion("Se ha publicado una nueva actividad: " + actividad.getNombre() + 
		    " en la sala " + actividad.getSala() + " con aforo de " + actividad.getAforo() + 
		    " y horario " + actividad.getHorario());
		notificacion.setTipo("Anuncio");
		notificacion.setFecha(new java.sql.Date(System.currentTimeMillis()));
		 notificacion.setHoraGeneracion(java.time.LocalTime.now().toString());

		notificacionService.save(notificacion);

		return savedActividad;
	}

	@Override
	@Transactional
	public void delete(Integer id) {
		actividadDao.deleteById(id);
	}
}
