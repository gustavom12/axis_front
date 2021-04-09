import React,{} from "react";
import TextHover from "../../../a_mini_components/textOnHover";
import "./multipleChoice.sass";

function MultipleChoice({
  register,
  question,
  setQuestions,
  questions
}: {
  register: any;
  question: any;
  className?: string;
  setQuestions: any;
  questions: any
}) {
  const questionNumber = question.questionNumber

  return (
    <div className="multipleChoice mt-3">
      {/* ---------------------DELETE QUESTION ---------------- */}
      <i onClick={()=>{
        let questionsClone = questions
        questionsClone.splice(questions.indexOf(question),1)
        setQuestions([...questionsClone])
      }} className="fas fa-trash delete HoverFather">
        <TextHover message="Elimina esta pregunta" margin="0"/>
      </i>
      {/* ------------------- ENDSS DELETE QUESTION ---------------- */}
      <div className="input-group mb-2">
        <input
          required
          ref={register({
            required: {
              value: true,
              message: `La pregunta nro ${questionNumber}, no puede estar vacía`,
            },
          })}
          name={"pregunta" + questionNumber}
          type="text"
          className="form-control w-100 inputQuestion"
          placeholder={"Pregunta nro" + questionNumber}
        />
      </div>
      {question.answers.map((option:any,i:number)=>
        <Option
          questions={questions}
          setQuestions={setQuestions}
          question={question}
          optionIndex={i}
          key={i}
        />
        )}

        {/* -----------ADDNEW ANSWER------------- */}
      <div className="flex HoverFather addOption mx-auto mt-2"
        onClick={()=>{
          let questionsClone = questions
          //add a new answer/option
          const number = question.answers.length + 1
          questionsClone[questions.indexOf(question)].answers.push(
            {
              isCorrect: false,
              text: "answer",
              number
            })
          setQuestions([...questionsClone])
        }}
      >
        <i className="fas fa-plus"></i>
        <TextHover message="Añade otra opción" />
      </div>
    </div>
  );
}

export default MultipleChoice;

function Option({
  question,
  optionIndex,
  questions,
  setQuestions,
} : {
  question: any;
  questions: [any]
  optionIndex: number;
  setQuestions: any;
}) {
  return (
    <div className="flex mt-3">
      <input
        className="form-check-input mx-2"
        type="radio"
        name={ "pregunta:" + question.questionNumber}
        checked={question.answers[optionIndex].isCorrect}
        onChange={(e)=>{
          const checked = e.target.checked
          //Makes input value to true and other inputs values to false
          let questionsClone = questions
          console.log(questionsClone,  )
          questionsClone[questions.indexOf(question)].answers.forEach((el:any) => {
            if(el.number === optionIndex + 1){
              el.isCorrect = checked
              return
            }
            el.isCorrect = !checked
          });
          setQuestions([...questionsClone])
          }
        }
      />
      <input
        required
        value={question.answers[optionIndex].text}
        type="text"
        className="form-control inputAnswer "
        placeholder="Respuesta"
        onChange={(e)=>{
          let newText = e.target.value
          let clone = question
          clone[optionIndex].answerText = newText
          // setOptions([...clone])
          }
        }
      />
    </div>
  );
}
