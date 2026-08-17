package com.springbootfiles.bank.exception;

@SuppressWarnings("serial")
public class InsufficientBalanceException extends RuntimeException{

	public InsufficientBalanceException(String msg) {
		super(msg);
	}
}
