package com.springbootfiles.bank.dto;

public class TransferRequest {

	private String fromaccno;
	private String toaccno;
	private double amount;
	
	public String getFromaccno() {
		return fromaccno;
	}
	public void setFromaccno(String fromaccno) {
		this.fromaccno = fromaccno;
	}
	public String getToaccno() {
		return toaccno;
	}
	public void setToaccno(String toaccno) {
		this.toaccno = toaccno;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
}
