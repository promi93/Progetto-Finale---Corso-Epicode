package com.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.entity.SoldGame;

@Repository
public interface SoldGameRepository extends JpaRepository<SoldGame, Long> {

}
