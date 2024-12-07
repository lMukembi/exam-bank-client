import React, { useState } from "react";
import "../styles/addexam.css";
import axios from "axios";
import { Login } from "./login";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const exambankAPI = "http://localhost:8000";

export const Addexam = () => {
  const userData = JSON.parse(localStorage.getItem("JSUD"));

  const userID = userData.SESSID;

  const [code, setCode] = useState("");
  const [unit, setUnit] = useState("");
  const [fileName, setFileName] = useState("");

  const handleFile = async (e) => {
    setFileName(e.target.files[0].name);
  };

  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.clear();
    navigate("/login");
  };

  console.log("userInfo", userID);

  const processAddExam = async (e) => {
    e.preventDefault();

    console.log("userID", userID);

    try {
      if (userID) {
        const res = await axios.post(
          `${exambankAPI}/api/exams/${userID}/addexam`,
          {
            code,
            unit,
            file: fileName,
            id: userID,
          }
        );

        if (res.data) {
          alert("Submit success!");
        }
      } else {
        navigate("./add-exam");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!userData) {
    return <Login />;
  }

  return (
    <>
      {userData ? (
        <div className="examwrapper">
          <div className="header">
            <h2>Exam Bank System</h2>
            <MdLogout className="logout" onClick={() => logoutUser()} />
          </div>
          <form className="exam" onSubmit={(e) => processAddExam(e)}>
            <input
              type="text"
              name="code"
              required
              placeholder="Enter unit code"
              onChange={(e) => setCode(e.target.value)}
            />

            <input
              type="text"
              name="name"
              required
              placeholder="Enter unit name"
              onChange={(e) => setUnit(e.target.value)}
            />
            <input
              type="file"
              placeholder="Upload file"
              name="file"
              filename="examFile"
              onChange={handleFile}
            />
            <button>Add Exam</button>
          </form>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};
