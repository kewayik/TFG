package com.tfg.springboot.backend.apirest.models.entity;

import java.io.Serializable;
import java.sql.Date;

import jakarta.persistence.*;

@Entity
@Table(name = "notificaciones")
public class Notificacion implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String descripcion;
	private String tipo;
	private Date fecha;
	private String horaGeneracion;
	
	@ManyToOne
	private Usuario usuario;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public Date getFecha() {
		return fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}

	public String getHoraGeneracion() {
		return horaGeneracion;
	}

	public void setHoraGeneracion(String horaGeneracion) {
		this.horaGeneracion = horaGeneracion;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

}
