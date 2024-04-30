package com.tfg.springboot.backend.apirest.models.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tfg.springboot.backend.apirest.models.dao.IUsuarioDao;
import com.tfg.springboot.backend.apirest.models.entity.Usuario;
@Service
public class UsuarioServiceImpl implements IUsuarioService{

	
	@Autowired
	private IUsuarioDao usuarioDao;
	
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
		return usuarioDao.save(usuario);
	}

	@Override
	@Transactional
	public void delete(Integer id) {
		usuarioDao.deleteRutinaPersonalizada(id);
		usuarioDao.deleteActividadesUsuariosByUserId(id);
		usuarioDao.deleteById(id);
		
	}

	@Override
	@Transactional(readOnly = true)
	public Usuario findByEmail(String email) {
		return usuarioDao.findByEmail(email);
	}

	


}
