import React, { useEffect, useState } from "react";
import "../access/css/TracNghiem.css";
import { useNavigate } from "react-router-dom";
import { questions } from "../data/data";
import { toast } from "react-toastify";
import videoBackground from "../access/photos/video_nen_trac_nghiem.mp4";
import { backSvg } from "../access/svg";
import soundLeftClick from "../access/musics/hiệu ứng âm thanh khi click chuột trái.mp3";
import soundTrue from "../access/musics/hiệu ứng nhạc khi trả lời đúng.mp3";
import soundFalse from "../access/musics/hiệu ứng nhạc khi trả lời sai.mp3";
import soundFinish from "../access/musics/hiệu ứng khi kết thúc bài thi trắc nhiệm.mp3";
import soundBackground from "../access/musics/nhạc nền khi làm bài trắc nhiệm.mp3";

// lay random 20 phan tu trong mang questions
let randomQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 10);

const TracNghiem = () => {
  const navigator = useNavigate();
  const handleGo = () => {
    randomQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 10);
    navigator("/home");
  };

  const [result, setResult] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [explain, setExplain] = useState("");
  const [correct, setCorrect] = useState("");
  const [history, setHistory] = useState([]);

  const leftClick = new Audio(soundLeftClick);
  const trueClick = new Audio(soundTrue);
  const falseClick = new Audio(soundFalse);
  const finishClick = new Audio(soundFinish);
  const soundBG = new Audio(soundBackground);

  useEffect(() => {
    soundBG.play();
    soundBG.loop = true;
    soundBG.volume = 0.3;
    return () => {
      soundBG.pause();
    };
  }, []);

  const showToast = (message) => {
    toast.warning(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleResult = () => {
    leftClick.play();
    if (result === "") {
      showToast("Vui lòng chọn đáp án");
      return;
    }

    if (correct === "") {
      const correct = randomQuestions[currentQuestion].result.split(")")[0];
      setExplain("Giải thích: " + randomQuestions[currentQuestion].explain);
      setCorrect(correct);
      if (result === correct) {
        setScore(score + 1);
        trueClick.play();
      } else {
        falseClick.play();
      }
      setHistory([...history, result]);
      randomQuestions[currentQuestion].chose = correct;
    }
  };

  const nextQuestion = () => {
    leftClick.play();
    if (correct === "") {
      showToast("Vui lòng nộp bài trước khi chuyển câu hỏi");
      return;
    } else {
      setCorrect("");
      setExplain("");
      if (currentQuestion < randomQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setResult("");
      } else {
        showToast("Đã hết câu hỏi");
      }
    }
  };

  const prevQuestion = () => {
    leftClick.play();
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setResult("");
    } else {
      showToast("Đây là câu hỏi đầu tiên");
    }
  };

  useEffect(() => {
    if (currentQuestion < history.length) {
      setResult(history[currentQuestion]);
      setCorrect(randomQuestions[currentQuestion].result.split(")")[0]);
      setExplain("Giải thích: " + randomQuestions[currentQuestion].explain);
    }
  }, [currentQuestion]);

  useEffect(() => {
    if (currentQuestion === randomQuestions.length - 1 && correct !== "") {
      soundBG.pause();
      finishClick.play();
    }
  }, [currentQuestion, correct]);

  return (
    <React.Fragment>
      <video className="video-background" autoPlay muted loop>
        <source src={videoBackground} type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ video.
      </video>
      {/* <audio src={soundBackground} autoPlay loop /> */}
      <div className="TracNghiem">
        <button className="btn-back" onClick={handleGo}>
          Quay lại
        </button>

        {currentQuestion === randomQuestions.length - 1 && correct !== "" ? (
          <div className="ShowResult">
            <div className="KetQua">
              <h1>
                Kết quả : {score} / {randomQuestions.length} câu
              </h1>
              <button className="btn-exit" onClick={handleGo}>
                Thoát
              </button>
            </div>
          </div>
        ) : null}

        <div className="container">
          <div className="result">
            <h2>
              {score} / {randomQuestions.length}
            </h2>
          </div>

          <form id="quizForm">
            <div className="question">
              <h2>
                Câu {currentQuestion + 1}: {randomQuestions[currentQuestion].question}
              </h2>
              <ul className="options">
                <li>
                  <input
                    type="radio"
                    id="qa"
                    name="q1"
                    value="a"
                    checked={result === "a"}
                    onChange={(e) => setResult(e.target.value)}
                    onClick={() => leftClick.play()}
                    disabled={correct !== ""}
                  />

                  <label
                    htmlFor="qa"
                    style={{
                      color: correct === "a" ? "green" : "black",
                      fontWeight: correct === "a" ? "bold" : "normal",
                    }}
                  >
                    {"A: "}
                    {randomQuestions[currentQuestion].answer_a}
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="qb"
                    name="q1"
                    value="b"
                    checked={result === "b"}
                    onChange={(e) => setResult(e.target.value)}
                    onClick={() => leftClick.play()}
                    disabled={correct !== ""}
                  />

                  <label
                    htmlFor="qb"
                    style={{
                      color: correct === "b" ? "green" : "black",
                      fontWeight: correct === "b" ? "bold" : "normal",
                    }}
                  >
                    {"B: "}
                    {randomQuestions[currentQuestion].answer_b}
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="qc"
                    name="q1"
                    value="c"
                    checked={result === "c"}
                    onChange={(e) => setResult(e.target.value)}
                    onClick={() => leftClick.play()}
                    disabled={correct !== ""}
                  />

                  <label
                    htmlFor="qc"
                    style={{
                      color: correct === "c" ? "green" : "black",
                      fontWeight: correct === "c" ? "bold" : "normal",
                    }}
                  >
                    {"C: "}
                    {randomQuestions[currentQuestion].answer_c}
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="qd"
                    name="q1"
                    value="d"
                    checked={result === "d"}
                    onChange={(e) => setResult(e.target.value)}
                    onClick={() => leftClick.play()}
                    disabled={correct !== ""}
                  />

                  <label
                    htmlFor="qd"
                    style={{
                      color: correct === "d" ? "green" : "black",
                      fontWeight: correct === "d" ? "bold" : "normal",
                    }}
                  >
                    {"D: "}
                    {randomQuestions[currentQuestion].answer_d}
                  </label>
                </li>
              </ul>
              <div style={{ minHeight: "120px" }}>
                <div className="explain" style={{ display: correct === "" ? "none" : "block" }}>
                  <h3>{explain}</h3>
                </div>
              </div>
            </div>

            <div className="result-btn">
              <button type="button" className="prev-btn" onClick={prevQuestion}>
                {backSvg}
              </button>
              <button type="button" className="submit-btn" onClick={handleResult}>
                Gửi đáp án
              </button>
              <button type="button" className="next-btn" onClick={nextQuestion}>
                {backSvg}
              </button>
            </div>

            {/* {(currentQuestion !== 0 && currentQuestion !== randomQuestions.length - 1) || correct !== "" ? (
              <div className="next">
                <img className="next-btn" src={nextIcon} alt="next" onClick={nextQuestion} />
              </div>
            ) : null} */}
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TracNghiem;
