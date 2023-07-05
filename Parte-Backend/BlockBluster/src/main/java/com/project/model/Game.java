package com.project.model;

import com.project.security.entity.AuthUser;

import jakarta.persistence.Column;
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
@Table(name = "games")
public class Game {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String title;
	
	private String description;
	
	private String category;
	
	@Column(name = "rental_price")
	private double rentalPrice;
	
	@Column(name = "game_price")
	private double gamePrice;
	
	private boolean isAvailable;
	
	@ManyToOne
	@JoinColumn(name = "owner_id")
	private AuthUser owner;
	
}

// Game: rappresenta la classe del gioco da tavolo con titolo, descrizione e categoria del gioco insieme al prezzo del noleggio e nel caso anche il prezzo del gioco acquistabile senza l'opzione di noleggio
