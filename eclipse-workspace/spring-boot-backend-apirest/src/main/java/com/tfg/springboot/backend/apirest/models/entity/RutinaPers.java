package com.tfg.springboot.backend.apirest.models.entity;

import java.io.Serializable;
import jakarta.persistence.*;

@Entity
@Table(name = "rutinasPers")
@DiscriminatorValue("U")
public class RutinaPers extends RutinaPred implements Serializable {

	 @OneToOne
	 @JoinColumn(name = "usuario_id", referencedColumnName = "id")
	 private Usuario usuario;
	
	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}
	
	
	private static final long serialVersionUID = 1L;

}
