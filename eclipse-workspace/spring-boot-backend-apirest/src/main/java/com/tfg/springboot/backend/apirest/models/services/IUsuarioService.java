package com.tfg.springboot.backend.apirest.models.services;

import java.util.List;
import java.util.Optional;

import com.tfg.springboot.backend.apirest.models.entity.Usuario;
import com.tfg.springboot.backend.apirest.seguridad.UserRequest;

public interface IUsuarioService {

	public List<Usuario> findAll();
	
	public Usuario findById(Integer id);
	
	public Usuario save(Usuario usuario);
	
	public void delete(Integer id);
	
	Optional<Usuario> update(UserRequest usuario, Integer id);
	
}
