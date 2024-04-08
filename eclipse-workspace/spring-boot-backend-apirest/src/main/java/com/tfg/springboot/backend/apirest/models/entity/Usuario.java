package com.tfg.springboot.backend.apirest.models.entity;

import java.io.Serializable;
import java.util.Date;
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
	private String contraseña;
	private String rol;
	private Date fechaNacimiento;
	
	@OneToOne(mappedBy = "usuario")
    private RutinaPers rutinaPersonalizada;
	
	@ManyToMany(mappedBy = "usuariosAct")
	private List<Actividad> actividadesUsu;

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

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

}