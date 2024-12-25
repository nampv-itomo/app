import React from "react";
import "../access/css/Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigator = useNavigate();
  const handleGoExam = () => {
    navigator("/tracnghiem");
  };
  const handleGoMusic = () => {
    navigator("/baihat");
  };
  const handleGoOther = () => {
    navigator("/music");
  };
  return (
    <div className="Home">
      <div className="container">
        <div className="box" onClick={handleGoExam}>
          <span>Trắc Nghiệm</span>
        </div>
        <div className="box" onClick={handleGoMusic}>
          <span>Bài Hát</span>
        </div>
        <div className="box" onClick={handleGoOther}>
          <span>Điều Bác Dạy</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
