import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../access/css/TruyenThong.css";
import videoBackground from "../access/photos/nền chính khi chọn chủ đề lịch sử.mp4";

const LoiBacDay = () => {
  const navigator = useNavigate();

  const handleGo = () => {
    navigator("/home");
  };

  const handleGoTruyenThong1 = () => {
    navigator("/truyenthong/quanchungpkkq");
  };

  const handleGoTruyenThong2 = () => {
    navigator("/truyenthong/trungdoan64");
  };

  const handleGoTruyenThong3 = () => {
    navigator("/truyenthong/sudoan361");
  };

  return (
    <React.Fragment>
      <video className="video-background-truyenthong" autoPlay muted loop>
        <source src={videoBackground} type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ video.
      </video>
      <div className="Container-TruyenThong">
        <button className="back-btn" type="button" onClick={handleGo}>
          Quay lại
        </button>
        <div className="TruyenThong">
          <div className="menu">
            <div className="box" onClick={handleGoTruyenThong1}>
              <span>TRUYỀN THỐNG QUÂN CHỦNG PKKQ</span>
            </div>
            <div className="box" onClick={handleGoTruyenThong2}>
              <span>TRUYỀN THỐNG TRUNG ĐOÀN 64</span>
            </div>
            <div className="box" onClick={handleGoTruyenThong3}>
              <span>TRUYỀN THỐNG SƯ ĐOÀN PHÒNG KHÔNG 361</span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoiBacDay;
