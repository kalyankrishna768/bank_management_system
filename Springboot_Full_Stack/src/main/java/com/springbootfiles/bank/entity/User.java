package com.springbootfiles.bank.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
@Table(name="user")
public class User {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long userid;
	
	@NotBlank(message="Name Should not be Empty")
	private String name;
	
	@NotBlank(message="Email Should not be Empty")
	@Email(message = "Please enter a valid email address")
	@Column(unique=true)
	private String email;
	
	@NotBlank(message="Password Should not be Empty")
	private String password;
	
	@Pattern(regexp="^[6-9]\\d{9}$",message="Invalid Mobile Number")
	private String phoneno; 
	private String address;
	
	
	public User() {
		super();
	}
	
	public User(Long userid, @NotBlank(message = "Name Should not be Empty") String name,
			@NotBlank(message = "Email Should not be Empty") String email,
			@NotBlank(message = "Password Should not be Empty") String password,
			@Pattern(regexp = "^[6-9]\\d{9}$", message = "Invalid Mobile Number") String phoneno, String address) {
		super();
		this.userid = userid;
		this.name = name;
		this.email = email;
		this.password = password;
		this.phoneno = phoneno;
		this.address = address;
	}

	public Long getUserid() {
		return userid;
	}

	public void setUserid(Long userid) {
		this.userid = userid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPhoneno() {
		return phoneno;
	}

	public void setPhoneno(String phoneno) {
		this.phoneno = phoneno;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}
}
