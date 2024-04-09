package com.tfg.springboot.backend.apirest.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tfg.springboot.backend.apirest.models.entity.Gimnasio;
import com.tfg.springboot.backend.apirest.models.services.IGimnasioService;

@RestController
@RequestMapping("/api")
public class GimnasioRestController {

		@Autowired
		private IGimnasioService gimnasioService;
		
		@GetMapping("/gimnasios")
		public List<Gimnasio> index(){
			return gimnasioService.findAll();
		}
}
