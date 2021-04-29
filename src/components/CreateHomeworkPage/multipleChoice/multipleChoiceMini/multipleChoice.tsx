import React, { useState, useRef} from "react";
import { useEffect } from "react";
import TextHover from "../../../a_mini_components/textOnHover";
import Loader from "../../../loader/loader";
import UploadImage from "../../uploadImage/uploadImage";
import "./multipleChoice.sass";
import Option from "./option"
function MultipleChoice({
  register,
  question,
  setQuestions,
  questions,
  errors,
}: {
  register: any;
  question: any;
  className?: string;
  setQuestions: any;
  questions: any;
  errors: any;
}) {
  const questionNumber = question.questionNumber;
  const [imageUrl, setImageUrl] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const questionRef = useRef(question)
  useEffect(() => {
    //Changes url of image in questions
    if (!imageUrl) return;
    setQuestions((questionsClone: any) => {
      questionsClone[questionsClone.indexOf(questionRef.current)].image = imageUrl;
      console.log({questionsClone})
      return [...questionsClone];
    });
  }, [imageUrl,setQuestions]);
  return (
    <div className="multipleChoice mt-3">
      {/* ---------------------DELETE QUESTION ---------------- */}
      <i
        onClick={() => {
          let questionsClone = questions;
          questionsClone.splice(questions.indexOf(question), 1);
          setQuestions([...questionsClone]);
        }}
        className="fas fa-trash delete HoverFather"
      >
        <TextHover message="Elimina esta pregunta" margin="0" />
      </i>
      {/* ------------------- ENDSS DELETE QUESTION ---------------- */}
      {/* -------------------- INSERT IMAGE--------------------------- */}
      <div className="w-100 d-flex justify-content-end">
        <UploadImage
          setUrl={setImageUrl}
          id={`imageNumber${questionNumber}`}
          setLoading={setLoading}
        />
        <label
          htmlFor={`imageNumber${questionNumber}`}
          className="far fa-image flex"
        ></label>
      </div>
      {/* ----------------------ENDS INSERT IMAGE--------------------- */}
      <div className="input-group mb-2">
        <input
          required
          ref={register({
            required: {
              value: true,
              message: `La pregunta nro ${questionNumber}, no puede estar vacía`,
            },
            minLength: {
              value: 8,
              message: "La pregunta no puede tener menos de 8 carácteres",
            },
          })}
          value={questions[questions.indexOf(question)].title}
          name={"pregunta" + questionNumber}
          type="text"
          className="form-control w-100 inputQuestion"
          placeholder={"Pregunta nro" + questionNumber}
          onChange={(e) => {
            let questionsClone = questions;
            questionsClone[questions.indexOf(question)].title = e.target.value;
            setQuestions([...questionsClone]);
          }}
        />
      </div>
      <h6 className="text-center mx-auto text-danger">
        {errors["pregunta" + questionNumber]?.message}
      </h6>
      {questions[questions.indexOf(question)].image ? (
        <div className="flex w-100" key={1}>
          {loading ? (
            <Loader />
          ) : (
            <img
              src={questions[questions.indexOf(question)].image}
              className="mx-auto"
              alt=""
            />
          )}
        </div>
      ) : null}
      {question?.answers?.map((option: any, i: number) => (
        <Option
          questions={questions}
          setQuestions={setQuestions}
          question={question}
          optionIndex={i}
          key={i}
        />
      ))}
      {/* -----------ADDNEW ANSWER------------- */}
      <div
        className="flex HoverFather addOption mx-auto mt-2"
        onClick={() => {
          let questionsClone = questions;
          //add a new answer/option
          const number = question.answers.length + 1;
          questionsClone[questions.indexOf(question)].answers.push({
            isCorrect: false,
            text: "answer",
            number,
          });
          setQuestions([...questionsClone]);
        }}
      >
        <i className="fas fa-plus"></i>
        <TextHover message="Añade otra opción" />
      </div>
    </div>
  );
}

export default MultipleChoice;


