package com.tfg.springboot.backend.apirest.controllers;

import java.io.IOException;
import java.net.MalformedURLException;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.tfg.springboot.backend.apirest.models.entity.PasswordResetToken;
import com.tfg.springboot.backend.apirest.models.entity.Usuario;
import com.tfg.springboot.backend.apirest.models.services.IUploadFileService;
import com.tfg.springboot.backend.apirest.models.services.IUsuarioService;
import com.tfg.springboot.backend.apirest.seguridad.UserRequest;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class UsuarioRestController {
	
	@Autowired
	private IUsuarioService usuarioService;
	
	@Autowired
    private IUploadFileService uploadService;
	
	@Autowired
	private JavaMailSender mailSender;
	
	private Map<String, PasswordResetToken> tokenStore = new HashMap<>();
	
	@GetMapping("/usuarios")
	public List<Usuario> index(){
		return usuarioService.findAll();
	}
	
	@GetMapping("/usuarios/{id}")
	public Usuario show(@PathVariable Integer id) {
		return usuarioService.findById(id);
	}
	
	@PostMapping("/usuarios")
	@ResponseStatus(HttpStatus.CREATED)
	public Usuario create(@RequestBody Usuario usuario) {
		return usuarioService.save(usuario);
	}
	
	@PutMapping("/usuarios/{id}")
	@ResponseStatus(HttpStatus.CREATED)
	public Usuario update(@RequestBody UserRequest usuario, @PathVariable Integer id) {
		Optional<Usuario> usuarioOptional = usuarioService.update(usuario,id);
		
		if(usuarioOptional.isPresent()) {
			return usuarioOptional.get();
		}
		return null;
		
		
	}
	
	@DeleteMapping("/usuarios/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Integer id) {
		
		usuarioService.delete(id);
	}
	
	@PostMapping("/usuarios/upload")
	public ResponseEntity<?> upload(@RequestParam("fotoUsuario") MultipartFile archivo, @RequestParam("id") Integer id) {
	    Map<String, Object> response = new HashMap<>();
	    Usuario usuario = usuarioService.findById(id);
	    if (usuario == null) {
	        response.put("mensaje", "Error: no se pudo editar, el usuario ID: ".concat(id.toString().concat(" no existe en la base de datos!")));
	        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
	    }

	    if (!archivo.isEmpty()) {
	        String nombreArchivo = null;
	        try {
	            nombreArchivo = uploadService.copiar(archivo);
	        } catch (IOException e) {
	            response.put("mensaje", "Error al subir la imagen del usuario");
	            response.put("error", e.getMessage().concat(": ").concat(e.getCause().getMessage()));
	            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
	        }

	        String nombreFotoAnterior = usuario.getFoto();
	        
	        //No voy a eliminar la foto en uploads, porque sino en las pruebas tengo que estar cada
	        //dos por tres recuperando las imágenes
	        //uploadService.eliminar(nombreFotoAnterior);

	        usuario.setFoto(nombreArchivo);
	        UserRequest userRequest = convertToUserRequest(usuario);

	        usuarioService.update(userRequest, id);

	        response.put("usuario", usuario);
	        response.put("mensaje", "Has subido correctamente la imagen: " + nombreArchivo);
	    }
	    return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
	}

	private UserRequest convertToUserRequest(Usuario usuario) {
	    UserRequest userRequest = new UserRequest();
	    userRequest.setNombre(usuario.getNombre());
	    userRequest.setApellidos(usuario.getApellidos());
	    userRequest.setDni(usuario.getDni());
	    userRequest.setEmail(usuario.getEmail());
	    userRequest.setUsername(usuario.getUsername());
	    userRequest.setDomicilio(usuario.getDomicilio());
	    userRequest.setTelefono(usuario.getTelefono());
	    userRequest.setRol(usuario.getRol());
	    userRequest.setFechaNacimiento(usuario.getFechaNacimiento());
	    userRequest.setFoto(usuario.getFoto());
	    userRequest.setDadoDeAlta(usuario.getDadoDeAlta());
//	    userRequest.setRegistros(usuario.getRegistros());
	    return userRequest;
	}

    
	@GetMapping("usuarios/img/{nombreFoto:.+}")
	public ResponseEntity<Resource> verFoto(@PathVariable String nombreFoto) {
	    Resource recurso = null;
	    try {
	        recurso = uploadService.cargar(nombreFoto);
	    } catch (MalformedURLException e) {
	        e.printStackTrace();
	    }
	    if (recurso == null) {
	        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	    HttpHeaders cabecera = new HttpHeaders();
	    cabecera.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + recurso.getFilename() + "\"");
	    return new ResponseEntity<>(recurso, cabecera, HttpStatus.OK);
	}
	
	 @PostMapping("usuarios/forgotPassword")
	    public ResponseEntity<?> forgotPassword(@RequestBody Map<String, String> request) {
	        String email = request.get("email");
	        Usuario usuario = usuarioService.findByEmail(email);
	        if (usuario == null) {
	            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario no encontrado");
	        }

	        String token = UUID.randomUUID().toString();
	        PasswordResetToken myToken = new PasswordResetToken(token, email, new Date(System.currentTimeMillis() + 3600000));
	        tokenStore.put(token, myToken);

	        SimpleMailMessage emailMessage = new SimpleMailMessage();
	        emailMessage.setTo(email);
	        emailMessage.setSubject("Solicitud de restablecimiento de contraseña");
	        emailMessage.setText("Para restablecer tu contraseña, haz clic en el siguiente enlace:\n" +
	                "http://localhost:4200/reset-password?token=" + token);
	        mailSender.send(emailMessage);

	        return ResponseEntity.ok("Enlace de restablecimiento de contraseña enviado a tu correo");
	    }

	    @PostMapping("usuarios/resetPassword")
	    public ResponseEntity<?> resetPassword(@RequestBody Map<String, String> request) {
	        String token = request.get("token");
	        String newPassword = request.get("newPassword");

	        PasswordResetToken myToken = tokenStore.get(token);
	        if (myToken == null || myToken.getExpiryDate().before(new Date())) {
	            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Token inválido o expirado");
	        }

	        Usuario usuario = usuarioService.findByEmail(myToken.getEmail());
	        if (usuario == null) {
	            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario no encontrado");
	        }

	        usuario.setPassword(newPassword);
	        usuarioService.save(usuario);
	        tokenStore.remove(token);

	        return ResponseEntity.ok("Contraseña restablecida con éxito");
	    }
	
}
