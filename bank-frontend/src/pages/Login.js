import { useState } from "react";
import api from "../services/ApiService";
import "./Login.css";

function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/users/login", login);

      alert("Login Successful");

      console.log(response.data);

      // Store logged-in user information
      localStorage.setItem("user", JSON.stringify(response.data));

      // Clear form
      setLogin({
        email: "",
        password: "",
      });
    } catch (error) {
      if (error.response) {
        alert(error.response.data);
      } else {
        alert("Unable to connect to the server");
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        {/* Header */}
        <div className="login-header">
          <div className="login-icon">🔐</div>

          <h2>User Login</h2>

          <p>Login to access your banking account</p>
        </div>

        {/* Login Form */}
        <form onSubmit={loginUser}>
          {/* Email */}
          <div className="login-form-group">
            <label htmlFor="email">Email Address</label>

            <div className="login-input-wrapper">
              <span className="login-input-icon">✉</span>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={login.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="login-form-group">
            <label htmlFor="password">Password</label>

            <div className="login-input-wrapper">
              <span className="login-input-icon">🔒</span>

              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={login.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Login Button */}
          <button type="submit" className="login-button">
            Login
            <span>→</span>
          </button>
        </form>

        {/* Bottom Message */}
        <div className="login-security">
          <span>🔒</span>

          <p>Your login information is securely processed.</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
