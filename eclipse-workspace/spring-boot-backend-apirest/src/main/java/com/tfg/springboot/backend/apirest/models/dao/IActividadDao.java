package com.tfg.springboot.backend.apirest.models.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tfg.springboot.backend.apirest.models.entity.Actividad;

public interface IActividadDao extends JpaRepository<Actividad, Integer> {

}
