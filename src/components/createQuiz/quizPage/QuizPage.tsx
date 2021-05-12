import React from "react";
import { useState } from "react";
import Message from "../../a_mini_components/message";
import TextHover from "../../a_mini_components/textOnHover";
import AddInputsBtns from "./AddInputsBtns";
import OptionQuiz from "./option";
import "./QuizPage.sass";
import QuizQuestions from "./QuizQuestion";
function QuizPage({
  page,
  Quiz,
  setQuiz,
}: {
  page: any;
  Quiz: any;
  setQuiz: any;
}) {
  const [errorMessage, setErrorMessage] = useState("");
  const [preWatch, setPreWatch] = useState(false);
  return (
    <div className="quizPage mx-auto">
      <div
        style={{ height: "0", alignItems: "center" }}
        className="d-flex justify-content between"
      >
        {!preWatch ? (
          <i
            className="fs-2 fas fa-eye mr-auto cursor-pointer HoverFather"
            onClick={() => {
              setPreWatch(true);
            }}
            style={{
              position: "relative",
              top: "25px",
              left: "15px",
            }}
          >
            <TextHover message="Previsualizar página" margin="" />
          </i>
        ) : (
          <i
            className="fs-2 fas fa-eye-slash mr-auto cursor-pointer HoverFather"
            onClick={() => {
              setPreWatch(false);
            }}
            style={{
              position: "relative",
              top: "25px",
              left: "15px",
            }}
          >
            <TextHover message="Previsualizar página" margin="" />
          </i>
        )}
        <h2
          className="fs-2 fw-bold text-danger ml-auto  cursor-pointer HoverFather"
          style={{
            position: "relative",
            top: "20px",
            right: "10px",
          }}
          onClick={() => {
            const clone = { ...Quiz };
            clone.pages = clone.pages.filter((pag: any) => pag !== page);
            setQuiz({ ...clone });
          }}
        >
          X
          <TextHover message="Eliminar página" margin="" />
        </h2>
      </div>
      <div className="quizPagePadding">
        <div className="flex">
          <h2 className="fs-5 inputMinimalist text-center mx-auto fw-bold">
            {Quiz.title}
          </h2>
        </div>
        <div className="flex pagesProgressBars mt-2">
          {Quiz.pages.map((page: any, i: number) => (
            <div className="pageProgressBar" key={i}></div>
          ))}
        </div>
        {!preWatch ? (
          <>
            <AddInputsBtns page={page} Quiz={Quiz} setQuiz={setQuiz} />
            {page.type === "multipleChoice" ? (
              <div
                className="addOption flex mx-auto HoverFather"
                onClick={() => {
                  const clone = { ...Quiz };
                  const thisPage = clone.pages[clone.pages.indexOf(page)];
                  thisPage.options.push({
                    value: `Option ${
                      thisPage.options[thisPage.options.length - 1]?.Number +
                        1 || 1
                    } `,
                    isCorrect: false,
                    Number:
                      thisPage.options[thisPage.options.length - 1]?.Number +
                        1 || 1,
                  });
                  setQuiz({ ...clone });
                }}
              >
                <i className="fas fa-plus flex mx-auto " />
                <TextHover message="añadir opción" />
              </div>
            ) : null}
          </>
        ) : null}
        <QuizQuestions
          page={page}
          Quiz={Quiz}
          setQuiz={setQuiz}
        />
        {page.type === "multipleChoice" ? (
          <div className="options">
            {page.options.map((option: any, i: any) => (
              <OptionQuiz
                page={page}
                Quiz={Quiz}
                setQuiz={setQuiz}
                option={option}
                key={i}
                preWatch={preWatch}
              />
            ))}
          </div>
        ) : null}
      </div>
      <div className="p-absolute mt-auto goNext d-flex justify-content-around ">
        <div
          className="flex fw-bold text-serif btn-back"
          onClick={() => {
            setErrorMessage(
              "Este botón solo funciona para previsualizar la vista del usuario"
            );
            setTimeout(() => {
              setErrorMessage("");
            }, 2000);
          }}
        >
          Back
        </div>
        <div
          className="btn-lightblue fw-bold text-serif flex"
          onClick={() => {
            setErrorMessage(
              "Este botón solo funciona para previsualizar la vista del usuario"
            );
            setTimeout(() => {
              setErrorMessage("");
            }, 2000);
          }}
        >
          Check
        </div>
      </div>
      <Message message={errorMessage} />
    </div>
  );
}
export default QuizPage;
