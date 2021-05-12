import React from "react";
import { useState } from "react";
function CorrectMultipleChoice({
  question_answer,
  name,
  setHomeworkDone,
  homeworkDone,
  notModify = false,
}: {
  question_answer: any;
  name?: string;
  setHomeworkDone?: any;
  homeworkDone?: any;
  notModify?: boolean;
}) {
  const userAnswer = JSON.parse(question_answer.answer);
  const [height, setHeight] = useState("30px");
  return (
    <>
      {name
        ? <h5 className="mx-2 fw-bold">Respuesta de {name}:</h5>
        : <h5 className="mx-2 fw-bold">Respuesta:</h5>

      }
      <div
        className="w-100 mx-3 d-flex pb-2 pt-3 px-1"
        style={{
          background: `${userAnswer.isCorrect ? "#73ffb863" : "#ec424263"}`,
          borderRadius: "7px",
          alignItems: "center",
        }}
      >
        <input
          className="form-check-input mx-2 "
          type="radio"
          disabled
          checked
          style={{
            height: "22px",
            width: "22px",
            transition: "linear all 0.2s",
            position: "relative",
            top: "-7px",
          }}
        />
        <h6 className="text-serif fw-bold "> {userAnswer.text} </h6>
      </div>
      <h5 className="mx-2 fw-bold">Opciones:</h5>
      {question_answer.answers.map((option: any, i: number) => (
        <div className="w-100 mx-3 d-flex" style={{}} key={i}>
          <input
            disabled
            className="form-check-input mx-2 "
            type="radio"
            style={{
              height: "22px",
              width: "22px",
              background: `${option.isCorrect ? "#73ffb863" : "#ec424263"}`,
              transition: "linear all 0.2s",
              position: "relative",
              top: "-7px",
            }}
          />
          <h6 className="text-serif fw-bold"> {option.text} </h6>
        </div>
      ))}
      {!notModify ? (
        <textarea
          placeholder="Agregar corrección/explicación (opcional)"
          className="form-control w-100 mx-2 text-serif mt-3"
          style={{
            height: height,
          }}
          value={question_answer.correction}
          onChange={(e: any) => {
            setHeight(`${e.target.scrollHeight + 2}px`);
            const value = e.target.value;
            let newQA = homeworkDone.questions_answers.map((el: any) =>
              el === question_answer
                ? { ...question_answer, correction: value }
                : el
            );
            setHomeworkDone({ ...homeworkDone, questions_answers: newQA });
          }}
        />
      ) :
      <h6 className={`fw-bold text-center`} style={{fontSize:"15px"}}> {userAnswer.correction} </h6>
      }
    </>
  );
}
export default CorrectMultipleChoice;
