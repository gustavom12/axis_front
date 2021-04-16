import React, { useEffect } from "react";
import MultipleChoice from "./multipleChoiceMini/multipleChoice";
import TextHover from "../../a_mini_components/textOnHover";

function MultipleChoicePage({
  register,
  errors,
  questions,
  setQuestions,
}: {
  questions: any;
  setQuestions: any;
  register: any;
  errors: any;
  config: any;
}) {
  const createQuestion = (questionNumber: number) => {
    return {
      title: "",
        image: undefined,
        questionNumber,
      answers: [
        {
          isCorrect: true,
          text: "answer",
          number: 1,
        },
        {
          isCorrect: false,
          text: "answer",
          number: 2,
        },
      ],
    };
  };
  useEffect(() => {
    setQuestions([{...createQuestion(1)}]);
  }, [setQuestions]);

  return (
    <>
      {questions?.map((question:any, i:any) => (
        <MultipleChoice
          errors={errors}
          register={register}
          question={question}
          key={i}
          setQuestions={setQuestions}
          questions={questions}
        />
      ))}
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
export default MultipleChoicePage;
