package com.tfg.springboot.backend.apirest.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tfg.springboot.backend.apirest.models.dao.IRegistroDao;
import com.tfg.springboot.backend.apirest.models.entity.Registro;
@Service
public class RegistroServiceImpl implements IRegistroService {

	@Autowired
	private IRegistroDao registroDao;
	
	@Override
	@Transactional(readOnly = true)
	public List<Registro> findAll() {
		return registroDao.findAll();
	}

	@Override
	@Transactional(readOnly = true)
	public Registro findById(Integer id) {
		return registroDao.findById(id).orElse(null);
	}

	@Override
	@Transactional
	public Registro save(Registro registro) {
		return registroDao.save(registro);
	}

	@Override
	@Transactional
	public void delete(Integer id) {
		registroDao.deleteById(id);
		
	}

}
