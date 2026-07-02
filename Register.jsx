import React, { useState } from "react";
import axios from "axios";
import "../styles/Form.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        username,
        email,
        password,
      });

      alert("Registration successful!");
    } catch (err) {
      alert("Error registering user!");
    }
  };

  return (
    <div className="form-container glass-effect slide-up">
      <h2>Create Account 🌻</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Full Name" 
          required 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input 
          type="email" 
          placeholder="Email"
          required 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input 
          type="password" 
          placeholder="Password" 
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Register</button>
      </form>

      <p>
        Already have an account? <a href="/">Login</a>
      </p>
    </div>
  );
};

export default Register;
