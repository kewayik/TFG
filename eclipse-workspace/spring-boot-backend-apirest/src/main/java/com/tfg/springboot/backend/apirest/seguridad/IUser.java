package com.tfg.springboot.backend.apirest.seguridad;


public interface IUser {

	boolean isAdmin();
	
	String getRol();
}
