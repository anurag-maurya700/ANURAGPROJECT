import React, { useState } from "react";
import axios from "axios";
import "./Register.css";

const Register = () => {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/register", form);
      alert("Congratulation you are registered!");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <form onSubmit={handleRegister}>
    <div> <input
  type="email"
  placeholder="Email"
  value={form.username}
  onChange={(e) => setForm({ ...form, username: e.target.value })}
  pattern="^[a-zA-Z0-9._%+-]+@gmail\.com$"
  title="Please enter a valid Gmail address (e.g., example@gmail.com)"
  required
/>

</div>
     <input
  type="password"
  placeholder="Password"
  value={form.password}
  onChange={(e) => setForm({ ...form, password: e.target.value })}
  pattern="^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,}$"
  title="Password must be at least 6 characters  include at least 1 number and 1 special character"
  required
/>

<div/>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
