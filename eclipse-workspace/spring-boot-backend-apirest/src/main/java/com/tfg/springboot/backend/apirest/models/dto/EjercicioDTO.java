package com.tfg.springboot.backend.apirest.models.dto;

import java.io.Serializable;
import java.util.List;

public class EjercicioDTO implements Serializable {

	private Integer id;
    private String nombre;
    private String descripcion;
    private String grupoMuscular;
    private List<String[]> materiales;

    // Constructor, getters y setters

    // Constructor
    public EjercicioDTO(Integer id, String nombre, String descripcion, String grupoMuscular, List<String[]> materiales) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.grupoMuscular = grupoMuscular;
        this.materiales = materiales;
    }

    // Getters y setters
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
    
	public List<String[]> getMateriales() {
		return materiales;
	}

	public void setMateriales(List<String[]> materiales) {
		this.materiales = materiales;
	}

	private static final long serialVersionUID = 1L;
}
