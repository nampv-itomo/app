import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../access/css/TruyenThong.css";
import videoBackground from "../access/photos/nền chính khi chọn chủ đề lịch sử.mp4";
import soundBackground from "../access/musics/nhạc nền trước khi chọn chủ đề truyền thống và trong truyền thống.mp3";

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

  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
    }
  }, []);

  return (
    <React.Fragment>
      <video className="video-background-truyenthong" autoPlay muted loop>
        <source src={videoBackground} type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ video.
      </video>
      <audio ref={audioRef} src={soundBackground} />
      <div className="Container-TruyenThong">
        <button className="back-btn" type="button" onClick={handleGo}>
          Quay lại
        </button>
        <div className="TruyenThong">
          <div className="menu">
            <div className="box" onClick={handleGoTruyenThong1}>
              <span>TRUYỀN THỐNG </span>
              <span>QUÂN CHỦNG PK-KQ</span>
            </div>
            <div className="box" onClick={handleGoTruyenThong3}>
              <span>TRUYỀN THỐNG </span>
              <span>SƯ ĐOÀN PHÒNG KHÔNG 361</span>
            </div>
            <div className="box" onClick={handleGoTruyenThong2}>
              <span>TRUYỀN THỐNG </span>
              <span>TRUNG ĐOÀN 64</span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoiBacDay;
