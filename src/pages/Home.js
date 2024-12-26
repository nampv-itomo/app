import React from "react";
import "../access/css/Home.css";
import { useNavigate } from "react-router-dom";
import videoBackground from "../access/photos/video_home.mp4";

const Home = () => {
  const navigator = useNavigate();
  const handleGoExam = () => {
    navigator("/tracnghiem");
  };
  const handleGoMusic = () => {
    navigator("/baihat");
  };
  const handleGoOther = () => {
    navigator("/song");
  };
  return (
    <div className="Home">
      <video className="video-background" autoPlay muted loop>
        <source src={videoBackground} type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ video.
      </video>
      <div className="container">
        <div className="menu">
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
    </div>
  );
};

export default Home;
