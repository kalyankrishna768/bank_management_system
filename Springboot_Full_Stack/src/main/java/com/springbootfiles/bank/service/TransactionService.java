package com.springbootfiles.bank.service;

import java.util.*;

import com.springbootfiles.bank.entity.Transaction;

public interface TransactionService {

	List<Transaction> getTransaction(Long Id);
	
	List<Transaction> getTransactionType(String type);
}
