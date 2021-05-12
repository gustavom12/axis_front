import React from "react";
import { useState } from "react";
import { HomeworkDone, QuestionsAnswer } from "../../interfaces/homeworkDone";
function AddNote({
  name,
  setHomeworkDone,
  question_answer,
  homeworkDone,
}: {
  name: string;
  homeworkDone: HomeworkDone;
  setHomeworkDone: any;
  question_answer: QuestionsAnswer;
}) {
  const [height, setHeight] = useState("30px");
  const correctQA = (isCorrect: string) => {
    let newQA = homeworkDone.questions_answers.map((el) =>
      el === question_answer ? { ...question_answer, isCorrect } : el
    );
    setHomeworkDone({ ...homeworkDone, questions_answers: newQA });
  };
  return (
    <div className="addNote mt-2">
      <div className="w-75 boxShadow mx-auto py-4 px-3" style={{}}>
        {question_answer.isCorrect === "none" ? (
          <h5 className="fw-bold text-center">
            ¿La respuesta de {name} es correcta?
          </h5>
        ) : (
          <h5 className="fw-bold text-center">
            La respuesta de {name} es{" "}
            {question_answer.isCorrect === "correct"
              ? "correcta"
              : question_answer.isCorrect === "incorrect"
              ? "incorrecta"
              : "regular"}
          </h5>
        )}
        <div className="d-flex justify-content-around w-75 mx-auto">
          <input
            type="radio"
            required
            name={question_answer._id}
            style={{ height: "0", width: "0" }}
            id={question_answer._id + "1"}
            checked={question_answer.isCorrect === "correct" ? true : false}
            onChange={()=>{}}
          />
          <label
            className={`icon correct flex fas fa-check ${
              question_answer.isCorrect === "correct" ? "active" : null
            }`}
            htmlFor={question_answer._id + "1"}
            onClick={() => correctQA("correct")}
          ></label>
          <input
            type="radio"
            required
            name={question_answer._id}
            id={question_answer._id + "2"}
            style={{ height: "0", width: "0" }}
            checked={question_answer.isCorrect === "medium" ? true : false}
            onChange={()=>{}}
          />
          <label
            className={`icon medium flex ${
              question_answer.isCorrect === "medium" ? "active" : null
            }`}
            htmlFor={question_answer._id + "2"}
            onClick={() => correctQA("medium")}
          >
            {" "}
            <span className="lineBar"></span>{" "}
          </label>
          <input
            type="radio"
            required
            style={{ height: "0", width: "0" }}
            name={question_answer._id}
            id={question_answer._id + "3"}
            onChange={()=>{}}
            checked={question_answer.isCorrect === "incorrect" ? true : false}
          />
          <label
            className={`icon incorrect flex fas fa-times ${
              question_answer.isCorrect === "incorrect" ? "active" : null
            }`}
            htmlFor={question_answer._id + "3"}
            onClick={() => correctQA("incorrect")}
          ></label>
        </div>
      </div>
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
          let newQA = homeworkDone.questions_answers.map((el) =>
            el === question_answer
              ? { ...question_answer, correction: value }
              : el
          );
          setHomeworkDone({ ...homeworkDone, questions_answers: newQA });
        }}
      />
    </div>
  );
}
export default AddNote;
