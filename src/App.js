import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];

  const [question, setQuestion] = useState(0);
  const [score, setScore] = useState(false);
  const [num, setNum] = useState(0);

  const handleAnswers = (isCorrect) => {
    if (question < questions.length) {
      setQuestion(question + 1);
    }
    if (question === 3) {
      setScore(true);
    }
    if (isCorrect) {
      setNum(num + 1);
    }
  };

  return (
    <div className="app">
      {/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
      {score ? (
        <div className="score-section">
          You scored {num} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {question + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[question].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[question].answerOptions.map((answer, index) => {
              return (
                <button
                  onClick={() => handleAnswers(answer.isCorrect)}
                  key={index}
                >
                  {answer.answerText}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
