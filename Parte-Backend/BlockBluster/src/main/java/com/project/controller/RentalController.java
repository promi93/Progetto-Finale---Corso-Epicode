package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.entity.Rental;
import com.project.services.RentalService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth/rental")
public class RentalController {

	@Autowired
	RentalService rentalService;
	
	@GetMapping 
	public List<Rental> getAll() {
		return rentalService.getAllRentals();
	}
	
}
