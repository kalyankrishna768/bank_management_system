 package com.springbootfiles.bank.serviceimp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springbootfiles.bank.entity.Account;
import com.springbootfiles.bank.entity.User;
import com.springbootfiles.bank.exception.DuplicateResourceException;
import com.springbootfiles.bank.exception.InsufficientBalanceException;
import com.springbootfiles.bank.exception.ResourceNotFoundException;
import com.springbootfiles.bank.repository.AccountRepository;
import com.springbootfiles.bank.repository.UserRepository;
import com.springbootfiles.bank.service.AccountService;

import jakarta.transaction.Transactional;

@Service
public class AccountServiceImp implements AccountService {

	@Autowired
	private AccountRepository accountrepo;
	
	@Autowired
	private UserRepository userrepo;
	
	@Override
	public Account createAccount(Account account, Long userId) {
		
		User user = userrepo.findById(userId)
				    .orElseThrow(()->
				    new ResourceNotFoundException("User Not found by id: "+userId));
		 
		if(accountrepo.existsByAccno(account.getAccno())) {
			throw new DuplicateResourceException("Account Number alerady exists");
		}
		
		account.setUser(user); 
		return accountrepo.save(account);
	}

	@Override
	public Account getAccountById(Long accid) {
		return accountrepo.findById(accid)
				.orElseThrow(()->
			    new ResourceNotFoundException("Account not found using id: "+accid));
		
	}

	@Override
	public Account getAccountByNumber(String accno) {
		return accountrepo.findByAccno(accno)
				.orElseThrow(()->
				  new ResourceNotFoundException("Account not found using number: "+accno));
	}

	@Override
	public List<Account> getAccountByUser(Long userid) {
		User user = userrepo.findById(userid)
			      .orElseThrow(()->
			       new ResourceNotFoundException("User not found by id: "+userid));
	
	return accountrepo.findByUser(user);
	}

	@Override
	public double checkBalance(String accNumber) {
		
		Account account = accountrepo.findByAccno(accNumber)
				              .orElseThrow(()->
				               new ResourceNotFoundException("Account not found with number: "+accNumber));
		
		return account.getAccbal();
	}

	@Override
    public Account deposit(String accno, double amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException(
                    "Deposit amount must be greater than zero");
        }

        Account account = accountrepo.findByAccno(accno).orElseThrow(() ->
                        new ResourceNotFoundException("Account not found with number: " + accno));

        account.setAccbal(account.getAccbal() + amount);
        return accountrepo.save(account);
    }

	@Override
    public Account withDrawl(String accno, double amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("Withdrawal amount must be greater than zero");
        }

        Account account = accountrepo.findByAccno(accno).orElseThrow(() ->
                        new ResourceNotFoundException("Account not found with number: " + accno));

        if (account.getAccbal() < amount) {
            throw new InsufficientBalanceException("Insufficient Balance");
        }

        account.setAccbal(account.getAccbal() - amount);
        return accountrepo.save(account);
    }

	@Override
    @Transactional
    public void Transfer(String fromaccno, String toaccno, double amount) {

        if (amount <= 0) {
            throw new IllegalArgumentException("Transfer amount must be greater than zero");
        }

        if (fromaccno.equals(toaccno)) {
            throw new IllegalArgumentException("Sender and receiver account cannot be same");
        }

        Account sender = accountrepo.findByAccno(fromaccno).orElseThrow(() ->
                        new ResourceNotFoundException("Sender account not found"));

        Account receiver = accountrepo.findByAccno(toaccno).orElseThrow(() ->
                        new ResourceNotFoundException("Receiver account not found"));

        if (sender.getAccbal() < amount) {
            throw new InsufficientBalanceException(
                    "Insufficient Balance");
        }

        sender.setAccbal(sender.getAccbal() - amount);
        receiver.setAccbal(receiver.getAccbal() + amount);

        accountrepo.save(sender);
        accountrepo.save(receiver);
    }

	
}
