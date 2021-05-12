import { useMutation, useQuery } from "@apollo/client";
import React, { useState, useEffect } from "react";
import HomeworkQueries from "../../graphqueries/homework";
import "./DoHomework.sass";
import DoQuestion from "./DoQuestion/DoQuestion";
import { useSelector } from "react-redux";
import Message from "../a_mini_components/message";
import SendHw from "./sendHw";
function DoHomework() {
  const id = window.location.search.replace("?id=", "");
  const { data } = useQuery(HomeworkQueries.GetHomework, {
    variables: { id },
  });
  const user = useSelector((store: any) => store.user.user);
  const [doHomework, { loading, error }] = useMutation(
    HomeworkQueries.doHomework
  )
  const [sendHWDiv, setSendHWDiv] = useState(false);
  const [sendToDatePoints, setSendToDatePoints] = useState(false);
  const [answers, setAnswers] = useState([
    {
      title: "",
      image: { type: String },
      questionNumber: { type: Number, required: true },
      points: { type: Number },
      answers: [
        {
          isCorrect: { type: Boolean },
          text: { type: String },
        },
      ],
    },
  ]);
  const [errorMessage, setErrorMessage] = useState("");
  const onSubmit = (e: any) => {
    if (!user._id) {
      setErrorMessage("Inicia sesión para poder enviar");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      return;
    }
    e.preventDefault();
    const hw = data.getHomework;
    const doneDate = new Date();
    const DoneHomework = {
      title: hw.title,
      description: hw.description,
      doneDate,
      student: user._id,
      teacher: hw.teacher,
      hwType: hw.hwType,
      questions_answers: answers,
      expires_date: hw.expires_date,
      homework: hw._id,
    };
    doHomework({ variables: { homework: DoneHomework } })
      .then((data: any) => {
        setSendHWDiv(true);
        const doneDate = new Date(DoneHomework.doneDate).getTime()
        const expires_date = new Date(DoneHomework.expires_date).getTime()
        if(doneDate - expires_date > 0 ) setSendToDatePoints(true)
      })
      .catch((err: any) => {
        console.log({ err });
      });
  };
  useEffect(() => {
    //is to add "answer " property to every question
    if (!data) return;
    console.log(data)
    let clone: any = [];
    data.getHomework.questions.forEach((el: any) => {
      clone.push(Object.assign({}, el, { answer: "" }));
    });
    setAnswers([...clone]);
  }, [data]);
  return (
    <section className="doHomework">
      <form onSubmit={onSubmit}>
        <div className="head Block text-center">
          <h1 className="fw-bold text-serif">{data?.getHomework?.title}</h1>
          <p className="fs-5 fw-bolder">{data?.getHomework?.description}</p>
        </div>

        <div className="questions">
          {answers.map((question: any, i: number) => (
            <DoQuestion
              key={i}
              question={question}
              setAnswers={setAnswers}
              answers={answers}
            />
          ))}
        </div>
        <div className="w-100 flex mt-2">
          <button
            style={{
              borderRadius: "10px",
              width: "200px",
            }}
            type="submit"
            className="btn px-5 flex btn-blue2 ml-auto mt-2"
          >
            <h5
              className="fw-bold text-serif m-0 d-flex"
              style={{ position: "relative", left: "-10px" }}
            >
              <i
                className="fas fa-check ml-auto flex mx-1 fs-4"
                style={{ position: "relative", top: "-2px" }}
              ></i>
              Enviar
            </h5>
          </button>
        </div>
      </form>
      <Message message={errorMessage} />
      {sendHWDiv ? (
        <SendHw
          loading={loading}
          sendToDatePoints={sendToDatePoints}
          errors={error}
        />
      ) : null}
    </section>
  );
}
export default DoHomework;
