import { useMutation } from "@apollo/client";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import QuizQueries from "../../graphqueries/quiz";
import Message from "../a_mini_components/message";
import TextHover from "../a_mini_components/textOnHover";
import "./CreateQuiz.sass";
import QuizPage from "./quizPage/QuizPage";
import SuccessfulUpload from "./successfulUpload";

function CreateQuiz() {
  const [errorMessage, setErrorMessage] = useState("");
  const user = useSelector((store: any) => store.user.user);
  const [createQuiz] = useMutation(QuizQueries.createQuiz);
  const [Quiz, setQuiz] = useState({
    imagePresentation: "",
    dificulty: "normal",
    title: "Quiz title",
    type: "simple_Quiz",
    teacher: null,
    description: "",
    pages: [
      {
        question: [],
        type: "multipleChoice",
        Number: 1,
        options: [
          {
            value: "Option 1",
            isCorrect: true,
            Number: 1,
          },
          {
            value: "Option 2",
            isCorrect: false,
            Number: 2,
          },
          {
            value: "Option 3",
            isCorrect: false,
            Number: 3,
          },
        ],
      },
    ],
  });
  const [UploadDiv, setUploadDiv] = useState(false);
  const [Loading, setLoading] = useState(false)
  const onsubmit = (e: any) => {
    e.preventDefault();
    if (!user._id) {
      setErrorMessage(
        `No tienes los permisos necesarios para realizar esta acción`
      );
      setTimeout(() => {
        setErrorMessage("");
      }, 4000);
      return;
    }
    if (user.userType !== "teacher") {
      setErrorMessage(
        `No tienes los permisos necesarios para realizar esta acción`
      );
      setTimeout(() => {
        setErrorMessage("");
      }, 4000);
      return;
    }
    let error = false;
    Quiz.pages.forEach((page) => {
      if (page.question.length === 0) {
        setErrorMessage(
          `La página ${page.Number} debe tener al menos un INPUT`
        );
        setTimeout(() => {
          setErrorMessage("");
        }, 3500);
        error = true;
      }
    });
    if (error) return;
    const clone = {...Quiz}
    clone.teacher = user._id
    setUploadDiv(true)
    setLoading(true)
    createQuiz({ variables: { Quiz:clone } })
      .then((data: any) => {
        setLoading(false)
      })
      .catch((err) => console.log({ err }));
  };
  return (
    <>
      <form onSubmit={onsubmit}>
        <header className="">
          <div className="d-flex">
            {Quiz.imagePresentation !== "" ? (
              <img
                src={Quiz.imagePresentation}
                className="img my-auto"
                alt=""
              />
            ) : (
              <div className="img flex my-auto ">
                <i className="far fa-image"></i>
              </div>
            )}
            <div className="d-flex flex-column w-75">
              <input
                type="text"
                required
                value={Quiz.title}
                className="text-white fs-2 inputMinimalist title fw-bold"
                onChange={(e) => {
                  // e.target.style.width = `${e.target.scrollWidth}px`;
                  e.target.style.height = "auto";
                  e.target.style.height = e.target.scrollHeight + "px";
                  setQuiz({ ...Quiz, title: e.target.value });
                }}
              />
              <textarea
                placeholder="Description (Opcional)"
                className="inputMinimalist text-serif"
                style={{
                  height: "33px",
                  width: "100%",
                  position: "relative",
                  top: "-4px",
                  color: "#ddd",
                }}
                value={Quiz.description}
                onChange={(e) => {
                  const scrollHeight = e.target.scrollHeight - 2;
                  e.target.style.height = `${scrollHeight + 3}px`;
                  e.target.style.width = `${e.target.scrollWidth}px`;
                  setQuiz({ ...Quiz, description: e.target.value });
                }}
                maxLength={185}
              />
              <div className="inline-flex mr-auto">
                <h6 className="text-white my-auto mx-2">Dificulty:</h6>
                <i
                  className="fas fs-5 fa-star mx-1 HoverFather flex cursor-pointer"
                  style={{
                    transition: "color linear .3s",
                    color: `${
                      Quiz.dificulty === "easy" ? "#10ff30" : "#04610c"
                    }`,
                  }}
                  onClick={() => {
                    setQuiz({ ...Quiz, dificulty: "easy" });
                  }}
                >
                  <TextHover message="Easy (5exp X question)" />
                </i>
                <i
                  className="fas fs-5 fa-star mx-1 HoverFather flex cursor-pointer"
                  style={{
                    transition: "color linear .3s",
                    color: `${
                      Quiz.dificulty === "normal" ? "#04fbff" : "#045658"
                    }`,
                  }}
                  onClick={() => {
                    setQuiz({ ...Quiz, dificulty: "normal" });
                  }}
                >
                  <TextHover message="Normal (7exp X question)" />
                </i>
                <i
                  style={{
                    transition: "color linear .3s",
                    color: `${
                      Quiz.dificulty === "hard" ? "#ff0000" : "#300101"
                    }`,
                  }}
                  className="fas fs-5 fa-star mx-1 HoverFather flex cursor-pointer"
                  onClick={() => {
                    setQuiz({ ...Quiz, dificulty: "hard" });
                  }}
                >
                  <TextHover message="Hard (10exp X question) " />
                </i>
              </div>
            </div>
          </div>
        </header>
        <section className="createQuiz">
          <div className="pages w-100" style={{ marginTop: "60px" }}>
            {Quiz?.pages?.map((page, i) => (
              <QuizPage page={page} Quiz={Quiz} setQuiz={setQuiz} key={i} />
            ))}
          </div>
          <div className="d-flex justify-content-between w-25 mx-auto">
            <i
              className="fas fa-plus addPage flex mx-auto HoverFather"
              onClick={() => {
                setQuiz({
                  ...Quiz,
                  pages: [
                    ...Quiz.pages,
                    {
                      type: "multipleChoice",
                      question: [],
                      Number:
                        Quiz.pages[Quiz.pages.length - 1]?.Number + 1 || 0,
                      options: [
                        {
                          value: "Option 1",
                          isCorrect: true,
                          Number: 1,
                        },
                        {
                          value: "Option 2",
                          isCorrect: false,
                          Number: 2,
                        },
                        {
                          value: "Option 3",
                          isCorrect: false,
                          Number: 3,
                        },
                      ],
                    },
                  ],
                });
              }}
            >
              <TextHover message="Añade otra página" margin="0 260px 0 0" />
            </i>
            <i
              className="addPage flex mx-auto HoverFather"
              onClick={() => {
                //aún no disponible
                return;
                // setQuiz({
                //   ...Quiz,
                //   pages: [
                //     ...Quiz.pages,
                //     {
                //       question: [],
                //       type: "onlyExplain",
                //       Number:
                //         Quiz.pages[Quiz.pages.length - 1]?.Number + 1 || 0,
                //       options: [
                //         {
                //           value: "Option 1",
                //           isCorrect: true,
                //           Number: 1,
                //         },
                //         {
                //           value: "Option 2",
                //           isCorrect: false,
                //           Number: 2,
                //         },
                //         {
                //           value: "Option 3",
                //           isCorrect: false,
                //           Number: 3,
                //         },
                //       ],
                //     },
                //   ],
                // });
              }}
            >
              <h2
                className="fw-bold text-serif fs-1"
                style={{ position: "relative", top: "5px", right: "5px" }}
              >
                T
              </h2>
              <TextHover message="Añade una página solo explicativa" />
            </i>
          </div>
          <div className="flex submitContainer">
            <button
              style={{ width: "400px" }}
              type="submit"
              className="my-4 fw-bold fs-4 mx-auto btn-lightblue"
            >
              Subír Quiz
            </button>
          </div>
        </section>
      </form>
      <Message message={errorMessage} />
      {UploadDiv ? <SuccessfulUpload loading={Loading} /> : null}
    </>
  );
}
export default CreateQuiz;
