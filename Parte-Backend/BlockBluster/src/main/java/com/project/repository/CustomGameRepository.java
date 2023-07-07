package com.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.entity.CustomGame;

@Repository
public interface CustomGameRepository extends JpaRepository<CustomGame, Long> {

}
