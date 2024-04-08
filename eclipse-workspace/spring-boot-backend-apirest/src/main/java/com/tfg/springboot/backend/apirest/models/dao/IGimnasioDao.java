package com.tfg.springboot.backend.apirest.models.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tfg.springboot.backend.apirest.models.entity.Gimnasio;

public interface IGimnasioDao extends JpaRepository<Gimnasio, Integer> {

}
