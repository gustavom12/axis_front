import React from "react";
import { useEffect } from "react";
import TextHover from "../../a_mini_components/textOnHover";
import Question from "./Question";
import "./QuestionsAnswers.sass";
import OnlyText from "./TextOnly";
function QuestionsAnswers({
  register,
  errors,
  questions,
  setQuestions,
}: {
  questions: any;
  setQuestions: any;
  register: any;
  errors: any;
}) {
  const createQuestion = (questionNumber: number) => {
    return {
      title: "",
      image: undefined,
      questionNumber,
      type: "textLong",
      answers: undefined
    };
  };
  useEffect(() => {
    setQuestions([{ ...createQuestion(1) }]);
  }, [setQuestions]);
  return (
    <>
      <div className="w-100 questionsAnswers ">
        {questions.map((question: any, i: any) => (
          question.type !== "onlyText" ?
          <Question
            key={i}
            question={question}
            questions={questions}
            setQuestions={setQuestions}
            errors={errors}
            register={register}
          ></Question> :
          <OnlyText
            key={i}
            question={question}
            questions={questions}
            setQuestions={setQuestions}
          />
        ))
        }
      </div>
      {/* ------------- ADD MORE BUTTONS --------------- */}
      <div className="d-flex w-100 mt-3 buttons">
        <i
          onClick={() => {
            const number = questions[questions.length - 1].questionNumber + 1;
            const newQuestion = createQuestion(number);
            setQuestions([...questions, newQuestion]);
          }}
          className="fas fa-plus addOther mr-auto flex HoverFather btn-blue2"
        >
          <TextHover message="Añade otra pregunta" />
        </i>
        <button className="check btn btn-blue2 HoverFather "
          type="button"
          onClick={()=>{
            const number = questions[questions.length - 1].questionNumber + 1;
            setQuestions([...questions, {
              image: undefined,
              questionNumber: number,
              title: "",
              type: "onlyText"
            }]);
          }}
          >
          <TextHover
            message="Añade un texto explicativo"
            margin="0 0 0 100px"
          />
          <h2 className="fw-bold ">T</h2>
        </button>
        <button
          type="submit"
          className="check flex ml-auto HoverFather btn btn-blue2 "
        >
          <i className="fas fa-check ml-auto flex">
            <TextHover message="Guardar la Tarea" margin="0 320px 0 0" />
          </i>
        </button>
      </div>
    </>
  );
}
export default QuestionsAnswers;
