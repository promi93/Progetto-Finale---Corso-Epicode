package com.project.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.entity.PaymentRegister;
import com.project.repository.PaymentRegisterRepository;

@Service
public class PaymentRegisterService {
	
	@Autowired
	PaymentRegisterRepository payRepo;
	
	public PaymentRegister savePayment(PaymentRegister pay) {
		return payRepo.save(pay);
	}
	

}
