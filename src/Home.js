import React from "react";
import "./access/css/Home.css";
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
          Câu hỏi trắc nghiệm
        </div>
        <div className="box">Bài hát </div>
        <div className="box">Box 3</div>
      </div>
    </div>
  );
};

export default Home;
