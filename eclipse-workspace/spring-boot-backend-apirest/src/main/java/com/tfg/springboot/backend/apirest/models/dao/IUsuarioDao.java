package com.tfg.springboot.backend.apirest.models.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.tfg.springboot.backend.apirest.models.entity.Usuario;

public interface IUsuarioDao extends JpaRepository<Usuario, Integer> {
	
	public Usuario findByEmail(String email);
	
	
	@Transactional
    @Modifying
    @Query(value = "DELETE FROM actividadesusuarios WHERE usuarios_fk = :userId", nativeQuery = true)
    void deleteActividadesUsuariosByUserId(@Param("userId") Integer userId);
}
