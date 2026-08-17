package com.springbootfiles.bank.entity;

import java.time.LocalDateTime;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
@Table(name="transactions")
public class Transaction {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long  transactionId;
	
	@NotBlank(message="Transaction Type should not be Empty")
	private String transactionType;
	private LocalDateTime transactionDate;
	
	@DecimalMin(value="0.01", message="Amount should not be empty")
	private double amount;
	
	private String remarks;
	
	@ManyToOne
	@JoinColumn(name="accid")
	private Account accountid;

	public Transaction(Long transactionId,
			@NotBlank(message = "Transaction Type should not be Empty") String transactionType,
			LocalDateTime transactionDate,
			@DecimalMin(value = "0.01", message = "Amount should not be empty") double amount, String remarks,
			Account accountid) {
		super();
		this.transactionId = transactionId;
		this.transactionType = transactionType;
		this.transactionDate = transactionDate;
		this.amount = amount;
		this.remarks = remarks;
		this.accountid = accountid;
	}

	public Transaction() {
		super();
	}

	public Long getTransactionId() {
		return transactionId;
	}

	public void setTransactionId(Long transactionId) {
		this.transactionId = transactionId;
	}

	public String getTransactionType() {
		return transactionType;
	}

	public void setTransactionType(String transactionType) {
		this.transactionType = transactionType;
	}

	public LocalDateTime getTransactionDate() {
		return transactionDate;
	}

	public void setTransactionDate(LocalDateTime transactionDate) {
		this.transactionDate = transactionDate;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public Account getAccountid() {
		return accountid;
	}

	public void setAccountid(Account accountid) {
		this.accountid = accountid;
	}
	
	
}
