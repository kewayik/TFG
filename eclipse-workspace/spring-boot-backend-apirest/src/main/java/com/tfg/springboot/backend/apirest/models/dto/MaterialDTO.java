package com.tfg.springboot.backend.apirest.models.dto;

import java.io.Serializable;

public class MaterialDTO implements Serializable {

    private Integer id;
    private String nombre;
    private String descripcion;
    private Boolean stock;
    private String tipo;
    private String foto;

    // Constructor vacío
    public MaterialDTO() {
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

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }
    
    private static final long serialVersionUID = 1L;
}

