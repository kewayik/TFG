package com.tfg.springboot.backend.apirest.models.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tfg.springboot.backend.apirest.models.dao.IRutinaPersDao;
import com.tfg.springboot.backend.apirest.models.dao.IUsuarioDao;
import com.tfg.springboot.backend.apirest.models.entity.Usuario;
import com.tfg.springboot.backend.apirest.seguridad.UserRequest;
@Service
public class UsuarioServiceImpl implements IUsuarioService{

	
	@Autowired
	private IUsuarioDao usuarioDao;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private IRutinaPersDao rutinaPersDao;
	
	@Override
	@Transactional(readOnly = true)
	public List<Usuario> findAll() {
		return usuarioDao.findAll();
	}

	@Override
	@Transactional(readOnly = true)
	public Usuario findById(Integer id) {
		return usuarioDao.findById(id).orElse(null);
	}

	@Override
	@Transactional
	public Usuario save(Usuario usuario) {
		usuario.setPassword(passwordEncoder.encode(usuario.getPassword()));
		return usuarioDao.save(usuario);
	}

	
	@Override
	@Transactional
	public Optional<Usuario> update(UserRequest usuario, Integer id) {
		
		Optional<Usuario> usuarioOptional = usuarioDao.findById(id);
		
		if(usuarioOptional.isPresent()) {
			Usuario usuarioActual = usuarioOptional.get();
			usuarioActual.setNombre(usuario.getNombre());
			usuarioActual.setApellidos(usuario.getApellidos());
			usuarioActual.setDni(usuario.getDni());
			usuarioActual.setEmail(usuario.getEmail());
			usuarioActual.setDomicilio(usuario.getDomicilio());
			usuarioActual.setUsername(usuario.getUsername());
			usuarioActual.setRol(usuario.getRol());
			usuarioActual.setFechaNacimiento(usuario.getFechaNacimiento());
			usuarioActual.setRegistros(usuario.getRegistros());
			usuarioActual.setFoto(usuario.getFoto());
			usuarioActual.setDadoDeAlta(usuario.isDadoDeAlta());
			usuarioActual.setTelefono(usuario.getTelefono());
			return Optional.of(usuarioDao.save(usuarioActual));
		}
		return Optional.empty();
		
	}
	
	
	@Override
	@Transactional
	public void delete(Integer id) {
		
		System.out.println("Id de usuario: "+id+" Id de la rutina: "+usuarioDao.obtenerIdRutinaPersonalizada(id));
		
		if(usuarioDao.obtenerIdRutinaPersonalizada(id).size()!=0) {
			rutinaPersDao.deleteById(usuarioDao.obtenerIdRutinaPersonalizada(id).get(0));
		}
		
		usuarioDao.deleteRutinaPersonalizada(id);
		usuarioDao.deleteActividadesUsuariosByUserId(id);
		usuarioDao.deleteById(id);
		
	}

}
