import React, { useState } from "react";
import "../access/css/TracNghiem.css";
import { useNavigate } from "react-router-dom";
import { questions } from "../data/data";
import nextIcon from "../access/icons/icon-next.png";
import { toast } from "react-toastify";

// lay random 20 phan tu trong mang questions
let randomQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 20);

const TracNghiem = () => {
  const navigator = useNavigate();
  const handleGo = () => {
    randomQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 20);
    navigator("/");
  };

  const [result, setResult] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [explain, setExplain] = useState("");
  const [correct, setCorrect] = useState("");

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
      }
    }
  };

  const nextQuestion = () => {
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

  console.log("result", result);
  console.log("correct", correct);

  return (
    <div className="TracNghiem">
      <button className="btn-back" onClick={handleGo}>
        Back
      </button>

      <div className="result">
        <h2>{score} / 20</h2>
      </div>

      <div className="container">
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
            <div className="explain" style={{ display: correct === "" ? "none" : "block" }}>
              <h3>{explain}</h3>
            </div>
          </div>

          <div className="result-btn">
            <button type="button" className="submit-btn" onClick={handleResult}>
              Gửi đáp án
            </button>
          </div>

          {(currentQuestion !== 0 && currentQuestion !== randomQuestions.length - 1) || correct !== "" ? (
            <div className="next">
              <img className="next-btn" src={nextIcon} alt="next" onClick={nextQuestion} />
            </div>
          ) : null}
        </form>
      </div>
    </div>
  );
};

export default TracNghiem;
