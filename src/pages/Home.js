import React, { useEffect, useRef, useState } from "react";
import "../access/css/Home.css";
import { useNavigate } from "react-router-dom";
import videoBackground from "../access/photos/video_home.mp4";
import soundBackgroud from "../access/musics/nhạc nền khi chưa chọn chủ đề nào cả. ở màn hình chính.mp3";
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
  const audioRef = useRef(null);
  const [audioStarted, setAudioStarted] = useState(false);

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

  const startAudio = async () => {
    if (audioRef.current && !audioStarted) {
      try {
        audioRef.current.loop = true;
        audioRef.current.volume = 0.2;
        await audioRef.current.play();
        setAudioStarted(true);
      } catch (error) {
        console.log("Audio autoplay prevented:", error);
      }
    }
  };

  const handleUserInteraction = (callback) => {
    return () => {
      startAudio();
      callback();
    };
  };

  return (
    <div className="Home">
      <video className="video-background" autoPlay muted loop>
        <source src={videoBackground} type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ video.
      </video>
      <audio ref={audioRef} src={soundBackgroud} />
      <div className="container">
        <FullScreenButton />
        <div className="menu">
          <div className="box" onClick={handleUserInteraction(handleGoExam)}>
            <span>TRẮC NGHIỆM CÂU HỎI </span>
            <span>PHÁP LUẬT</span>
          </div>
          <div className="box" onClick={handleUserInteraction(handleGoMusic)}>
            <span>BÀI HÁT </span>
            <span>TRUYỀN THỐNG</span>
          </div>
          <div className="box" onClick={handleUserInteraction(handleGoLoiBacDay)}>
            <span>LỜI BÁC DẠY</span>
            <span>NGÀY NÀY NĂM XƯA</span>
          </div>
          <div className="box" onClick={handleUserInteraction(handleGoTruyenThong)}>
            <span>LỊCH SỬ</span>
            <span>TRUYỀN THỐNG</span>
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
