package com.tfg.springboot.backend.apirest.controllers;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.tfg.springboot.backend.apirest.models.dto.EjercicioDTO;
import com.tfg.springboot.backend.apirest.models.entity.Ejercicio;
import com.tfg.springboot.backend.apirest.models.services.IEjercicioService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class EjercicioRestController {

    @Autowired
    private IEjercicioService ejercicioService;

    @GetMapping("/ejercicios")
    public List<EjercicioDTO> index() {
        List<Ejercicio> ejercicios = ejercicioService.findAll();
        return ejercicios.stream()
                .map(this::mapToDTO)
                .collect(Collectors.toList());
    }

    @GetMapping("/ejercicios/{id}")
    public EjercicioDTO show(@PathVariable Integer id) {
        Ejercicio ejercicio = ejercicioService.findById(id);
        return mapToDTO(ejercicio);
    }

    @PostMapping("/ejercicios")
    @ResponseStatus(HttpStatus.CREATED)
    public EjercicioDTO create(@RequestBody EjercicioDTO ejercicioDTO) {
    	
        Ejercicio ejercicio = mapToEntity(ejercicioDTO);        
        Ejercicio savedEjercicio = ejercicioService.save(ejercicio);
        return mapToDTO(savedEjercicio);
    }

    @PutMapping("/ejercicios/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public EjercicioDTO update(@RequestBody EjercicioDTO ejercicioDTO, @PathVariable Integer id) {
        Ejercicio ejercicio = mapToEntity(ejercicioDTO);
        Ejercicio ejercicioActual = ejercicioService.findById(id);
        
        // Actualizar los campos del ejercicio actual con los valores del DTO
        ejercicioActual.setNombre(ejercicio.getNombre());
        ejercicioActual.setDescripcion(ejercicio.getDescripcion());
        ejercicioActual.setGrupoMuscular(ejercicio.getGrupoMuscular());
        ejercicioActual.setMaterialesEj(ejercicio.getMaterialesEj());
        
        // Guardar y retornar el ejercicio actualizado
        Ejercicio updatedEjercicio = ejercicioService.save(ejercicioActual);
        return mapToDTO(updatedEjercicio);
    }


    @DeleteMapping("/ejercicios/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Integer id) {
        ejercicioService.delete(id);
    }

    private EjercicioDTO mapToDTO(Ejercicio ejercicio) {
    	
        return new EjercicioDTO(ejercicio.getId(), ejercicio.getNombre(), ejercicio.getDescripcion(), ejercicio.getGrupoMuscular(), ejercicio.getMaterialesEj());
    }

    private Ejercicio mapToEntity(EjercicioDTO ejercicioDTO) {
        Ejercicio ejercicio = new Ejercicio();
        
        // Verificar si ejercicioDTO.getId() no es null antes de llamar a intValue()
        if (ejercicioDTO.getId() != null) {
            ejercicio.setId(ejercicioDTO.getId().intValue());
        }
        
        ejercicio.setNombre(ejercicioDTO.getNombre());
        ejercicio.setDescripcion(ejercicioDTO.getDescripcion());
        ejercicio.setGrupoMuscular(ejercicioDTO.getGrupoMuscular());
        ejercicio.setMaterialesEj(ejercicioDTO.getMateriales());
        
        return ejercicio;
    }


}
