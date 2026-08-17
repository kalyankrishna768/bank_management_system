package com.springbootfiles.bank.exception;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

@RestControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler(ResourceNotFoundException.class)
	public ResponseEntity<String> resource(ResourceNotFoundException ex) {
		return new ResponseEntity<>(ex.getMessage(),HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(DuplicateResourceException.class)
	public ResponseEntity<String> duplicate(DuplicateResourceException ex) {
		return new ResponseEntity<>(ex.getMessage(),HttpStatus.CONFLICT);
	}
	
	@ExceptionHandler(InsufficientBalanceException.class) 
	public ResponseEntity<String> insufficient(InsufficientBalanceException ex) {
		return new ResponseEntity<>(ex.getMessage(),HttpStatus.BAD_REQUEST);
	}
	
	@ExceptionHandler(Exception.class)
	public ResponseEntity<String> all(Exception ex) {
		return new ResponseEntity<>(ex.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
