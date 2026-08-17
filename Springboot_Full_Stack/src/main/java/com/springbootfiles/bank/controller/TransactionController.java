package com.springbootfiles.bank.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.springbootfiles.bank.entity.Transaction;
import com.springbootfiles.bank.service.TransactionService;

@RestController
@RequestMapping("/transactions")
public class TransactionController {
	
	@Autowired
	private TransactionService transactionservice;
	
	
	@GetMapping("/account/{accId}")
	public ResponseEntity<List<Transaction>> getTransaction(@PathVariable Long accId){
		
		List<Transaction> transactions = transactionservice.getTransaction(accId);
		return ResponseEntity.ok(transactions);
	}
	
	@GetMapping("/type/{type}")
	public ResponseEntity<List<Transaction>> getTransactionType(@PathVariable String type){
		
		List<Transaction> transactions = transactionservice.getTransactionType(type);
		
		return ResponseEntity.ok(transactions);
	}

}
