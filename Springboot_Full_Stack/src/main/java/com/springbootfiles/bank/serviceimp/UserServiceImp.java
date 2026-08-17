package com.springbootfiles.bank.serviceimp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springbootfiles.bank.entity.User;
import com.springbootfiles.bank.exception.DuplicateResourceException;
import com.springbootfiles.bank.exception.ResourceNotFoundException;
import com.springbootfiles.bank.repository.UserRepository;
import com.springbootfiles.bank.service.UserService;

@Service
public class UserServiceImp implements UserService {

	@Autowired
	private UserRepository userrepo;
	@Override
	public User registerUser(User user) {
		if(userrepo.existsByEmail(user.getEmail())) {
			throw new DuplicateResourceException("Email already exist");
		}
		
		return userrepo.save(user);
	}

	@Override
	public User updateUser(Long id, User user) {
		User existingUser = userrepo.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("User not found with Id: "+id));
		
		existingUser.setName(user.getName());
		existingUser.setEmail(user.getEmail());
		existingUser.setPassword(user.getPassword());
		existingUser.setPhoneno(user.getPhoneno());
		existingUser.setAddress(user.getAddress());
		
		return userrepo.save(existingUser);
	}

	@Override
	public void deleteUser(Long id) {
		User user = userrepo.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("user not found with id : "+id));
		
		userrepo.delete(user);
	}

	@Override
	public User getUserById(Long id) {
		// TODO Auto-generated method stub
		return userrepo.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("user not found with id : "+id));
	}

	@Override
	public List<User> getAllUsers() {
		
		return userrepo.findAll();
	}

	@Override
	public Optional<User> login(String username, String password) {
		
		return userrepo.findByEmailAndPassword(username, password);
	}

	
}
