package com.tfg.springboot.backend.apirest.models.entity;

import java.io.Serializable;
import java.util.List;

import jakarta.persistence.*;

@Entity
@Table(name = "materiales1")
public class Material1 implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String nombre;
	private String descripcion;
	private Boolean stock;
	private String tipo;
	
	@ManyToMany
	@JoinTable(name="ejerciciosmateriales", joinColumns = @JoinColumn(name="ejercicios_fk"),
	inverseJoinColumns = @JoinColumn(name="materiales_fk"))
	private List<Ejercicio> ejerciciosMat;

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

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Boolean getStock() {
		return stock;
	}

	public void setStock(Boolean stock) {
		this.stock = stock;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

}
