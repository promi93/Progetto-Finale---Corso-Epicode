package com.project.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.entity.Role;
import com.project.enumeration.ERole;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    
	Optional<Role> findByRoleName(ERole roleName);

}
