package com.tfg.springboot.backend.apirest.models.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tfg.springboot.backend.apirest.models.entity.Cliente;
import com.tfg.springboot.backend.apirest.models.entity.Material;


public interface IMaterialDao extends JpaRepository <Material, Long>{

}
