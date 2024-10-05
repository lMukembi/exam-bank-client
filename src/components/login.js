import React from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";

export const Login = () => {
  return (
    <div className="loginwrapper">
      <div className="header">
        <h2>Exam Bank System</h2>
      </div>
      <form className="login">
        <input
          type="text"
          name="Reg No"
          maxLength={12}
          required
          placeholder="Enter Reg No."
        />
        <input
          type="text"
          name="password"
          required
          placeholder="Enter password"
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
