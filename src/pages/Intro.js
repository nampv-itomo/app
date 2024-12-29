import React, { useRef } from "react";
import "../access/css/Home.css";
import { useNavigate } from "react-router-dom";
import videoBackground from "../access/photos/intro.mp4";

const Intro = () => {
  const navigator = useNavigate();
  const videoRef = useRef(null);

  setTimeout(() => {
    navigator("/home");
  }, 11600);

  const unmuteVideo = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
    }
  };

  return (
    <div className="Intro">
      <video className="video-background" ref={videoRef} loop autoPlay>
        <source src={videoBackground} type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ video.
      </video>
      {/* <button onClick={unmuteVideo}>Unmute</button> */}
    </div>
  );
};

export default Intro;
