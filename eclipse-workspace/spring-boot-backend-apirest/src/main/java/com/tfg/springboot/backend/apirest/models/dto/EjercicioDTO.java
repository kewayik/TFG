package com.tfg.springboot.backend.apirest.models.dto;

import java.io.Serializable;
import java.util.List;

import com.tfg.springboot.backend.apirest.models.entity.Material;

public class EjercicioDTO implements Serializable {

	private Integer id;
    private String nombre;
    private String descripcion;
    private String grupoMuscular;
    private String foto;
    private List<Material> materiales;

    public EjercicioDTO(Integer id, String nombre, String descripcion, String grupoMuscular, String foto, List<Material> materiales) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.grupoMuscular = grupoMuscular;
        this.foto = foto;
        this.materiales = materiales;
    }

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
    
	public List<Material> getMateriales() {
		return materiales;
	}

	public void setMateriales(List<Material> materiales) {
		this.materiales = materiales;
	}

	public String getFoto() {
		return foto;
	}

	public void setFoto(String foto) {
		this.foto = foto;
	}

	private static final long serialVersionUID = 1L;
}
