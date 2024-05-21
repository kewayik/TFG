package com.tfg.springboot.backend.apirest.seguridad;

import java.sql.Date;
import java.util.List;

import com.tfg.springboot.backend.apirest.models.entity.Registro;

import jakarta.persistence.Column;

public class UserRequest implements IUser{

	private String nombre;
	private String apellidos;
	@Column(unique = true)
	private String dni;
	@Column(unique = true)
	private String email;
	private String username;
	private String domicilio;
	private String telefono;
	private String rol;
	private Date fechaNacimiento;
	private String foto;
	private Boolean dadoDeAlta;
	private boolean admin;
	private List<Registro> registros;

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellidos() {
		return apellidos;
	}

	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}

	public String getDni() {
		return dni;
	}

	public void setDni(String dni) {
		this.dni = dni;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getDomicilio() {
		return domicilio;
	}

	public void setDomicilio(String domicilio) {
		this.domicilio = domicilio;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public String getRol() {
		return rol;
	}

	public void setRol(String rol) {
		this.rol = rol;
	}

	public Date getFechaNacimiento() {
		return fechaNacimiento;
	}

	public void setFechaNacimiento(Date fechaNacimiento) {
		this.fechaNacimiento = fechaNacimiento;
	}

	public String getFoto() {
		return foto;
	}

	public void setFoto(String foto) {
		this.foto = foto;
	}

	public Boolean isDadoDeAlta() {
		return dadoDeAlta;
	}

	public void setDadoDeAlta(Boolean dadoDeAlta) {
		this.dadoDeAlta = dadoDeAlta;
	}

	public List<Registro> getRegistros() {
		return registros;
	}

	public Boolean getDadoDeAlta() {
		return dadoDeAlta;
	}

	public boolean isAdmin() {
		return admin;
	}

	public void setAdmin(boolean admin) {
		this.admin = admin;
	}

	public void setRegistros(List<Registro> registros) {
		this.registros = registros;
	}
}
