package com.project.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.enumeration.ERole;
import com.project.security.entity.Role;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    
	Optional<Role> findByRoleName(ERole roleName);

}
