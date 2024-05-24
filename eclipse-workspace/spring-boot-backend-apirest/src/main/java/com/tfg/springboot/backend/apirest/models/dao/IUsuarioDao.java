package com.tfg.springboot.backend.apirest.models.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.tfg.springboot.backend.apirest.models.entity.Usuario;

public interface IUsuarioDao extends JpaRepository<Usuario, Integer> {
	
	public Usuario findByUsername(String username);
		
	@Transactional
    @Modifying
    @Query(value = "DELETE FROM actividadesusuarios WHERE usuarios_fk = :userId", nativeQuery = true)
    void deleteActividadesUsuariosByUserId(@Param("userId") Integer userId);
	
	@Transactional
    @Modifying
    @Query(value = "DELETE FROM rutinas_pred WHERE usuario_id = :userID", nativeQuery = true)
    void deleteRutinaPersonalizada(@Param("userID") Integer userId);
	
	@Transactional
	@Modifying
	@Query(value = "SELECT id FROM rutinas_pred WHERE usuario_id = :userID", nativeQuery = true)
	List<Integer> obtenerIdRutinaPersonalizada(@Param("userID") Integer userId);
	

}
