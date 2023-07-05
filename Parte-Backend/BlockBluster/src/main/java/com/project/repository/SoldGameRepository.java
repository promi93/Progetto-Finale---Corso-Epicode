package com.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.model.SoldGame;

public interface SoldGameRepository extends JpaRepository<SoldGame, Long> {

}
