package com.springbootfiles.bank.repository;

import java.util.*;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springbootfiles.bank.entity.*;

@Repository
public interface AccountRepository extends JpaRepository<Account,Long>{

	Optional<Account> findByAccno(String accno);
	
	List<Account> findByUser(User user);
	
	boolean existsByAccno(String accno);
}
