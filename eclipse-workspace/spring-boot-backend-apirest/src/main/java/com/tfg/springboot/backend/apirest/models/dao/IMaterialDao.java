package com.tfg.springboot.backend.apirest.models.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tfg.springboot.backend.apirest.models.entity.Material;

public interface IMaterialDao extends JpaRepository<Material, Integer> {
	
}
