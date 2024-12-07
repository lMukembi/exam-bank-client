import React, { Fragment, useEffect, useState } from "react";
import "../styles/home.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaFileDownload } from "react-icons/fa";
import { Login } from "./login";

const exambankAPI = "http://localhost:8000";

export const Exams = () => {
  const userData = JSON.parse(localStorage.getItem("JSUD"));

  const userID = userData.SESSID;

  const [exams, setExams] = useState({});

  const fileURL = async (url) => {
    const response = await axios.get(url, { responseType: "blob" });
    const imageDataUrl = URL.createObjectURL(response.data);

    return imageDataUrl;
  };

  const downloadFile = async (fileSrc, fileName) => {
    const link = document.createElement("a");
    link.href = await fileURL(fileSrc);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const getExams = async () => {
      try {
        const res = await axios.get(
          `${exambankAPI}/api/exams/${userID}/all-exams`
        );

        if (res.data) {
          setExams(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getExams();
  }, [userID]);
  return (
    <>
      {userData ? (
        <div className="units">
          {exams.length > 0 ? (
            <>
              {exams.length > 0 &&
                exams.map((exam, index) => {
                  return (
                    <Fragment key={index + "." + exam._id}>
                      <div className="unit">
                        <div>
                          {index + 1}. {exam.code}: {exam.unit}
                        </div>
                        <div
                          className="download"
                          onClick={() => downloadFile("Excel.xlsx", exam.unit)}
                        >
                          <FaFileDownload />
                        </div>
                      </div>
                    </Fragment>
                  );
                })}
            </>
          ) : (
            <small>
              No exams! <Link to="./add-exam">Add exam</Link>
            </small>
          )}
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};
