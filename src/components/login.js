import React, { useState } from "react";
import "../styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const exambankAPI = "http://localhost:8000";

export const Login = () => {
  const [regNo, setRegNo] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const processLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${exambankAPI}/api/user/login`, {
        regNo,
        password,
      });

      if (res.data) {
        localStorage.setItem(
          "JSUD",
          JSON.stringify({
            SESSID: res.data.result._id,
          })
        );
        alert("Login success!");
        navigate("/");
      } else {
        alert("RegNo or password is wrong!");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="loginwrapper">
      <div className="header">
        <h2>Exam Bank System</h2>
      </div>
      <form className="login" onSubmit={(e) => processLogin(e)}>
        <input
          type="text"
          name="Reg No"
          required
          placeholder="Enter Reg No."
          onChange={(e) => setRegNo(e.target.value)}
        />
        <input
          type="text"
          name="password"
          required
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Login</button>

        <div>
          Don't have an account?
          <Link to="/signup" className="loginlink">
            Signup
          </Link>
        </div>
      </form>
    </div>
  );
};
