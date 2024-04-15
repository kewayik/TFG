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
    @Query(value = "DELETE FROM rutinas_pred_dias_rutina WHERE dias_rutina_id = :diarutinaID", nativeQuery = true)
    void deleteDiasRutinasRutinasPred(@Param("diarutinaID") Integer diarutinaId);
}
