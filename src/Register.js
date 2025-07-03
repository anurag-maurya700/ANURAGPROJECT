
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    debugger;
    e.preventDefault();
    console.log(form);
    try {
      await axios.post("http://localhost:5000/register", form);
      alert("Congratulations! You are registered.");
      navigate("/login"); 
    } catch (err) {
      alert("Registration failed.");
    }
  };

  return (
  

      <section
        className="vh-100 bg-image"
        style={{
          backgroundImage:
            "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')",
        }}
      >
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center pt-5">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: "15px" }}>
                  <div className="card-body  box">
                    <h2 className="text-uppercase text-center mb-5">
                      Create an account
                    </h2>

                    <form onSubmit={handleRegister}>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          placeholder="Email (must end with @gmail.com)"
                          value={form.username}
                          onChange={(e) =>
                            setForm({ ...form, username: e.target.value })
                          }
                          pattern="[a-z0-9._%+-]+@gmail\.com$"
                          title="Enter a valid Gmail address"
                          required
                          id="email"
                          className="form-control form-control-lg"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                         type="password"
                         placeholder="Password (min 6 chars, 1 number, 1 special char)"
                         value={form.password}
                          onChange={(e) => setForm({ ...form, password: e.target.value })}
                          pattern="^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,}$"
                         title="Password must be at least 6 characters and include 1 number and 1 special character"
                         required
                         
                          id="password"
                          className="form-control form-control-lg"
                        
                        />
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          id="terms"
                        
                          
                        />
                        <label className="form-check-label" htmlFor="terms">
                          I agree to all statements in{" "}
                          <a href="#!" className=" text-primary">
                            <u>Terms of service</u>
                          </a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center">

                       
                        <button
                          type="submit"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Register
                        </button>
                      </div>

                      
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
   
  );
};

export default Register;
