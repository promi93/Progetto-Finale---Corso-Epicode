package com.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.entity.Game;
import com.project.entity.PaymentRegister;
import com.project.services.PaymentRegisterService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth/payment")
public class PaymentRegisterController {
	
	@Autowired
	PaymentRegisterService payService;
	
	@PostMapping()
	public ResponseEntity<PaymentRegister> save(@RequestBody PaymentRegister pay) {
		return ResponseEntity.ok(payService.savePayment(pay));
	}
	

}
