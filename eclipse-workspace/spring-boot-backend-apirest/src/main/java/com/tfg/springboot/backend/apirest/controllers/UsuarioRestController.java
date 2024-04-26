package com.tfg.springboot.backend.apirest.controllers;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.tfg.springboot.backend.apirest.models.entity.Usuario;
import com.tfg.springboot.backend.apirest.models.services.IUsuarioService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class UsuarioRestController {
	
	@Autowired
	private IUsuarioService usuarioService;
	
	@GetMapping("/usuarios")
	public List<Usuario> index(){
		return usuarioService.findAll();
	}
	
	@GetMapping("/usuarios/{id}")
	public Usuario show(@PathVariable Integer id) {
		return usuarioService.findById(id);
	}
	
	@PostMapping("/usuarios")
	@ResponseStatus(HttpStatus.CREATED)
	public Usuario create(@RequestBody Usuario usuario) {
		return usuarioService.save(usuario);
	}
	
	@PutMapping("/usuarios/{id}")
	@ResponseStatus(HttpStatus.CREATED)
	public Usuario update(@RequestBody Usuario usuario, @PathVariable Integer id) {
		
		Usuario usuarioActual = usuarioService.findById(id);
		
		usuarioActual.setNombre(usuario.getNombre());
		usuarioActual.setApellidos(usuario.getApellidos());
		usuarioActual.setDni(usuario.getDni());
		usuarioActual.setEmail(usuario.getEmail());
		usuarioActual.setDomicilio(usuario.getDomicilio());
		usuarioActual.setContraseña(usuario.getContraseña());
		usuarioActual.setRol(usuario.getRol());
		usuarioActual.setFechaNacimiento(usuario.getFechaNacimiento());
		usuarioActual.setRegistros(usuario.getRegistros());
		
		return usuarioService.save(usuarioActual);
		
	}
	
	@DeleteMapping("/usuarios/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Integer id) {
		usuarioService.delete(id);
	}
}
