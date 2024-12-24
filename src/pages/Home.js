import React from "react";
import "../access/css/Home.css";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const navigator = useNavigate();
  const handleGo = () => {
    navigator("/tracnghiem");
  };
  return (
    <div className="Home">
      <div className="container">
        <div className="box" onClick={handleGo}>
          <span>Trắc Nghiệm</span>
        </div>
        <div className="box" onClick={handleGo}>
          <span>Bài Hát</span>
        </div>
        <div className="box" onClick={handleGo}>
          <span>Điều Bác Dạy</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
