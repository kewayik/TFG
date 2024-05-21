package com.tfg.springboot.backend.apirest.models.dao;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.tfg.springboot.backend.apirest.models.entity.Role;

public interface IRoleDao extends CrudRepository<Role, Integer> {

	Optional<Role> findByNombre(String name);
	
}
