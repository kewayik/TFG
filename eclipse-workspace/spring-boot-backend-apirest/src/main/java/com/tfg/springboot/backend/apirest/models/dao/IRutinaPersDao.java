package com.tfg.springboot.backend.apirest.models.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.tfg.springboot.backend.apirest.models.entity.RutinaPers;

public interface IRutinaPersDao extends JpaRepository<RutinaPers, Integer> {
	
	@Transactional
    @Query(value = "SELECT id FROM rutinas_pred WHERE usuario_id = :usuarioID", nativeQuery = true)
    Integer findByIdDeUsuario(@Param("usuarioID") Integer usuarioId);

}
