package com.project.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.entity.Game;
import com.project.enumeration.Category;
import com.project.repository.GameRepository;

import jakarta.persistence.EntityExistsException;

@Service
public class GameService {

	@Autowired
	GameRepository gameRepository;
	
	public List<Game> getAllGames(){
		return gameRepository.findAll();
	}
	
	public Game getGameById(Long id) {
		if(!gameRepository.existsById(id)) {
			 throw new EntityExistsException("Gioco ID non esiste!");
		}
		return gameRepository.findById(id).get();
	}
	
	public Game createGame(Game game) {
		return gameRepository.save(game);
	}
	
	public Game updateGame(Long id, Game game) {
		return gameRepository.save(game);
	}
	
	public String removeGame(Long id) {
		gameRepository.deleteById(id);
		return "Gioco eliminato con successo!";
	}
	

}
