import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../access/css/PKKQ.css";
import videoBackground from "../../access/photos/NỀN TRUYỀN THỐNG QUÂN CHỦNG PKKQ.mp4";
import { data_truyenthong_pkkq } from "../../data/data_truyenthong_pkkq";
import { backSvg } from "../../access/svg";
import { nextSvg } from "../../access/svg";

const TypingEffect = ({ text, delay = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]); // Thêm từng ký tự vào trạng thái
      index++;

      if (index >= text.length - 1) {
        clearInterval(intervalId); // Dừng hiệu ứng khi hoàn thành
      }
    }, delay);

    return () => clearInterval(intervalId); // Dọn dẹp khi component bị unmount
  }, [text, delay]);

  return <p style={{ fontSize: "20px", lineHeight: "1.5", color: "white" }}>{displayedText}</p>;
};

const PKKQ = () => {
  const navigator = useNavigate();
  const [index, setIndex] = useState(0);
  const [item, setItem] = useState(data_truyenthong_pkkq[index]);
  const [animation, setAnimation] = useState("fade-in");

  const handleGo = () => {
    navigator("/truyenthong");
  };

  const handleNextPage = () => {
    if (index < data_truyenthong_pkkq.length - 1) {
      setAnimation("fade-out");
      setTimeout(() => {
        setIndex(index + 1);
        setAnimation("fade-in");
        setItem(data_truyenthong_pkkq[index + 1]);
      }, 500); // Thời gian khớp với animation trong CSS
    }
  };

  const handlePrevPage = () => {
    if (index > 0) {
      setAnimation("fade-out2");
      setTimeout(() => {
        setIndex(index - 1);
        setAnimation("fade-in");
        setItem(data_truyenthong_pkkq[index - 1]);
      }, 500); // Thời gian khớp với animation trong CSS
    }
  };

  return (
    <React.Fragment>
      <video className="video-background-loiBac" autoPlay muted loop>
        <source src={videoBackground} type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ video.
      </video>
      <div className="Container-PKKQ">
        <button className="back-page-btn" type="button" onClick={handleGo}>
          Quay lại
        </button>

        <div className="PKKQ-Content">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "80px",
            }}
          >
            <div className="back-btn" style={{ display: index === 0 ? "none" : "flex" }} onClick={handlePrevPage}>
              {nextSvg}
            </div>
          </div>
          <div className={`PKKQ-Item ${animation}`}>
            <div dangerouslySetInnerHTML={{ __html: item }} />
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "80px" }}>
            <div
              className="next-btn"
              style={{ display: index === data_truyenthong_pkkq.length - 1 ? "none" : "flex" }}
              onClick={handleNextPage}
            >
              {nextSvg}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PKKQ;
