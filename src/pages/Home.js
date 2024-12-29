import React, { useEffect, useRef } from "react";
import "../access/css/Home.css";
import { useNavigate } from "react-router-dom";
import videoBackground from "../access/photos/video_home.mp4";
import { selectSongById, setPlayerState } from "../component/actions";
import { connect, useDispatch } from "react-redux";
import { ReactComponent as FullScreenIcon } from "../access/icons/subway--fullscreen.svg";

const FullScreenButton = () => {
  const toggleFullScreen = () => {
    window.electronAPI?.toggleFullScreen();
  };

  return (
    <button
      onClick={toggleFullScreen}
      style={{
        position: "absolute",
        top: "10px",
        right: "10px",
        padding: "10px",
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer",
      }}
    >
      <FullScreenIcon />
    </button>
  );
};

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
  const handleGoTruyenThong = () => {
    navigator("/truyenthong");
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectSongById(0));
    dispatch(setPlayerState(0));
  }, []);

  return (
    <div className="Home">
      <video className="video-background" autoPlay muted loop>
        <source src={videoBackground} type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ video.
      </video>
      <div className="container">
        <FullScreenButton />
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
          <div className="box" onClick={handleGoTruyenThong}>
            <span>Truyền thống trung đoàn</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedSongId: state.selectedSongId,
    playerState: state.playerState,
  };
};

export default connect(mapStateToProps, { setPlayerState, selectSongById })(Home);
