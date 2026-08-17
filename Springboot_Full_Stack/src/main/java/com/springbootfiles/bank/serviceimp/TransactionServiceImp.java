package com.springbootfiles.bank.serviceimp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springbootfiles.bank.entity.*;
import com.springbootfiles.bank.exception.ResourceNotFoundException;
import com.springbootfiles.bank.repository.*;
import com.springbootfiles.bank.service.TransactionService;

@Service
public class TransactionServiceImp implements TransactionService {

	@Autowired
	private TransactionRepository transactionrepo;
	@Autowired
	private AccountRepository accountrepo;
	

	@Override
	public List<Transaction> getTransaction(Long accId) {
		
		Account account = accountrepo.findById(accId)
				.orElseThrow(()->
				  new ResourceNotFoundException("Account not found by id: "+accId));
		 
		return transactionrepo.findByAccountid(account);
	}

	@Override
	public List<Transaction> getTransactionType(String type) {
		
		return transactionrepo.findByTransactionType(type);
		
	}
}
