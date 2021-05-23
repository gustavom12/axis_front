import React from "react";
import { useEffect } from "react";
import medal from "./medal-of-honor.svg";
import confetti from "./confetti.svg";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import QuizQueries from "../../../graphqueries/quiz";
function FinishedPage({ Quiz, student }: { Quiz: any, student:String }) {
  const [expWon, setExpWon] = useState({ count: 0 });
  const [correctAnswers, setCorrectAnswers] = useState({ count: 0 });
  const [inCorrectAnswers, setInCorrectAnswers] = useState({ count: 0 });
  const [payEXP] = useMutation(QuizQueries.finishQuiz)
  useEffect(() => {
    if (!Quiz || Quiz.isAlreadyPayed) return;
    let correctAnswers = 0;
    let inCorrectAnswers = 0;
    Quiz.pages.forEach((el: any) => {
      el.isCorrect === true ? (correctAnswers += 1) : (inCorrectAnswers += 1);
    });
    setCorrectAnswers({ count: correctAnswers });
    setInCorrectAnswers({ count: inCorrectAnswers });
    //Exp multiplier is to multiply a correct answer, depending if Quiz´s difficult
    let ExpMultiplier = 5;
    if (Quiz.dificulty === "hard") ExpMultiplier = 10;
    if (Quiz.dificulty === "normal") ExpMultiplier = 7;
    setExpWon({ count: correctAnswers * ExpMultiplier });
    if(!Quiz.isAlreadyPayed){
      payEXP({variables:{ student, doneQuizId: Quiz._id, expWon: correctAnswers * ExpMultiplier }})
        .then((data:any)=>console.log(data.data.finishQuiz))
        .catch((err)=>console.log(err))
    }
  }, [Quiz, payEXP, student]);
  return Quiz?.isAlreadyPayed ? null
  : (
    <div className="darkTrasnparentbg flex flex-column" style={{minHeight: "100vh"}}>
      <div className="bg-white finishedQuiz flex flex-column">
        <div className="confettiContainer">
          <div className="d-flex w-100">
            <img src={confetti} alt="confetti-1" className="confetti" />
            <img src={confetti} alt="confetti-1" className="confetti" />
            <img src={confetti} alt="confetti-1" className="confetti" />
            <img src={confetti} alt="confetti-1" className="confetti" />
            <img src={confetti} alt="confetti-1" className="confetti" />
          </div>
        </div>
        <div className="medalContainer">
          <img src={medal} alt="medal" className="medal mx-auto " />
        </div>
        <div className="finishedPageText w-100">
          <h4 className="text-serif2 text-center m-0 mt-3 px-2">
            Felicidades! haz completado{" "}
            <span className="text-main">"{Quiz?.title}"</span> con éxito! <br />
            Haz ganado
            <span>
              <i className="fas fa-star text-yellow"></i>
              <span className="text-main">{expWon.count}</span>EXP!
            </span>{" "}
            Por completar {correctAnswers.count}/{correctAnswers.count + inCorrectAnswers.count}{" "}
            preguntas corréctamente
          </h4>

          <div onClick={()=>{window.location.href = "/home"}} className="flex mt-5">
            <button className="btn-lightblue text-serif2 mx-auto fs-3 ">
              Volver al Inicio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FinishedPage;
