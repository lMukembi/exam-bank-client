import React from "react";
import { Link } from "react-router-dom";
import "../styles/signup.css";

export const Signup = () => {
  return (
    <div className="signupwrapper">
      <div className="header">
        <h2>Exam Bank System</h2>
      </div>
      <form className="signup">
        <input type="text" name="username" required placeholder="Enter name" />
        <input
          type="text"
          name="Reg No."
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
