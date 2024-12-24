import React, { useState } from "react";
import "../access/css/TracNghiem.css";
import { useNavigate } from "react-router-dom";
import { questions } from "../data/data";

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

  const handleResult = () => {
    if (result === "") {
      alert("Vui lòng chọn đáp án");
      return;
    }

    const correct = randomQuestions[currentQuestion].result.split(")")[0];
    if (result === correct) {
      setScore(score + 1);
    }

    if (currentQuestion < randomQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setResult("");
    } else {
      alert("Kết thúc bài thi");
    }
  };

  return (
    <div className="TracNghiem">
      <button className="btn-back" onClick={handleGo}>
        Back
      </button>

      <div className="result">
        <h1>{score} / 20</h1>
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
                />
                {"A: "}
                <label htmlFor="qa">{randomQuestions[currentQuestion].answer_a}</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="qb"
                  name="q1"
                  value="b"
                  checked={result === "b"}
                  onChange={(e) => setResult(e.target.value)}
                />
                {"B: "}
                <label htmlFor="qb">{randomQuestions[currentQuestion].answer_b}</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="qc"
                  name="q1"
                  value="c"
                  checked={result === "c"}
                  onChange={(e) => setResult(e.target.value)}
                />
                {"C: "}
                <label htmlFor="qc">{randomQuestions[currentQuestion].answer_c}</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="qd"
                  name="q1"
                  value="d"
                  checked={result === "d"}
                  onChange={(e) => setResult(e.target.value)}
                />
                {"D: "}
                <label htmlFor="qd">{randomQuestions[currentQuestion].answer_d}</label>
              </li>
            </ul>
          </div>

          <div className="go-next">
            <button type="button" className="submit-btn" onClick={handleResult}>
              Nộp Bài
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TracNghiem;
