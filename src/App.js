import React, { useState } from "react";
import { questions } from "./data";

const questionToAnswerSet = {};
for (let quiz of questions) {
    for (let question of quiz.questions) {
        questionToAnswerSet[question.question] = question.correctAnswer
    }
}
function App() {
  //   const originalAnswers =  {};
  const originalAnswers = localStorage.getItem("answerstate21025") || {};
  const [selectedAnswers, setSelectedAnswers] = useState(
    Object.keys(originalAnswers).length === 0 ? {} : JSON.parse(originalAnswers)
  );
  const handleAnswerChange = (questionIndex, answer) => {
    const newAnswers = { ...selectedAnswers, [questionIndex]: answer };
    setSelectedAnswers(newAnswers);
    localStorage.setItem("answerstate21025", JSON.stringify(newAnswers));
  };

  const isCorrect = (questionIndex) => {
    return (
      selectedAnswers[questionIndex] === questionToAnswerSet[questionIndex]
    );
  };
  return (
    <div className="App" style={{ maxWidth: "800px", margin: "0 auto" }}>
      <h1>Quiz App</h1>
      <button onClick={() => setSelectedAnswers({})}>Clear answers</button>
      {questions.map((section) => {
        return (
          <>
            <h2 style={{textAlign: 'left', paddingBottom: '16px'}}>{section.title}</h2>
            <ol>
            {section.questions.map((elem, index) => {
                return <div key={index} style={{textAlign: 'left', paddingBottom: '16px'}}>
                <li><strong>{elem.question}</strong></li>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  {Object.keys(elem.answers).map((key) => (
                    <label key={key}>
                      <input
                        type="radio"
                        name={`question_${elem.question}`}
                        value={key}
                        onChange={() => handleAnswerChange(elem.question, key)}
                        checked={selectedAnswers[elem.question] === key}
                      />
                      {key}: {elem.answers[key]}
                    </label>
                  ))}
                </div>
                {selectedAnswers[elem.question] && (
                  <p>
                    {isCorrect(elem.question) ? 'Correct!' : 'Wrong!'}
                  </p>
                )}
              </div>
            })}
            </ol>
          </>
        );
      })}
      Correct:{" "}
      {Object.keys(selectedAnswers).filter((key) => isCorrect(key)).length} /{" "}
      {Object.keys(selectedAnswers).length}
    </div>
  );
}

export default App;
