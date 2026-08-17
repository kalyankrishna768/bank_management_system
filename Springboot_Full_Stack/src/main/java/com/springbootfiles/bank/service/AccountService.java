package com.springbootfiles.bank.service;

import java.util.List;

import com.springbootfiles.bank.entity.Account;

public interface AccountService {

	Account createAccount(Account account,Long userId);
	
	Account getAccountById(Long accountId);
	
	Account getAccountByNumber(String accno);
	
    List<Account> getAccountByUser(Long userId);
    
    double checkBalance(String accNumber);
    
    Account deposit(String accno,double amount);
    
    Account withDrawl(String accno,double amount);
    
    void Transfer(String fromaccno,String toaccno, double amount);
}
