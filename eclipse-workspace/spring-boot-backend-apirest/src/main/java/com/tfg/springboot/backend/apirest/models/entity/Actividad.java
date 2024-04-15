package com.tfg.springboot.backend.apirest.models.entity;

import java.io.Serializable;
import java.sql.Date;
import java.util.List;

import jakarta.persistence.*;

@Entity
@Table(name = "actividades")
public class Actividad implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String nombre;
	private String descripcion;
	private String sala;
	private int aforo;
	private Date fecha;
	private String horario;
	
	@ManyToMany
	@JoinTable(name="actividadesusuarios", joinColumns = @JoinColumn(name="actividades_fk"),
	inverseJoinColumns = @JoinColumn(name="usuarios_fk"))
	private List<Usuario> usuariosAct;

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

	public String getHorario() {
		return horario;
	}

	public void setHorario(String horario) {
		this.horario = horario;
	}

	public Date getFecha() {
		return fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}
	
	
	public List<Usuario> getUsuariosAct() {
		return usuariosAct;
	}

	public void setUsuariosAct(List<Usuario> usuariosAct) {
		this.usuariosAct = usuariosAct;
	}
	
	
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

}
