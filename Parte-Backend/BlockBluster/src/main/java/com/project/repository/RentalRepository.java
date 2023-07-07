package com.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.entity.Rental;

@Repository
public interface RentalRepository extends JpaRepository<Rental, Long> {

}
