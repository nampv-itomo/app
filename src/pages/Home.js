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
  const handleGoLoiBacDay = () => {
    navigator("/loibacday");
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
            <span>Trắc nghiệm câu hỏi pháp luật</span>
          </div>
          <div className="box" onClick={handleGoMusic}>
            <span>Bài hát truyền thống</span>
          </div>
          <div className="box" onClick={handleGoLoiBacDay}>
            <span>Lời Bác dạy ngày này năm xưa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
