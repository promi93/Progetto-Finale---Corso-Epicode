package com.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.model.Game;

public interface GameRepository extends JpaRepository<Game, Long> {

}
