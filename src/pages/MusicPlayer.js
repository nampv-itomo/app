import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../access/css/Music.css";

const AudioControls = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const MusicPlayer = () => {
  const [fileName, setFileName] = useState(null);
  const audioRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      const audioURL = URL.createObjectURL(file);
      audioRef.current.src = audioURL;
    }
  };

  const playAudio = () => {
    if (audioRef.current) audioRef.current.play();
  };

  const pauseAudio = () => {
    if (audioRef.current) audioRef.current.pause();
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const navigator = useNavigate();
  const handleGo = () => {
    navigator("/");
  };

  return (
    <div className="Container">
      <button className="back-btn" type="button" onClick={handleGo}>
        Quay lại
      </button>
      <h1>Music Player</h1>
      <input type="file" accept="audio/*" onChange={handleFileChange} />
      {fileName && <p>Now Playing: {fileName}</p>}
      <AudioControls>
        <Button onClick={playAudio}>Play</Button>
        <Button onClick={pauseAudio}>Pause</Button>
        <Button onClick={stopAudio}>Stop</Button>
      </AudioControls>
      <audio ref={audioRef} />
    </div>
  );
};

export default MusicPlayer;
