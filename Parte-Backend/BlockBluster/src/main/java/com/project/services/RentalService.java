package com.project.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.entity.Game;
import com.project.entity.Rental;
import com.project.repository.GameRepository;
import com.project.repository.RentalRepository;

import jakarta.persistence.EntityExistsException;

@Service
public class RentalService {

	@Autowired
	RentalRepository rentalRepository;
	
	@Autowired
	GameRepository gameRepository;
	
	public List<Rental> getAllRentals() {
		return rentalRepository.findAll();
	}
	
	public Rental getRentalById(Long id) {
	    return rentalRepository.findById(id).orElse(null);
	}

	public Game getGameByGameId(Long id) {
	    return gameRepository.findById(id).orElse(null);
	}

	public Rental createRental(Rental rental) {
	    if (rental.getId() != null && rentalRepository.existsById(rental.getId())) {
	        throw new EntityExistsException("Il noleggio con ID " + rental.getId() + " già esiste.");
	    }
	    return rentalRepository.save(rental);
	}

	public Rental updateRental(Rental rental) {
	    if (!rentalRepository.existsById(rental.getId())) {
	        throw new EntityExistsException("Il noleggio con ID " + rental.getId() + " non esiste.");
	    }
	    return rentalRepository.save(rental);
	}
		
	
}
