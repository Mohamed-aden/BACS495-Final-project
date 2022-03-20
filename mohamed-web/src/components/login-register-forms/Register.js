import React, { useState } from "react";
import "./Register.css";
import axios from "axios";

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  function handleRegsiter() {
    const { name, email, password, reEnterPassword } = user;

    if (name && email && password && password === reEnterPassword) {
      alert("User registered");
      // axios.post("http://localhost:5000/register", user);
    } else {
      alert("Invalid  input");
    }
  }

  return (
    <div className="register">
      <h1>Register</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="Enter your Name"
        onChange={handleChange}
      />

      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Enter your Email"
        onChange={handleChange}
      />
      <input
        type="text"
        name="password"
        value={user.password}
        placeholder="Enter password"
        onChange={handleChange}
      />

      <input
        type="password"
        name="reEnterPassword"
        value={user.reEnterPassword}
        placeholder="Confirm your Password"
        onChange={handleChange}
      />
      <div className="button" onClick={handleRegsiter}>
        Register
      </div>
      <div>Or</div>
      <div className="button">Login</div>
    </div>
  );
}

export default Register;
