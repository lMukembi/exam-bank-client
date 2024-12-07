import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/signup.css";
import axios from "axios";

export const Signup = () => {
  const [name, setName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const exambankAPI = "http://localhost:8000";

  const processSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${exambankAPI}/api/user/signup`, {
        name,
        regNo,
        password,
      });

      if (res.data) {
        localStorage.setItem(
          "JSUD",
          JSON.stringify({
            SESSID: res.data.result._id,
            UTKN: res.data.tokenID,
          })
        );
        navigate("/");
        alert("Signup success!");
      } else {
        navigate("/signup");
      }
    } catch (error) {
      console.log(error);
      navigate("/signup");
    }
  };
  return (
    <div className="signupwrapper">
      <div className="header">
        <h2>Exam Bank System</h2>
      </div>
      <form className="signup" onSubmit={(e) => processSignup(e)}>
        <input
          type="text"
          name="name"
          required
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="Reg No."
          maxLength={12}
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

        <button>Signup</button>

        <div>
          Already have an account?
          <Link to="/login" className="signuplink">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};
