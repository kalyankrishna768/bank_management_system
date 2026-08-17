package com.springbootfiles.bank.exception;

@SuppressWarnings("serial")
public class DuplicateResourceException extends RuntimeException {

	public DuplicateResourceException(String msg) {
		super(msg);
	}
}
