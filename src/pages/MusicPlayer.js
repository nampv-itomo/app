import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../access/css/Music.css";
import MusicApp from "../component/components/App";

const MusicPlayer = () => {
  const navigator = useNavigate();
  const handleGo = () => {
    navigator("/home");
  };

  return (
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
  );
};

export default MusicPlayer;
