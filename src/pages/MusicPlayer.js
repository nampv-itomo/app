import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../access/css/Music.css";
import MusicApp from "../component/components/App";
import videoBackground from "../access/photos/NỀN CÁC BÀI HÁT.mp4";

const MusicPlayer = () => {
  const navigator = useNavigate();
  const handleGo = () => {
    navigator("/home");
  };

  return (
    <>
      <video className="video-background-music" autoPlay muted loop>
        <source src={videoBackground} type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ video.
      </video>
      <div className="Container">
        <button className="back-btn" type="button" onClick={handleGo}>
          Quay lại
        </button>
        <div className="MusicPlayer">
          <div>
            <MusicApp />
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicPlayer;
