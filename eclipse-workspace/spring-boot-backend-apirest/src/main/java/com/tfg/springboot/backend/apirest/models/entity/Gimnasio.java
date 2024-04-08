package com.tfg.springboot.backend.apirest.models.entity;

import java.io.Serializable;

import jakarta.persistence.*;

@Entity
@Table(name = "gimnasio")
public class Gimnasio implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String nombre;
	private int telefono;
	private String direccion;
	private String n_identificacion_fiscal;

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

	public int getTelefono() {
		return telefono;
	}

	public void setTelefono(int telefono) {
		this.telefono = telefono;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public String getN_identificacion_fiscal() {
		return n_identificacion_fiscal;
	}

	public void setN_identificacion_fiscal(String n_identificacion_fiscal) {
		this.n_identificacion_fiscal = n_identificacion_fiscal;
	}

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
}
