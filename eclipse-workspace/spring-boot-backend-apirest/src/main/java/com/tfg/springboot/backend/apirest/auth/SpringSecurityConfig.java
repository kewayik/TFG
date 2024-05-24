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
            // GETS PARA TODOS
            .requestMatchers(HttpMethod.GET, 
                    "/api/uploads/img/{nombreFoto:.+}", 
                    "/api/usuarios/upload",
                    "/api/usuarios/ver-usuario/{id}",
                    "/images/{nombreFoto:.+}",
                    "/api/usuarios/{id}",
                    "/api/usuarios",
                    "/api/home",
                    "/login",
                    "/api/actividades",
                    "/actividades/{id}"
            ).permitAll()
            
            // GETS PARA ENTRENADORES
            .requestMatchers(HttpMethod.GET,
                "/api/usuarios/{id}",
                "/api/form-actividad",
                "/api/form-actividad/{id}",
                "/api/form-actividad/ver-usuarios/{id}"
            ).hasAnyRole("ENTRENADOR", "ADMIN")
            
            // GETS PARA ADMINS
            .requestMatchers(HttpMethod.GET
            ).hasRole("ADMIN")
            
            // POST PARA TODOS
            .requestMatchers(HttpMethod.POST,
                "/api/usuarios"
            ).permitAll()
            
            // POST PARA ENTRENADORES
            .requestMatchers(HttpMethod.POST,
                "/api/actividades"
            ).hasAnyRole("ENTRENADOR", "ADMIN")
            
            // POST PARA ADMINS
            .requestMatchers(HttpMethod.POST
            ).hasRole("ADMIN")
            
            // PUT PARA TODOS
            .requestMatchers(HttpMethod.PUT,
                "/api/usuarios/{id}"
            ).permitAll()
            
            // PUT PARA ENTRENADORES
            .requestMatchers(HttpMethod.PUT,
                "/api/actividades/{id}"
            ).hasAnyRole("ENTRENADOR", "ADMIN")
            
            // PUT PARA ADMINS
            .requestMatchers(HttpMethod.PUT
            ).hasRole("ADMIN")
            
            // DELETE PARA ENTRENADORES
            .requestMatchers(HttpMethod.DELETE,
                "/api/actividades/{id}"
            ).hasAnyRole("ENTRENADOR", "ADMIN")
            
            // DELETE PARA ADMINS
            .requestMatchers(HttpMethod.DELETE,
                "/api/usuarios/{id}"
            ).hasRole("ADMIN")
            
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
