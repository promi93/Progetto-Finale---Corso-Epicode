package com.project.security.service;

import java.util.List;

import com.project.security.entity.AuthUser;
import com.project.security.payload.LoginDto;
import com.project.security.payload.RegisterDto;


public interface AuthService {
    
	String login(LoginDto loginDto);
    String register(RegisterDto registerDto);
    List<AuthUser> getAll();
    
}
