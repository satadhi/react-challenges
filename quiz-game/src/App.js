import { useState } from "react";
import "./App.css";
import QuestionHalder from "./component/QuestionHolder";
import data from "./data/quiz";

function App() {
  let quizData = data;
  let totalQuestion = quizData.length;
  let [qNo, setQNo] = useState(0);
  let [answer, setAnswer] = useState([]);

  function handleAnswer(userAnswer, questionNo) {
    // console.log("handle action working", userAnswer);
    setAnswer((ans) => [...ans, userAnswer]);
    setQNo(qNo + 1);
  }

  if (answer.length === totalQuestion) {
    let totalRightAns = 0;

    let elements = [];

    for (let i = 0; i < quizData.length; i++) {
      if (quizData[i].answer === answer[i]) {
        totalRightAns++;

        elements.push(
          <div className="text-green-600">{quizData[i].question}</div>
        );
      } else {
        elements.push(
          <div className="text-red-600">{quizData[i].question}</div>
        );
      }
    }

    return (
      <section className="h-screen flex flex-col items-center gap-4">
        <h1>Congratulation !</h1>
        <h2>
          You have answered{" "}
          <span
            className="font-bold underline
"
          >
            {totalRightAns}
          </span>{" "}
          out of{" "}
          <span
            className="font-bold
"
          >
            {totalQuestion}
          </span>{" "}
          Correctly
        </h2>
        <div className="flex flex-col gap-3">{elements}</div>
      </section>
    );
  }

  return (
    <div className="h-screen flex flex-col items-center gap-4">
      <div className="py-10">
        <h1> Welcome to quiz land</h1>
      </div>
      <QuestionHalder
        qNo={qNo}
        question={quizData[qNo].question}
        options={quizData[qNo].options}
        handlerAnswer={handleAnswer}
      />
    </div>
  );
}

export default App;
