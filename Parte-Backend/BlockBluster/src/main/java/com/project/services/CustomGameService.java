package com.project.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.entity.AuthUser;
import com.project.entity.CustomGame;
import com.project.repository.CustomGameRepository;

import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;

@Service
public class CustomGameService {

	@Autowired
	CustomGameRepository customRepository;
	
	public List<CustomGame> getAllCustomGames(){
		return customRepository.findAll();
	}
	
	public CustomGame getCustomGameById(Long id) {
        return customRepository.findById(id).orElseThrow(null);
    }

    public CustomGame createCustomGame(CustomGame cg) {
    	if (cg.getId() != null && customRepository.existsById(cg.getId())) {
	        throw new EntityExistsException("Il gioco con ID " + cg.getId() + " già esiste.");
	    }
	    if (customRepository.findByTitle(cg.getTitle()).isPresent()) {
	        throw new EntityExistsException("Il gioco con nome " + cg.getTitle() + " già esiste.");
	    }
	    return customRepository.save(cg);
    }

    public CustomGame updateCustomGame(Long id, CustomGame cg) {
        if (!customRepository.existsById(id)) {
            throw new EntityNotFoundException("Gioco personalizzato non trovato con ID " + id);
        }
        if (customRepository.existsByIdNotAndTitle(cg.getId(), cg.getTitle())) {
            throw new EntityExistsException("Il gioco personalizzato con nome " + cg.getTitle() + " già esiste.");
        }
        cg.setId(id);
        return customRepository.save(cg);
    }

	public String removeCustomGame(Long id) {
	    if (!customRepository.existsById(id)) {
	        throw new EntityExistsException("Il gioco con ID " + id + " non esiste.");
	    }
	    customRepository.deleteById(id);
	    return "Gioco eliminato con successo!";
	}

}