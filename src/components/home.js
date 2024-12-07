import React from "react";
import { Login } from "./login";
import "../styles/home.css";
import { Link, useNavigate } from "react-router-dom";
import { Exams } from "./exams";
import { MdLogout } from "react-icons/md";

export const Home = () => {
  const userData = JSON.parse(localStorage.getItem("JSUD"));

  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <>
      {userData ? (
        <div className="home">
          <div className="header">
            <h2>Exam Bank System</h2>

            <div className="headright">
              <Link to="./add-exam" className="addlink">
                Add exam
              </Link>
              <MdLogout className="logout" onClick={() => logoutUser()} />
            </div>
          </div>
          <div>
            <input
              type="text"
              name="search"
              placeholder="Search exams..."
              className="search"
            />
          </div>
          <Exams />
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};
