import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import TextHover from "../../a_mini_components/textOnHover";
import Loader from "../../loader/loader";
import Option from "../multipleChoice/multipleChoiceMini/option"
import UploadImage from "../uploadImage/uploadImage";
function Question({
  question,
  register,
  setQuestions,
  questions,
  errors
}: {
  questions: any;
  setQuestions: any;
  question: any;
  register: any;
  errors: any
}) {
  const [inputType, setInputType] = useState("textLong");
  const [imageUrl, setImageUrl] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const questionRef = useRef(question)
  useEffect(() => {
    //Changes url of image in questions
    if (!imageUrl) return;
    setQuestions((questionsClone: any) => {
      questionsClone[questionsClone.indexOf(questionRef.current)].image = imageUrl;
      return [...questionsClone];
    });
  }, [imageUrl,setQuestions]);
  return (
    <div className="questionAnswer bg-white  mt-3">
      {/* ------------------- ENDSS DELETE QUESTION ---------------- */}
      <div className="input-group">
        <textarea
          required
          value={questions[questions.indexOf(question)].title}
          name={"pregunta" + question.questionNumber}
          className="form-control "
          placeholder={"Pregunta"}
          onChange={(e) => {
            let questionsClone = questions;
            questionsClone[questions.indexOf(question)].title =
              e.target.value;
            setQuestions([...questionsClone]);
          }}
        />
        <UploadImage
          setUrl={setImageUrl}
          id={`imageNumber${question.questionNumber}`}
          setLoading={setLoading}
        />
        <label
          htmlFor={`imageNumber${question.questionNumber}`}
          className="far fa-image flex"
        ></label>
        <select
          className="form-select fw-bold text-dark"
          aria-label="Default select example"
          ref={register({
            required: {
              value: true,
              message: "Debes seleccionar un curso",
            },
          })}
          onChange={(e) => {
            setInputType(e.target.value)
            const clone = questions[questions.indexOf(question)]
            clone.type = e.target.value
            if(e.target.value === "choice"){
            clone.answers =
              [{
                isCorrect: true,
                text: "Opción",
                number: 1,
              },
              {
                isCorrect: false,
                text: `Opción` ,
                number: 2,
              },]
            }
            setQuestions([...questions])
          }}
          name="course"
        >
          <option
          value="textLong"
          selected
          >
            Párrafo
          </option>
          <option value="textShort">Respuesta Breve</option>
          <option value="number">Respuesta numérica</option>
          <option value="choice">Multiple Choice</option>
          <option value="verification">Casilla de Verificación</option>
        </select>
      </div>
      {/* -----------IMAGE-------- */}
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
      <div className="input-group w-100">
        {
          inputType === "textLong" ?
            <textarea className="w-100 form-control answerLong " placeholder="Texto de ejemplo, respuesta largo..."/>
            : (
          inputType === "textShort" ?
            <textarea className="w-100 form-control answerShort "
              placeholder="Texto de de ejemplo, respuesta corto... (max: 120 caract)" maxLength={120} />
            : (
          inputType === "number" ?
            <input type="number" placeholder="Ejemplo de Respuesta numérica"
              className="mt-4 mb-2 form-control text-center" name="" id=""/>
            : (
          inputType === "choice" ?
          <>
            <div className="flex w-100 flex-column mt-2">
              {question.answers.map((ans:any,i:number)=>
                <Option
                questions={questions}
                question={question}
                optionIndex={i}
                key={i}
                setQuestions={setQuestions} />
                )}
            </div>
            <div
            className="flex HoverFather addOption mx-auto mt-2"
            onClick={() => {
              let questionsClone = questions;
              //add a new answer/option
              const number = question.answers.length + 1;
              questionsClone[questions.indexOf(question)].answers.push({
                isCorrect: false,
                text: "Opción",
                number,
              });
              setQuestions([...questionsClone]);
            }}
            >
              <i className="fas fa-plus"></i>
              <TextHover message="Añade otra opción" />
            </div>
          </>
          :
            <h3 className="text-danger mx-auto mt-3"> Esta opción aún no está disponible </h3>
          )
          )
          )
        }
        {/* <p
          className="fs-6 mt-3 mx-2 w-100 pb-1"
          style={{ borderBottom: "1px solid #00000020" }}
        >
          Texto de respuesta largo
        </p> */}
      </div>
      <div className="d-flex justify-content-end" style={{height:"0"}}>
        <i
          onClick={() => {
            let questionsClone = questions;
            questionsClone.splice(questions.indexOf(question), 1);
            setQuestions([...questionsClone]);
          }}
          className="fas fa-trash delete HoverFather"
          style={{
            position: "relative",
            top: "-12px",
            height: "0 !important",
          }}
        >
          <TextHover message="Elimina esta pregunta" margin="0" />
        </i>
      </div>
    </div>
  );
}
export default Question;
