import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../access/css/PKKQ.css";
import videoBackground from "../../access/photos/NỀN TRUYỀN THỐNG TRUNG ĐOÀN 64.mp4";
import { data_trungdoan_64 } from "../../data/data_trungdoan_64";
import { nextSvg } from "../../access/svg";

const TrungDoan64 = () => {
  const navigator = useNavigate();
  const [index, setIndex] = useState(0);
  const [item, setItem] = useState(data_trungdoan_64[index]);
  const [animation, setAnimation] = useState("fade-in");

  const handleGo = () => {
    navigator("/truyenthong");
  };

  const handleNextPage = () => {
    if (index < data_trungdoan_64.length - 1) {
      setAnimation("fade-out");
      setTimeout(() => {
        setIndex(index + 1);
        setAnimation("fade-in");
        setItem(data_trungdoan_64[index + 1]);
      }, 500); // Thời gian khớp với animation trong CSS
    }
  };

  const handlePrevPage = () => {
    if (index > 0) {
      setAnimation("fade-out2");
      setTimeout(() => {
        setIndex(index - 1);
        setAnimation("fade-in");
        setItem(data_trungdoan_64[index - 1]);
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
              style={{ display: index === data_trungdoan_64.length - 1 ? "none" : "flex" }}
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

export default TrungDoan64;
