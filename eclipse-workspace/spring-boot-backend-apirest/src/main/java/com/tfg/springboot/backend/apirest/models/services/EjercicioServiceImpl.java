package com.tfg.springboot.backend.apirest.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tfg.springboot.backend.apirest.models.dao.IEjercicioDao;
import com.tfg.springboot.backend.apirest.models.entity.Ejercicio;
import com.tfg.springboot.backend.apirest.models.entity.Material;

@Service
public class EjercicioServiceImpl implements IEjercicioService {
	
	@Autowired
	private IEjercicioDao ejercicioDao;
	
	
	@Override
	@Transactional(readOnly = true)
	public List<Ejercicio> findAll() {
		return ejercicioDao.findAll();
	}

	@Override
	@Transactional(readOnly = true)
	public Ejercicio findById(Integer id) {
		return ejercicioDao.findById(id).orElse(null);
	}

	@Override
	@Transactional
	public Ejercicio save(Ejercicio ejercicio) {
			
			
		    // Guardar el ejercicio
		    Ejercicio savedEjercicio = ejercicioDao.save(ejercicio);		    
		    
		    List<Material> materiales = ejercicio.getMaterialesEj();
		    
		    for (Material material : materiales) {
		    	System.out.println("Ejercicio: "+ejercicio.getId()+ "con Material: "+material.getId());
		    	ejercicioDao.addEjercicioMateriales(ejercicio.getId(), material.getId());
		    }
		  
		    return savedEjercicio;
	}

	@Override
	@Transactional
	public void delete(Integer id) {
		ejercicioDao.deleteEjerciciosMateriales(id);
		ejercicioDao.deleteEjerciciosDiasRutinas(id);
		ejercicioDao.deleteById(id);
		
	}

}
