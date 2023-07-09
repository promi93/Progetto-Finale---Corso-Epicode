package com.project.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.entity.CustomGame;
import com.project.entity.Game;

@Repository
public interface CustomGameRepository extends JpaRepository<CustomGame, Long> {


	Optional<CustomGame> findByTitle(String title);

    boolean existsByIdAndTitle(Long id, String title);

    boolean existsByIdNotAndTitle(Long id, String title);

	
}
