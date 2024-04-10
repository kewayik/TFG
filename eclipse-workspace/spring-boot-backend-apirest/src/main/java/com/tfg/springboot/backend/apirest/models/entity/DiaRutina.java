package com.tfg.springboot.backend.apirest.models.entity;

import java.io.Serializable;
import java.util.List;

import jakarta.persistence.*;

@Entity
@Table(name = "diasRutinas")
public class DiaRutina implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String nombre; // pierna, hombro, tiron...
	private String dia; // Jueves, viernes,...
	@ManyToMany
	@JoinTable(name="dias_rutinas_ejercicios", joinColumns = @JoinColumn(name="dia_rutina_id"),
	inverseJoinColumns = @JoinColumn(name="ejercicios_id"))
	private List<Ejercicio> ejercicios;

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDia() {
		return dia;
	}

	public void setDia(String dia) {
		this.dia = dia;
	}

	public List<Ejercicio> getEjercicios() {
		return ejercicios;
	}

	public void setEjercicios(List<Ejercicio> ejercicios) {
		this.ejercicios = ejercicios;
	}

}
