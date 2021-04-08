import React, { useState } from "react";
import MultipleChoice from "./multipleChoiceMini/multipleChoice";
import TextHover from "../../a_mini_components/textOnHover";

function MultipleChoicePage({register}:{register:any}) {
  const createQuestion = (questionNumber:number)=>{
    return {
      title: "Question?",
      questionNumber,
      answers: [{
        isCorrect: true,
        text: "answer",
        number: 1
      },
      {
        isCorrect: false,
        text: "answer",
        number: 2
      }
      ]
    }
  }
  const [questions, setQuestions] = useState([createQuestion(1)])
  return (
    <>
    {questions.map((question) => (
          <MultipleChoice
            register={register}
            question={question}
            key={question.questionNumber}
            setQuestions={setQuestions}
            questions={questions}
          />
        ))}
        <div className="d-flex w-100 mt-3 buttons">
        <i
          onClick={() => {
            const number = questions[questions.length - 1].questionNumber + 1;
            const newQuestion = createQuestion(number)
            setQuestions([...questions, newQuestion]);
          }}
          className="fas fa-plus addOther mr-auto flex HoverFather btn-blue2"
        >
          <TextHover message="Añade otra pregunta" />
        </i>
        <button type="submit" className="check flex ml-auto HoverFather btn btn-blue2 ">
          <i className="fas fa-check ml-auto flex">
          <TextHover message="Guardar la Tarea" margin="0 0 0 320px"/>
          </i>
        </button>
        </div>
    </>
  );
}
export default MultipleChoicePage;
