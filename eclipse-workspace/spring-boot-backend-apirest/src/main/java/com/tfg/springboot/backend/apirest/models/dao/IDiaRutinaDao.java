package com.tfg.springboot.backend.apirest.models.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.tfg.springboot.backend.apirest.models.entity.DiaRutina;

public interface IDiaRutinaDao extends JpaRepository<DiaRutina, Integer> {

	@Transactional
    @Modifying
    @Query("DELETE FROM DiaRutina dr WHERE :id MEMBER OF dr.ejercicios")
	void eliminarRelacionesPorEjercicioId(@Param("id")Integer id);
}
