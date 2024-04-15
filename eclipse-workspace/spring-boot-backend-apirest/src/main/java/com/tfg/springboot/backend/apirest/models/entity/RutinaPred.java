package com.tfg.springboot.backend.apirest.models.entity;

import java.io.Serializable;
import java.util.List;

import jakarta.persistence.*;

@Entity
@Table(name = "rutinasPred")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name="tipo", discriminatorType = DiscriminatorType.CHAR)
@DiscriminatorValue("P")
public class RutinaPred implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String nombre;
	@Column(length = 1000)
	private String descripcion;
	@Column(length = 1000)
	private String recomendaciones;
	@ManyToMany
	@JoinTable(name="rutinas_pred_dias_rutina", joinColumns = @JoinColumn(name="rutina_pred_id"),
	inverseJoinColumns = @JoinColumn(name="dias_rutina_id"))
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


	public String getRecomendaciones() {
		return recomendaciones;
	}

	public void setRecomendaciones(String recomendaciones) {
		this.recomendaciones = recomendaciones;
	}



	public List<DiaRutina> getDiasRutinas() {
		return diasRutinas;
	}

	public void setDiasRutinas(List<DiaRutina> diasRutinas) {
		this.diasRutinas = diasRutinas;
	}



	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
}
