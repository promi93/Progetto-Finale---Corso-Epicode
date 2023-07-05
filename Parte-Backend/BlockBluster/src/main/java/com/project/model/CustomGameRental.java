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
@Table(name = "custom_games_rentals")
public class CustomGameRental {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	private AuthUser user;

	@ManyToOne
	@JoinColumn(name = "custom_game_id")
	private CustomGame customGame;
	
	private LocalDate startRental;
	
	private LocalDate endRental;
	
	private boolean returned;
}

// CustomGameRental: rappresenta il singolo noleggio di un gioco personalizzato e tiene traccia delle informazioni del noleggio, dell'utente  e del gioco creato da un utente
