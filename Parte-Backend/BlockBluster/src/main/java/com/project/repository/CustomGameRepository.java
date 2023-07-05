package com.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.model.CustomGame;

public interface CustomGameRepository extends JpaRepository<CustomGame, Long> {

}
