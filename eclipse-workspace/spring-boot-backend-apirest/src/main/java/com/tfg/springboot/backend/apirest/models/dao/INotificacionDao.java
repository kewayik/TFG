package com.tfg.springboot.backend.apirest.models.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tfg.springboot.backend.apirest.models.entity.Notificacion;

public interface INotificacionDao extends JpaRepository<Notificacion, Integer> {

}
