package com.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.entity.PaymentRegister;


@Repository
public interface PaymentRegisterRepository extends JpaRepository<PaymentRegister, Long> {

}
