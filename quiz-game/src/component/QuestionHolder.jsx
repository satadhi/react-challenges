import React from "react";

function QuestionHalder({ qNo, question, options, handlerAnswer }) {
  return (
    <section>
      <h2>Q: {question}</h2>
      <div className="grid grid-cols-2 gap-6 place-items-center">
        {options.map((ele) => (
          <div
            className="back bg-slate-400 p-5 rounded-full"
            onClick={() => handlerAnswer(ele, qNo)}
          >
            {ele}
          </div>
        ))}
      </div>
    </section>
  );
}

export default QuestionHalder;
