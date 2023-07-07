package com.project.entity;

import com.project.enumeration.Category;
import com.project.security.entity.AuthUser;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "custom_games")
public class CustomGame {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Transient
	private String image;
	
	private String title;
	
	private String description;
	
	private Category category;
	
	@Column(name = "rental_price")
	private double rentalPrice;
	
	@Column(name = "game_price")
	private double gamePrice;
	
	private boolean isAvailable;
	
	@ManyToOne
	@JoinColumn(name = "owner_id")
	private AuthUser owner;
	
}

// CustomGame: rappresenta il gioco da tavolo creato e caricato dall' utente con le stesse proprietà della classe Game
