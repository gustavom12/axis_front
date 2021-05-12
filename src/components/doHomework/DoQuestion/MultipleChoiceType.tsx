import React from "react";
function MultipleChoiceType({ question, setAnswers,answers }: { question: any,setAnswers:any,answers:any }) {
  return (
    <div className="options mt-2 mx-2 ">
      {question.answers.map((answer: any, i: number) => (
        <div
          key={i}
          className="d-flex justify-content-start "
          style={{ alignItems: "flex-start" }}
        >
          <input
            className="form-check-input mx-2 "
            type="radio"
            required
            name={question.questionNumber}
            style={{
              height: "22px",
              width: "22px",
              transition: "linear all 0.2s",
              position: "relative",
              top: "-4px"
            }}
            value={`${answer.number}`}
            onChange={(e:any)=>{
              const clone = answers
              clone[answers.indexOf(question)].answer = JSON.stringify({
                optionNumber: e.target.value,
                isCorrect: answer.isCorrect,
                text: answer.text
              })
              setAnswers([...clone])
            }}
          />
          <h6 className="text-serif" style={{fontSize: "18px", fontWeight:500}}> {answer.text} </h6>
        </div>
      ))}
    </div>
  );
}
export default MultipleChoiceType;
