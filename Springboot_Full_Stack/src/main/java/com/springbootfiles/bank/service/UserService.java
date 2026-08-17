package com.springbootfiles.bank.service;

import java.util.*;

import com.springbootfiles.bank.entity.User;

public interface UserService {

	User registerUser(User user);
	
	User updateUser(Long Id,User user);
	
	void deleteUser(Long Id);
	
	User getUserById(Long Id);
	
	List<User> getAllUsers();
	
	Optional<User> login(String username, String password);
}
