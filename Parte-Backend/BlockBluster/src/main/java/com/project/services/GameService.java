package com.project.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.entity.Game;
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
	    return gameRepository.findById(id).orElse(null);
	}

	public Game createGame(Game game) {
	    if (game.getId() != null && gameRepository.existsById(game.getId())) {
	        throw new EntityExistsException("Il gioco con ID " + game.getId() + " già esiste.");
	    }
	    if (gameRepository.findByTitle(game.getTitle()).isPresent()) {
	        throw new EntityExistsException("Il gioco con nome " + game.getTitle() + " già esiste.");
	    }
	    return gameRepository.save(game);
	}

	public Game updateGame(Long id, Game game) {
	    if (!gameRepository.existsById(id)) {
	        throw new EntityExistsException("Il gioco con ID " + id + " non esiste.");
	    }
	    if (gameRepository.existsByTitleAndIdNot(game.getTitle(), id)) {
	        throw new EntityExistsException("Il gioco con nome " + game.getTitle() + " già esiste.");
	    }
	    game.setId(id);
	    return gameRepository.save(game);
	}

	public String removeGame(Long id) {
	    if (!gameRepository.existsById(id)) {
	        throw new EntityExistsException("Il gioco con ID " + id + " non esiste.");
	    }
	    gameRepository.deleteById(id);
	    return "Gioco eliminato con successo!";
	}

}
