package com.tfg.springboot.backend.apirest.models.dto;

import java.sql.Date;
import java.util.List;

import com.tfg.springboot.backend.apirest.models.entity.Usuario;

public class ActividadDTO {

	private Integer id;
    private String nombre;
    private String descripcion;
    private String sala;
    private int aforo;
    private Date fecha;
    private String horario;
    private List<Usuario> usuarios;
    
    public ActividadDTO() {
    }

    public ActividadDTO(Integer id, String nombre, String descripcion, String sala, int aforo, Date fecha, String horario, List<Usuario> usuarios) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.sala = sala;
        this.aforo = aforo;
        this.fecha = fecha;
        this.horario = horario;
        this.usuarios = usuarios;
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

    public String getSala() {
        return sala;
    }

    public void setSala(String sala) {
        this.sala = sala;
    }

    public int getAforo() {
        return aforo;
    }

    public void setAforo(int aforo) {
        this.aforo = aforo;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public String getHorario() {
        return horario;
    }

    public void setHorario(String horario) {
        this.horario = horario;
    }

	public List<Usuario> getUsuarios() {
		return usuarios;
	}

	public void setUsuarios(List<Usuario> usuarios) {
		this.usuarios = usuarios;
	}
}
