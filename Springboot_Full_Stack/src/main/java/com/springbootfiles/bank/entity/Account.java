package com.springbootfiles.bank.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
@Table(name="accounts")
public class Account {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long accid;
	
	@NotBlank(message="Accout Number Should not be Empty")
	private String accno;
	
	@NotBlank(message="Account Type Should not be Blank")
	private String acctype;
	
	@DecimalMin(value="0.0" , message="Name Should not be Empty")
	private double accbal;
	
	
	@ManyToOne
	@JoinColumn(name="userId")
	private User user;

	public Account(Long accid, @NotBlank(message = "Accout Number Should not be Empty") String accno,
			@NotBlank(message = "Account Type Should not be Blank") String acctype,
			@DecimalMin(value = "0.0", message = "Name Should not be Empty") double accbal, User user) {
		super();
		this.accid = accid;
		this.accno = accno;
		this.acctype = acctype;
		this.accbal = accbal;
		this.user = user;
	}

	public Account() {
		super();
	}

	public Long getAccid() {
		return accid;
	}

	public void setAccid(Long accid) {
		this.accid = accid;
	}

	public String getAccno() {
		return accno;
	}

	public void setAccno(String accno) {
		this.accno = accno;
	}

	public String getAcctype() {
		return acctype;
	}

	public void setAcctype(String acctype) {
		this.acctype = acctype;
	}

	public double getAccbal() {
		return accbal;
	}

	public void setAccbal(double accbal) {
		this.accbal = accbal;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
}
