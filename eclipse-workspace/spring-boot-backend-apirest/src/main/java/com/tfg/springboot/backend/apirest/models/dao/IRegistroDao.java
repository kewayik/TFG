package com.tfg.springboot.backend.apirest.models.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tfg.springboot.backend.apirest.models.entity.Registro;

public interface IRegistroDao extends JpaRepository<Registro, Integer> {

}
