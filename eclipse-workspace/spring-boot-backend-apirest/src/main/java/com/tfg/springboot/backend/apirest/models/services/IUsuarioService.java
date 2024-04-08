package com.tfg.springboot.backend.apirest.models.services;

import java.util.List;

import com.tfg.springboot.backend.apirest.models.entity.Usuario;

public interface IUsuarioService {

	public List<Usuario> findAll();
}
