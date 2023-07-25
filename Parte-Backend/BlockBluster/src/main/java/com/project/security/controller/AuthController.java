package com.project.security.controller;

import java.util.HashSet;
import java.util.Set;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.security.payload.JWTAuthResponse;
import com.project.security.payload.LoginDto;
import com.project.security.payload.RegisterDto;
import com.project.security.service.AuthService;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/auth")
public class AuthController {
    private AuthService authService;
    private Set<String> authenticatedUsers; // Set per memorizzare gli utenti autenticati

    public AuthController(AuthService authService) {
        this.authService = authService;
        this.authenticatedUsers = new HashSet<>();
    }

    // Build Login REST API
    @PostMapping(value = {"/login", "/signin"})
    public ResponseEntity<?> login(@RequestBody LoginDto loginDto) {
        

        String token = authService.login(loginDto);

        JWTAuthResponse jwtAuthResponse = new JWTAuthResponse();
        jwtAuthResponse.setUsername(loginDto.getUsername());
        jwtAuthResponse.setAccessToken(token);

        authenticatedUsers.add(loginDto.getUsername()); // Aggiungi l'utente all'elenco degli utenti autenticati

        return ResponseEntity.ok(jwtAuthResponse);
    }



    // Build Register REST API
    @PostMapping(value = {"/register", "/signup"})
    public ResponseEntity<String> register(@RequestBody RegisterDto registerDto) {
        // Verifica se l'utente è già autenticato
        if (authenticatedUsers.contains(registerDto.getUsername())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("L'utente è già autenticato.");
        }

        String response = authService.register(registerDto);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
}
