package com.tfg.springboot.backend.apirest.models.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.tfg.springboot.backend.apirest.models.entity.Material;

public interface IMaterialDao extends JpaRepository<Material, Integer> {
	
	@Transactional
    @Modifying
    @Query(value = "DELETE FROM ejerciciosmateriales WHERE materiales_fk = :materialID", nativeQuery = true)
    void deleteEjerciciosMateriales(@Param("materialID") Integer materialId);
}
