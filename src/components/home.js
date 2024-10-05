import React from "react";
import { Login } from "./login";
import "../styles/home.css";
import { FaFileDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Home = () => {
  const userData = JSON.parse(localStorage.getItem("newUser"));

  return (
    // <>
    //   {userData ? (
    <div className="home">
      <div className="header">
        <h2>Exam Bank System</h2>
        <Link to="/login" className="loginlink">
          Login
        </Link>
      </div>
      <div>
        <input
          type="text"
          name="search"
          placeholder="Search exams..."
          className="search"
        />
      </div>
      <div className="units">
        <div className="unit">
          <div>DICS 1303: Data Structures & Algorithms</div>
          <div className="download">
            <FaFileDownload />
          </div>
        </div>
        <div className="unit">
          <div>DBT 1307B: Project Implementation</div>
          <div className="download">
            <FaFileDownload />
          </div>
        </div>
        <div className="unit">
          <div>DICS 1302: Web Applications</div>

          <div className="download">
            <FaFileDownload />
          </div>
        </div>
        <div className="unit">
          <div>DICS 1105: Electronics</div>
          <div className="download">
            <FaFileDownload />
          </div>
        </div>
        <div className="unit">
          <div>DICS 1101: Fundamentals of Mathematics</div>
          <div className="download">
            <FaFileDownload />
          </div>
        </div>
        <div className="unit">
          <div>DICS 1102: Fundamentals of Computing</div>
          <div className="download">
            <FaFileDownload />
          </div>
        </div>
        <div className="unit">
          <div>DBIT 1307: Project Proposal</div>
          <div className="download">
            <FaFileDownload />
          </div>
        </div>
        <div className="unit">
          <div>DIT 1311: Software Engineering</div>

          <div className="download">
            <FaFileDownload />
          </div>
        </div>
        <div className="unit">
          <div>DBT 1204: System Analysis & Design</div>
          <div className="download">
            <FaFileDownload />
          </div>
        </div>
        <div className="unit">
          <div>DIT 1307: Cybersecurity</div>
          <div className="download">
            <FaFileDownload />
          </div>
        </div>
      </div>
    </div>
    //   ) : (
    //     <Login />
    //   )}
    // </>
  );
};
