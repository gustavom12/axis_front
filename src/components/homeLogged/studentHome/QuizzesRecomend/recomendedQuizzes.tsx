import { useQuery } from "@apollo/client";
import React, { } from "react";
import QuizQueries from "../../../../graphqueries/quiz";
import Loader from "../../../loader/loader";
function RecomendedQuizzes() {
  const { data, loading } = useQuery(QuizQueries.getQuizes, { variables: { limit: 5 } })
  console.log(data?.getQuizes[0])
  return (
    <section className="mt-4 w-100 quizzes notDone">
      <h4 className="text-serif2 mb-3 title"> Quizzes for you </h4>
      {loading ? <div className="flex"> <Loader /> </div> :
        <div className="flex flex-column scrollY" style={{ maxWidth: "100%", position: "relative" }}>
          {data?.getQuizes?.map((quiz: any, i: number) =>
            <div style={{
              background: "#eaf0f3",
              width: "80%",
              padding: " 15px",
              borderRadius: "10px",
              margin: "0 auto"}} className="recomendQuizCard mb-4" key={i}>
          <div className="d-flex">
            <img style={{height: "50px",
    width: "50px",
    borderRadius: "10px",
    marginRight: "20px"}} src={quiz?.imagePresentation} className="presentation" alt="" />
            <div>
              <h6 className="fw-bold text-serif2 mb-1"> {quiz?.title} </h6>
              <div className="">
                <span className="text-serif2 mx-1">Dificulty:</span>
                <span className={
                  `text-serif2 text-capitalize mx-1
                          ${quiz.dificulty === "easy" ? "text-success" :
                    quiz.dificulty === "normal" ? "text-main" :
                      "text-danger"}`}
                >
                  {quiz?.dificulty}
                </span>
              </div>
            </div>
          </div>
          <div className="flex">
            <button className="btn text-white btn-lightblue mx-auto w-75 mt-3 fw-bold text-serif2">
              Hacer Quiz
              <span className="mx-1">
                (
                {
                  quiz?.dificulty === "normal" ?
                    quiz.pages.length * 7
                    : quiz?.dificulty === "easy" ?
                      quiz.pages.length * 5
                      : quiz.pages.length * 10
                }
                )EXP
              </span>
            </button>
          </div>
        </div>
          )}
    </div>
      }
    </section >
  )
}
export default RecomendedQuizzes
