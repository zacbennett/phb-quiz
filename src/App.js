import React, { useState } from "react";
import { questions } from "./data";

const questionToAnswerSet = {};
for (let quiz of questions) {
  for (let question of quiz.questions) {
    questionToAnswerSet[question.question] = question.correctAnswer;
  }
}
function App() {
  const originalAnswers = localStorage.getItem("answerstate21025") || {};
  const [selectedAnswers, setSelectedAnswers] = useState(
    Object.keys(originalAnswers).length === 0 ? {} : JSON.parse(originalAnswers)
  );
  const handleAnswerChange = (question, answer, title) => {
    if (window.amplitude) {
      window.amplitude.track("Question Answered", {
        "question": question,
        "answer": answer,
        "isCorrect": questionToAnswerSet[question] === answer,
        "quizTitle": title,
      })
    }
    const newAnswers = { ...selectedAnswers, [question]: answer };
    setSelectedAnswers(newAnswers);
    localStorage.setItem("answerstate21025", JSON.stringify(newAnswers));
  };

  const isCorrect = (question) => {
    return (
      selectedAnswers[question] === questionToAnswerSet[question]
    );
  };
  return (
    <div className="App" style={{ maxWidth: "800px", margin: "0 auto" }}>
      <h1>Project Heartbeat Quizzes</h1>
      {questions.map((section) => {
        return (
          <>
            <h2 style={{ textAlign: "left", paddingBottom: "16px" }}>
              {section.title}
            </h2>
            <ol>
              {section.questions.map((elem, index) => {
                return (
                  <div
                    key={index}
                    style={{ textAlign: "left", paddingBottom: "16px" }}
                  >
                    <li>
                      <strong>{elem.question}</strong>
                    </li>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      {Object.keys(elem.answers).map((key) => (
                        <label key={key}>
                          <input
                            type="radio"
                            name={`question_${elem.question}`}
                            value={key}
                            onChange={() =>
                              handleAnswerChange(elem.question, key, section.title)
                            }
                            checked={selectedAnswers[elem.question] === key}
                          />
                          {key}: {elem.answers[key]}
                        </label>
                      ))}
                    </div>
                    {selectedAnswers[elem.question] && (
                      <p>{isCorrect(elem.question) ? "Correct!" : "Wrong!"}</p>
                    )}
                  </div>
                );
              })}
            </ol>
          </>
        );
      })}
      <div
        style={{
          position: "fixed",
          bottom: "5%",
          right: "5%",
          border: "solid 1px black",
          borderRadius: "5px",
          display: "flex",
          flexDirection: "column",
          rowGap: "16px",
          padding: "8px",
          backgroundColor: "white"
        }}
      >
        Correct:{" "}
        {Object.keys(selectedAnswers).filter((key) => isCorrect(key)).length} /{" "}
        {Object.keys(selectedAnswers).length}
        <button onClick={() => setSelectedAnswers({})}>Clear answers</button>
      </div>
    </div>
  );
}

export default App;
