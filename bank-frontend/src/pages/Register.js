import { useState } from "react";
import api from "../services/ApiService";
import "./Register.css";

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const registerUser = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/users/register", user);

      alert("Registration Successful");

      console.log(response.data);

      setUser({
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
      });
    } catch (error) {
      if (error.response) {
        alert(error.response.data);
      } else {
        alert("Server not running");
      }
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <div className="register-header">
          <div className="register-icon">👤</div>

          <h2>User Registration</h2>

          <p>Create your account to access the Bank Management System</p>
        </div>

        <form onSubmit={registerUser}>
          {/* Name */}
          <div className="form-group">
            <label>👤 Full Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={user.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label>📧 Email Address</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <label>🔒 Password</label>

            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={user.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone */}
          <div className="form-group">
            <label>📱 Phone Number</label>

            <input
              type="tel"
              name="phoneno"
              placeholder="Enter your phone number"
              value={user.phoneno}
              onChange={handleChange}
              required
            />
          </div>

          {/* Address */}
          <div className="form-group">
            <label>📍 Address</label>

            <textarea
              name="address"
              placeholder="Enter your address"
              value={user.address}
              onChange={handleChange}
              rows="4"
              required
            />
          </div>

          <button type="submit" className="register-btn">
            👤 Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
