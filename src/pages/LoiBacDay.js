import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../access/css/LoiBacDay.css";
import videoBackground from "../access/photos/NỀN LỜI BÁC DẠY NGÀY NÀY NĂM XƯA.mp4";
import audio from "../access/musics/nhạc nền khi xem lời bác dạy ngày này năm xưa.mp3";
import { data_loibacday } from "../data/data_loibacday";

const TypingEffect = ({ text, delay = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");

  console.log(text);

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index)); // Thêm từng ký tự vào trạng thái
      index++;

      if (index >= text.length) {
        clearInterval(intervalId); // Dừng hiệu ứng khi hoàn thành
      }
    }, delay);

    return () => clearInterval(intervalId); // Dọn dẹp khi component bị unmount
  }, [text, delay]);

  return <p>{displayedText}</p>;
};

const LoiBacDay = () => {
  const navigator = useNavigate();
  const [item, setItem] = useState({ date: "", title: "", content: "" });

  useEffect(() => {
    data_loibacday.forEach((item) => {
      if (item.date !== "") {
        const date = item.date.split(" ")[1];
        const day = date.split("/")[0];
        const month = date.split("/")[1];
        const now = new Date();
        if (day == now.getDate() && month == now.getMonth() + 1) {
          console.log(item);
          setItem(item);
          return true;
        }
      }
    });
  }, []);

  const handleGo = () => {
    navigator("/home");
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
      <video className="video-background-loiBac" autoPlay muted loop>
        <source src={videoBackground} type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ video.
      </video>
      <audio ref={audioRef} src={audio} />
      <div className="Container-LoiBac">
        <button className="back-btn" type="button" onClick={handleGo}>
          Quay lại
        </button>
        {/* <img src={loiBacDay} alt="Loi Bac Day" /> */}
        <div className="LoiBac-Content">
          <div className="LoiBac-Item">
            <div className="LoiBac-Item-Date">{item.date}</div>
            <div className="LoiBac-Item-Title">{item.title.toUpperCase()}</div>
            <div className="LoiBac-Item-Content">
              <TypingEffect text={item.content} delay={20} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoiBacDay;
