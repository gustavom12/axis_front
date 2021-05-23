import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import QuizQueries from "../../graphqueries/quiz";
import Loader from "../loader/loader";
import "./DoQuiz.sass";
import DoQuizPage from "./doQuizPage/doQuizPage";
import FinishedPage from "./doQuizPage/finishedPage";
import PagesProgressBar from "./pagesProgressBar/PagesProgressBar";

function DoQuiz() {
  const params = new URLSearchParams(document.location.search.substring(1));
  const user = useSelector((store: any) => store.user.user);
  const history = useHistory();
  const id = params.get("id");
  const index = {
    count: parseInt(params.get("i") || "0"),
  };
  const userEmail: any = localStorage.getItem("_us");
  const { data, loading } = useQuery(QuizQueries.getQuiz, {
    variables: { id, userEmail: JSON.parse(userEmail).email },
  });
  const [doneQuiz, setDoneQuiz] = useState<any>();
  const [selectedOption, setSelectedOption] = useState<any>();
  const [submitMessage, setsubmitMessage] = useState("");
  const [doQuiz] = useMutation(QuizQueries.doQuiz);
  const [finishedAndHaveToPayEXP, setFinishedAndHaveToPayEXP] = useState(false);
  useEffect(() => {
    if (!data) return;
    if (!data.getQuiz.actualPage) {
      setDoneQuiz({ ...data.getQuiz });
    }
  }, [data]);
  //verify is Quiz is finished and if have to pay EXP
  useEffect(() => {
    if(!doneQuiz)return;
    let finishedQuestions = 0;
    doneQuiz.pages.forEach((el: any) => {
      if (el.alreadyDone === true) finishedQuestions += 1;
    });
    if (finishedQuestions === doneQuiz.pages.length && !doneQuiz?.isAlreadyPayed){
      //send to backend last update
      const Quiz = {
        ...doneQuiz,
        student: user._id,
        actualPage: index.count,
      };
      doQuiz({
        variables: {
          Quiz,
          student: user._id,
          quizId: id,
        },
      })
        .catch((err) => console.log({ err }))
        .then((data: any) => {
          setFinishedAndHaveToPayEXP(true)
        });
    }
  }, [doneQuiz , doQuiz, id, user._id,index.count]);
  return (
    <section className="DoQuiz">
      {loading ? (
        <div className="flex">
          {" "}
          <Loader></Loader>{" "}
        </div>
      ) : (
        <div>
          <div className="top d-flex w-100" style={{ alignItems: "center" }}>
            {/* <i className="fas fa-times fs-2 text-gray x"></i> */}
            <div className="flex mx-auto flex-column ">
              <h1 className="text-serif2 fs-5 text-gray text-center text-center flex">
                {doneQuiz?.title}
              </h1>
              <PagesProgressBar Quiz={doneQuiz} actualPageIndex={index.count} />
            </div>
          </div>
          {doneQuiz?.pages && (
            <DoQuizPage
              page={doneQuiz?.pages[index.count]}
              doneQuiz={doneQuiz}
              setDoneQuiz={setDoneQuiz}
              setSelectedOption={setSelectedOption}
              submitMessage={submitMessage}
            />
          )}
          <div className="p-absolute mt-auto goNext d-flex justify-content-around ">
            <div
              className="flex fw-bold text-serif btn-back"
              onClick={() => {
                if (index.count > 0) {
                  window.scrollTo(0, 0);
                  history.push(`/quiz?id=${id}&i=${index.count - 1}`);
                  // history.go(0);
                }
              }}
            >
              Back
            </div>
            <div
              className={`resultMessage text-serif2 flex text-center fs-5
                ${submitMessage === "success" && "success"}
                ${submitMessage === "none" && "error"}
                ${submitMessage === "error" && "error"}
                `}
            >
              {submitMessage === "success" ? (
                <i className="fas fa-check mx-2 success flex fs-5"></i>
              ) : (
                <i className="fas fa-times mx-2 error flex fs-3"></i>
              )}
              {submitMessage === "success" && "Well done!"}
              {submitMessage === "error" &&
                "Incorrect! continue with next option"}
              {submitMessage === "none" &&
                "Debes seleccionar una opción para poder continuar"}
            </div>
            <div
              className="btn-lightblue fw-bold text-serif flex"
              onClick={() => {
                if (
                  doneQuiz?.pages[index.count]?.alreadyDone &&
                  submitMessage === ""
                ) {
                  //if page is already done previusly
                  window.scrollTo(0, 0);
                  history.push(
                    `/quiz?id=${id}&i=${
                      doneQuiz.pages.length > index.count + 1
                        ? index.count + 1
                        : index.count
                    }`
                  );
                  // history.go(0);
                }
                if (submitMessage === "success" || submitMessage === "error") {
                  //if page is done just now
                  setsubmitMessage("");
                  const Quiz = {
                    ...doneQuiz,
                    student: user._id,
                    actualPage: index.count,
                  };
                  doQuiz({
                    variables: {
                      Quiz,
                      student: user._id,
                      quizId: id,
                    },
                  })
                    .catch((err) => console.log({ err }))
                    .then((data: any) => {
                      window.scrollTo(0, 0);
                      history.push(
                        `/quiz?id=${id}&i=${
                          doneQuiz.pages.length > index.count + 1
                            ? index.count + 1
                            : index.count
                        }`
                      );
                    });
                }
                if (!doneQuiz?.pages[index.count]?.alreadyDone) {
                  if (!selectedOption) {
                    setsubmitMessage("none");
                    setTimeout(() => {
                      setsubmitMessage("");
                    }, 3000);
                    return;
                  }
                  if (selectedOption?.isCorrect) {
                    setsubmitMessage("success");
                    const pagesClone = doneQuiz.pages.map((el: any) => {
                      if (el === doneQuiz.pages[index.count]) {
                        return {
                          ...doneQuiz.pages[index.count],
                          alreadyDone: true,
                          isCorrect: true,
                        };
                      } else return el;
                    });
                    setDoneQuiz({ ...doneQuiz, pages: pagesClone });
                  } else {
                    setsubmitMessage("error");
                    const pagesClone = doneQuiz.pages.map((el: any) => {
                      if (el === doneQuiz.pages[index.count]) {
                        return {
                          ...doneQuiz.pages[index.count],
                          alreadyDone: true,
                          isCorrect: false,
                        };
                      } else return el;
                    });
                    setDoneQuiz({ ...doneQuiz, pages: pagesClone });
                  }
                }
              }}
            >
              {submitMessage === "error" ||
              submitMessage === "success" ||
              doneQuiz?.pages[index.count]?.alreadyDone
                ? "Continue"
                : "Check"}
            </div>
          </div>
        </div>
      )}
      {finishedAndHaveToPayEXP && (
        <FinishedPage student={user._id} Quiz={doneQuiz} />
      )}
    </section>
  );
}
export default DoQuiz;
