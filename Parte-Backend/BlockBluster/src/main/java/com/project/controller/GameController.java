package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.entity.Game;
import com.project.services.GameService;

@RestController
@RequestMapping("/api/games")
public class GameController {

	@Autowired
	GameService gameService;
	
	@GetMapping
	public List<Game> getAll() {
		return gameService.getAllGames();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Game> getById(@PathVariable Long id) {
		return ResponseEntity.ok(gameService.getGameById(id));
	}
	
	@PostMapping
	public ResponseEntity<Game> save(@RequestBody Game game) {
		return ResponseEntity.ok(gameService.createGame(game));
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Game> update(@PathVariable Long id, @RequestBody Game game) {
		return ResponseEntity.ok(gameService.updateGame(id, game));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> remove(@PathVariable Long id) {
		return ResponseEntity.ok(gameService.removeGame(id));
	}
	
	
}
