import React, { useState } from "react";
import axios from "axios";
import "./Login.css"; 

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/login", form);
      alert("Login successful! : " + res.data.token);
    } catch (err) {
      alert("SORRY PLEASE REGISTERED FIRST");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setForm({ ...form, username: e.target.value })}
        required
      /><div/>
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        required
      /><div/>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
