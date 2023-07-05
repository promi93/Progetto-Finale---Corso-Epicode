package com.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.model.Rental;

public interface RentalRepository extends JpaRepository<Rental, Long> {

}
