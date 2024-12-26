import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../access/css/LoiBacDay.css";
import loiBacDay from "../access/loibacday/23-12.png";

const LoiBacDay = () => {
  const navigator = useNavigate();
  const handleGo = () => {
    navigator("/home");
  };

  return (
    <div className="Container">
      <button className="back-btn" type="button" onClick={handleGo}>
        Quay lại
      </button>
      <div className="LoiBac">
        {/* <div style={{ height: "750px" }}>
          {" "}
          <iframe src="/loibacday/23-12.pdf" width="100%" height="100%" style={{ border: "none" }}></iframe>{" "}
        </div> */}

        {/* <div style={{ height: "1000px", width: "900px" }}>
          <object data="/loibacday/23-12.pdf" type="application/pdf" width="100%" height="100%"></object>{" "}
        </div> */}
        <img src={loiBacDay} alt="Loi Bac Day" />
      </div>
    </div>
  );
};

export default LoiBacDay;
