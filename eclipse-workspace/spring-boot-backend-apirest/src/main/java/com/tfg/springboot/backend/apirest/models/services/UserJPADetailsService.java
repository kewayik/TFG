package com.tfg.springboot.backend.apirest.models.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tfg.springboot.backend.apirest.models.dao.IUsuarioDao;
import com.tfg.springboot.backend.apirest.models.entity.Usuario;

@Service
public class UserJPADetailsService implements UserDetailsService{

	@Autowired
	private IUsuarioDao usuarioDao;
	
	@Transactional(readOnly = true)
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Usuario usuario = usuarioDao.findByUsername(username);
		
		if(usuario==null) {
			throw new UsernameNotFoundException("El username" +username+" no existe en el sistema");
		}
		
		List<GrantedAuthority> authorities = usuario.getRoles()
		.stream()
		.map(role -> new SimpleGrantedAuthority(role.getNombre()))
		.collect(Collectors.toList());
		
		return new User(username, usuario.getPassword(), true, true, true, true, authorities);
	}

}
