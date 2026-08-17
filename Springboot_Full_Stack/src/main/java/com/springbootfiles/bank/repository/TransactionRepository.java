package com.springbootfiles.bank.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springbootfiles.bank.entity.Account;
import com.springbootfiles.bank.entity.Transaction;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction,Long> {

	List<Transaction> findByAccountid(Account accountid);
	
	List<Transaction> findByTransactionType(String transactionType);
}
