package com.project.model;

import java.time.LocalDate;

import com.project.security.entity.AuthUser;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "rentals")
public class Rental {

	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	private AuthUser user;
	
	@ManyToOne
	@JoinColumn(name = "game_id")
	private Game game;
	
	private LocalDate startRental;
	
	private LocalDate endRental;
	
	private boolean returned;
	
}

// Rental: rappresenta la classe per il noleggio dove tiene traccia dell'user del gioco inizio e fine noleggio e se è ritornato o meno il noleggio
