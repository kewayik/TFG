package com.tfg.springboot.backend.apirest.models.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.tfg.springboot.backend.apirest.models.entity.Ejercicio;

public interface IEjercicioDao extends JpaRepository<Ejercicio, Integer> {

	@Transactional
    @Modifying
    @Query(value = "DELETE FROM dias_rutinas_ejercicios WHERE ejercicios_id = :ejercicioID", nativeQuery = true)
    void deleteEjerciciosDiasRutinas(@Param("ejercicioID") Integer ejercicioId);
	
	@Transactional
    @Modifying
    @Query(value = "DELETE FROM ejerciciosmateriales WHERE ejercicios_fk = :ejercicioID", nativeQuery = true)
    void deleteEjerciciosMateriales(@Param("ejercicioID") Integer ejercicioId);
	
	@Transactional
    @Modifying
    @Query(value = "INSERT INTO ejerciciosmateriales (ejercicios_fk, materiales_fk) " +
                   "SELECT :ejercicioId, :materialId " +
                   "FROM dual " +
                   "WHERE NOT EXISTS " +
                   "(SELECT 1 FROM ejerciciosmateriales WHERE ejercicios_fk = :ejercicioId AND materiales_fk = :materialId)",
           nativeQuery = true)
    void addEjercicioMateriales(@Param("ejercicioId") Integer ejercicioId, @Param("materialId") Integer materialId);
}
