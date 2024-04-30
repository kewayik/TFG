package com.tfg.springboot.backend.apirest.models.entity;

import java.io.Serializable;
import java.sql.Date;
import java.util.List;

import jakarta.persistence.*;

@Entity
@Table(name = "usuarios")
public class Usuario implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String nombre;
	private String apellidos;
	@Column(unique = true)
	private String dni;
	@Column(unique = true)
	private String email;
	private String domicilio;
	private String telefono;
	private String contraseña;
	private String rol;
	private Date fechaNacimiento;
	private String foto;
	private Boolean dadoDeAlta;
	
	
	@OneToMany(mappedBy = "usuario", cascade = CascadeType.REMOVE)
	private List<Registro> registros;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

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

	public String getDomicilio() {
		return domicilio;
	}

	public void setDomicilio(String domicilio) {
		this.domicilio = domicilio;
	}

	public String getContraseña() {
		return contraseña;
	}

	public void setContraseña(String contraseña) {
		this.contraseña = contraseña;
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

	public List<Registro> getRegistros() {
		return registros;
	}

	public void setRegistros(List<Registro> registros) {
		this.registros = registros;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getFoto() {
		return foto;
	}

	public void setFoto(String foto) {
		this.foto = foto;
	}

	public boolean isDadoDeAlta() {
		return dadoDeAlta;
	}

	public void setDadoDeAlta(boolean dadoDeAlta) {
		this.dadoDeAlta = dadoDeAlta;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

}
