package com.springbootfiles.bank.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.springbootfiles.bank.entity.Account;
import com.springbootfiles.bank.service.AccountService;

@RestController
@RequestMapping("/accounts")
public class AccountController {

	@Autowired
	private AccountService accountservice;
	
	@PostMapping("/create/{userid}")
	public ResponseEntity<Account> createAccount(@RequestBody Account account, @PathVariable Long userid){
	
		 Account savedAccount = accountservice.createAccount(account, userid);
		 return new ResponseEntity<>(savedAccount, HttpStatus.CREATED);
	}
	
	@GetMapping("/accountNumber/accno")
	public ResponseEntity<Account> getAccountByNumber(@PathVariable String accno) {
		return ResponseEntity.ok(accountservice.getAccountByNumber(accno));
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Account> getAccountById(@PathVariable("id") Long id) {
		return ResponseEntity.ok(accountservice.getAccountById(id));
	}
	
	@GetMapping("/user/{userId}")
	public ResponseEntity<List<Account>> getAcountByUser(@PathVariable Long userId){
	
		List<Account> accounts = accountservice.getAccountByUser(userId);
		return ResponseEntity.ok(accounts);
	}
	
	@GetMapping("balance/{accno}")
	public ResponseEntity<Double> checkBalance(@PathVariable String accno){
		
		Double balance = accountservice.checkBalance(accno);
		return ResponseEntity.ok(balance);
	}
	
	
	@PostMapping("/deposit/{accno}")
	public ResponseEntity<Account> deposit(@PathVariable String accno, @RequestParam double amount){
          Account account = accountservice.deposit(accno, amount);
          
          return ResponseEntity.ok(account); 
	}
	
	
	
	@PostMapping("/withdrawl/{accno}")  
    public ResponseEntity<Account> withdraw(@PathVariable String accno, @RequestParam double amount) { 
		 Account account = accountservice.withDrawl(accno, amount); 

         return ResponseEntity.ok(account); 
     }
	
	@PostMapping("transfer")
	public ResponseEntity<String> transfer(@RequestParam String fromaccno, @RequestParam String toaccno, @RequestParam double amount){
	
		accountservice.Transfer(fromaccno, toaccno, amount);
		return ResponseEntity.ok("Amount transferred Successfully");
	}
}
