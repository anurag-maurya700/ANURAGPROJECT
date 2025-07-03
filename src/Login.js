import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/login", form);
      alert("Login successful! : " + res.data.token);
      navigate("/home"); 
    } catch (err) {
      alert("SORRY PLEASE REGISTER FIRST");
    }
  };

 function handleRegister(){
  
   navigate("/");
  }

  return (
<div className="mainContainer">

  <div className="subContainer">
    <button onClick={handleRegister} className="button-64" role="button"><span class="text">Register</span></button>
  </div>
      <form onSubmit={handleLogin}>
      <section className=" gradient-custom">
        <div className="container h-100">
          <div className="row d-flex justify-content-center  h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
                <div className=" box card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">Please enter your login and password!</p>

                    <div className="form-outline form-white mb-4">
                      <input type="email" id="typeEmailX" className="form-control form-control-lg"
                       placeholder="Email"
                       value={form.username}
                       onChange={(e) => setForm({ ...form, username: e.target.value })}
                       required />
                      <label className="form-label" htmlFor="typeEmailX">Email</label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input type="password" id="typePasswordX" className="form-control form-control-lg"
                      
                         placeholder="Password"
                         value={form.password}
                         onChange={(e) => setForm({ ...form, password: e.target.value })}
                         required />
                      <label className="form-label" htmlFor="typePasswordX">Password</label>
                    </div>

                    <p className="small mb-5 pb-lg-2">
                      <a className="text-white-50" href="#!">Forgot password?</a>
                    </p>
                    <button type="submit" className="btn btn-outline-light btn-lg px-5">Login</button>
                    

                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                      <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                      <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                      <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                    </div>
                  </div>

                  <div>
                    <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a></p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
   </form>
</div>
   
   

  );
};

export default Login;

