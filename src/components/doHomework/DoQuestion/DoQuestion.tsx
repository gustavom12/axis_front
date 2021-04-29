import React, { useState } from "react";
import "./DoQuestion.sass";
import MultipleChoiceType from "./MultipleChoiceType";
function DoQuestion({
  question,
  setAnswers,
  answers,
}: {
  question: any;
  setAnswers: any;
  answers: any;
}) {
  const [LengthError, setLengthError] = useState("");
  const [heightLong, setHeightLong] = useState("30px")
  const [heightShort, setHeightShort] = useState("30px")
  return (
    <div className="doQuestion bg-white text-left mt-4">
      <h4 className="text-serif fw-bold mb-0 mx-2">{question.title}</h4>
      {question.image ? <img src={question.image} className="mt-3" alt="" /> : null}
      <div className="input">
        {question.type === "textLong" ? (
          <textarea
            required
            className="w-100 form-control mt-2 answer answerLong text-serif"
            placeholder="Texto de ejemplo, respuesta largo..."
            style={{
              height: heightLong,
            }}
            value={question.answer}
            onChange={(e:any)=>{
              setHeightLong(`${e.target.scrollHeight}px`)
              const clone = [...answers]
              clone[answers.indexOf(question)].answer = e.target.value
              setAnswers(clone)
            }}/>
        ) : question.type === "textShort" ? (
          <>
            <textarea
              required
              className="w-100 form-control mt-2 answer answerLong text-serif"
              placeholder="Tu respuesta"
              style={{
                height: heightShort,
              }}
              value={question.answer}
              onChange={(e: any) => {
                if (e.target.value.length >= 100) {
                  setLengthError(
                    "La respuesta no puede tener mas de 100 carácteres"
                  );
                  return
                }
                setLengthError("")
                setHeightShort(`${e.target.scrollHeight}px`)
                const clone = [...answers]
                clone[answers.indexOf(question)].answer = e.target.value
                setAnswers(clone)
              }}
            />
            <p className="text-danger mt-2"> {LengthError} </p>
          </>
        ) : question.type === "number" ? (
          <input
            type="number"
            className="form-control w-25 mt-3 mx-2 mr-auto"
            min={0}
            required
            value={question.answer}
              onChange={(e: any) => {
                const clone = [...answers]
                clone[answers.indexOf(question)].answer = e.target.value
                setAnswers(clone)
              }}
          />
        ) : question.type === "choice" ? (
          <MultipleChoiceType question={question} answers={answers} setAnswers={setAnswers} />
        ) : null}
      </div>
    </div>
  );
}
export default DoQuestion;
