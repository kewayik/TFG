package com.tfg.springboot.backend.apirest.auth;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.tfg.springboot.backend.apirest.auth.filter.JwtAuthenticationFilter;
import com.tfg.springboot.backend.apirest.auth.filter.JwtValidationFilter;
import org.springframework.web.filter.CorsFilter;
@Configuration
public class SpringSecurityConfig {

    @Autowired
    private AuthenticationConfiguration authenticationConfiguration;

    @Bean
    AuthenticationManager authenticationManager() throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http.authorizeHttpRequests(authz -> 
            authz
            // GETS PARA NO LOGEADOS TAMBIEN
            .requestMatchers(HttpMethod.GET, 
                    "/api/home",
                    "/login",
                    "/usuarios/form-usuario",
                    "/api/usuarios",
                    "/api/uploads/img/{nombreFoto:.+}", 
                    "/api/usuarios/upload",
                    "/api/usuarios/ver-usuario/{id}",
                    "/images/{nombreFoto:.+}"
            ).permitAll()
            
            
            //GETS PARA TODOS ROLES
            .requestMatchers(HttpMethod.GET, 
                   "/api/usuarios/{id}",
                    "/api/usuarios",
                    "/api/home",
                    "/login",
                    "/api/actividades",
                    "/api/actividades/{id}",
                    "/api/ejercicios",
                    "/api/ejercicios/{id}",
                    "/api/materiales",
                    "/api/materiales/{id}",
                    "/api/notificaciones",
                    "/api/notificaciones/{id}",
                    "/api/registros",
                    "/api/registros/{id}",
                    "/api/rutinasPers",
                    "/api/rutinasPers/{id}",
                    "/api/rutinasPred",
                    "/api/rutinasPred/{id}"
            ).hasAnyRole("ENTRENADOR", "ADMIN", "USER")
            
            // GETS PARA ENTRENADORES
            .requestMatchers(HttpMethod.GET,
                "/api/usuarios/{id}",
                "/api/form-actividad",
                "/api/form-actividad/{id}",
                "/api/form-actividad/ver-usuarios/{id}",
                "/api/diasrutinas",
                "/api/diasrutinas/{id}"
            ).hasAnyRole("ENTRENADOR", "ADMIN")
            
            // GETS PARA ADMINS
            .requestMatchers(HttpMethod.GET
            ).hasRole("ADMIN")
            
            // POST PARA TODOS
            .requestMatchers(HttpMethod.POST,
                "/api/usuarios",
                "/api/registros",
                "api/usuarios/upload",
                "/api/usuarios/forgotPassword",
                "/api/usuarios/resetPassword"
            ).permitAll()
            
            // POST PARA ENTRENADORES
            .requestMatchers(HttpMethod.POST,
                "/api/actividades",
                "/api/diasrutinas",
                "/api/ejercicios",
                "/api/materiales",
                "/api/notificaciones",
                "/api/rutinasPers",
                "/api/rutinasPred"
            ).hasAnyRole("ENTRENADOR", "ADMIN")
            
            
            // POST PARA ADMINS
            .requestMatchers(HttpMethod.POST
            ).hasRole("ADMIN")
            
            // PUT PARA TODOS
            .requestMatchers(HttpMethod.PUT,
                "/api/usuarios/{id}",
                "/api/registros/{id}",
                "/api/actividades/{id}"
            ).permitAll()
            
            // PUT PARA ENTRENADORES
            .requestMatchers(HttpMethod.PUT,                
                "/api/diasrutinas/{id}",
                "/api/ejercicios/{id}",
                "/api/materiales/{id}",
                "/api/rutinasPers/{id}",
                "/api/rutinasPred/{id}"
            ).hasAnyRole("ENTRENADOR", "ADMIN")
            
            // PUT PARA ADMINS
            .requestMatchers(HttpMethod.PUT
            ).hasRole("ADMIN")
            
            // DELETE PARA ENTRENADORES
            .requestMatchers(HttpMethod.DELETE,
                "/api/actividades/{id}",
                "/api/diasrutinas/{id}",
                "/api/ejercicios/{id}",
                "/api/materiales/{id}",
                "/api/notificaciones/{id}",
                "/api/rutinasPers/{id}",
                "/api/rutinasPred/{id}"
            ).hasAnyRole("ENTRENADOR", "ADMIN")
            
            // DELETE PARA ADMINS
            .requestMatchers(HttpMethod.DELETE,
                "/api/usuarios/{id}"
            ).hasRole("ADMIN")
            
         // DELETE PARA TODOS
            .requestMatchers(HttpMethod.DELETE,
            		"/api/registros/{id}"
            ).hasAnyRole("ENTRENADOR", "ADMIN", "USER")
            
            // DELETE PARA TODOS (Debe estar al final y con restricciones específicas)
            .anyRequest().authenticated()
            
        )
        .cors(cors -> cors.configurationSource(configurationSource()))
        .addFilter(new JwtAuthenticationFilter(authenticationManager()))
        .addFilter(new JwtValidationFilter(authenticationManager()))
        .csrf(config -> config.disable())
        .sessionManagement(management -> management.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
        .build();
    }

    @Bean
    CorsConfigurationSource configurationSource() {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOriginPatterns(Arrays.asList("*"));
        config.setAllowedOrigins(Arrays.asList("http://localhost:4200"));
        config.setAllowedMethods(Arrays.asList("POST", "GET", "PUT", "DELETE"));
        config.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type"));
        config.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        return source;
    }

    @Bean
    FilterRegistrationBean<CorsFilter> corsFilter() {
        FilterRegistrationBean<CorsFilter> corsBean = new FilterRegistrationBean<CorsFilter>(
                new CorsFilter(this.configurationSource()));
        corsBean.setOrder(Ordered.HIGHEST_PRECEDENCE);
        return corsBean;
    }
}
