package com.tfg.springboot.backend.apirest.models.entity;

import java.io.Serializable;
import java.util.List;

import jakarta.persistence.*;

@Entity
@Table(name = "ejercicios")
public class Ejercicio implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String nombre;
	@Column(length = 1000)
	private String descripcion;
	private String grupoMuscular;
	
	@OneToMany(mappedBy = "ejercicio", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Registro> registros;
	
	@ManyToMany(mappedBy = "ejerciciosMat")
	private List<Material> materialesEj;
	
	@ManyToMany(mappedBy = "ejercicios")
	private List<DiaRutina> diasRutinas;

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

	public String getGrupoMuscular() {
		return grupoMuscular;
	}

	public void setGrupoMuscular(String grupoMuscular) {
		this.grupoMuscular = grupoMuscular;
	}
	/*
	public List<Registro> getRegistros() {
		return registros;
	}

	public void setRegistros(List<Registro> registros) {
		this.registros = registros;
	}
	*/
	public List<Material> getMaterialesEj() {
		return materialesEj;
	}

	public void setMaterialesEj(List<Material> materialesEj) {
		this.materialesEj = materialesEj;
	}
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

}
