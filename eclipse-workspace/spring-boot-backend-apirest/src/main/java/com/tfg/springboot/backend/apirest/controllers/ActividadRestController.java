package com.tfg.springboot.backend.apirest.controllers;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.tfg.springboot.backend.apirest.models.dto.ActividadDTO;
import com.tfg.springboot.backend.apirest.models.entity.Actividad;
import com.tfg.springboot.backend.apirest.models.services.IActividadService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class ActividadRestController {

	@Autowired
	private IActividadService actividadService;
	
	@GetMapping("/actividades")
    public List<ActividadDTO> index() {
        List<Actividad> actividades = actividadService.findAll();
        return actividades.stream()
                .map(this::mapToDTO)
                .collect(Collectors.toList());
    }
	
	@GetMapping("/actividades/{id}")
	public ActividadDTO show(@PathVariable Integer id) {
	    Actividad actividad = actividadService.findById(id);
	    return mapToDTO(actividad);
	}
	
	@PostMapping("/actividades")
	@ResponseStatus(HttpStatus.CREATED)
	public ActividadDTO create(@RequestBody ActividadDTO actividadDTO) {
	    Actividad actividad = mapToEntity(actividadDTO);
	    Actividad savedActividad = actividadService.save(actividad);
	    return mapToDTO(savedActividad);
	}
	
	@PutMapping("/actividades/{id}")
	@ResponseStatus(HttpStatus.CREATED)
	public ActividadDTO update(@RequestBody ActividadDTO actividadDTO, @PathVariable Integer id) {
	    Actividad actividad = mapToEntity(actividadDTO);
	    Actividad actividadActual = actividadService.findById(id);
	    
	    actividadActual.setNombre(actividad.getNombre());
	    actividadActual.setDescripcion(actividad.getDescripcion());
	    actividadActual.setHorario(actividad.getHorario());
	    actividadActual.setAforo(actividad.getAforo());
	    actividadActual.setFecha(actividad.getFecha());
	    actividadActual.setSala(actividad.getSala());
	    actividadActual.setUsuariosAct(actividad.getUsuariosAct());
	    actividadActual.setEntrenador(actividad.getEntrenador());
	    
	    Actividad updatedActividad = actividadService.save(actividadActual);
	    return mapToDTO(updatedActividad);
	}
	
	@DeleteMapping("/actividades/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Integer id) {
	    actividadService.delete(id);
	}

	private ActividadDTO mapToDTO(Actividad actividad) {
	    ActividadDTO dto = new ActividadDTO();
	    dto.setId(actividad.getId());
	    dto.setNombre(actividad.getNombre());
	    dto.setDescripcion(actividad.getDescripcion());
	    dto.setHorario(actividad.getHorario());
	    dto.setAforo(actividad.getAforo());
	    dto.setFecha(actividad.getFecha());
	    dto.setSala(actividad.getSala());
	    dto.setUsuarios(actividad.getUsuariosAct());
	    dto.setEntrenador(actividad.getEntrenador());
	    return dto;
	}
	
	private Actividad mapToEntity(ActividadDTO dto) {
	    Actividad actividad = new Actividad();
	    actividad.setNombre(dto.getNombre());
	    actividad.setDescripcion(dto.getDescripcion());
	    actividad.setHorario(dto.getHorario());
	    actividad.setAforo(dto.getAforo());
	    actividad.setFecha(dto.getFecha());
	    actividad.setSala(dto.getSala());
	    actividad.setUsuariosAct(dto.getUsuarios());
	    actividad.setEntrenador(dto.getEntrenador());
	    return actividad;
	}
	
}
