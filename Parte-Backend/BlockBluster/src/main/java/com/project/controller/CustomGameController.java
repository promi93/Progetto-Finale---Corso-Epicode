package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.entity.AuthUser;
import com.project.entity.CustomGame;
import com.project.security.repository.UserRepository;
import com.project.services.CustomGameService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth/customgames")
public class CustomGameController {

	@Autowired
	CustomGameService customGameService;
	
	@GetMapping
	public List<CustomGame> getAll() {
		return customGameService.getAllCustomGames();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<CustomGame> getById(@PathVariable Long id){
		return ResponseEntity.ok(customGameService.getCustomGameById(id));
	}
	
	@PostMapping
	public ResponseEntity<CustomGame> save(@RequestBody CustomGame customGame) {
		return ResponseEntity.ok(customGameService.createCustomGame(customGame));
		
	}

	@PutMapping("/{id}")
	public ResponseEntity<CustomGame> update(@PathVariable Long id, @RequestBody CustomGame customGame){
		return ResponseEntity.ok(customGameService.updateCustomGame(id, customGame));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> remove(@PathVariable Long id) {
		return ResponseEntity.ok(customGameService.removeCustomGame(id));
	}
	

}