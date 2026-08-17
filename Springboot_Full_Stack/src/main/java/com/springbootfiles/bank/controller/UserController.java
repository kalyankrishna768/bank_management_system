package com.springbootfiles.bank.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import com.springbootfiles.bank.dto.LoginRequest;
import com.springbootfiles.bank.entity.User;
import com.springbootfiles.bank.service.UserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	private UserService userservice;
	
	@PostMapping("/register")
	public ResponseEntity<User> registerUser(@Valid @RequestBody User user) {
		User savedUser = userservice.registerUser(user);
		
		return new ResponseEntity<>(savedUser,HttpStatus.CREATED);
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody LoginRequest request) {
		Optional<User> user = userservice.login(request.getEmail(), request.getPassword());
		
		if(user.isPresent()) {
			return ResponseEntity.ok(user.get());
		}
		
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
				.body("Invalid email and Password");
	}
	
	@GetMapping
	public ResponseEntity<List<User>> getAllUsers() {
		return ResponseEntity.ok(userservice.getAllUsers());
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<User> updateUser(@PathVariable Long id,@RequestBody User user) {
		return ResponseEntity.ok(userservice.updateUser(id, user));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteUser(@PathVariable Long id) {
		userservice.deleteUser(id);
		return ResponseEntity.ok("User Deleted Successfully");
	}
}
