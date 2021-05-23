import { useQuery } from "@apollo/client";
import React from "react";
import QuizQueries from "../../graphqueries/quiz";
import Loader from "../loader/loader";
import "./ChooseQuiz.sass";
import QuizCard from "./QuizCard";
function ChooseQuiz() {
  const { data, loading } = useQuery(QuizQueries.getQuizes);
  return (
    <section className="chooseQuiz">
      <h2 className="text-center text-serif2" style={{ marginBottom: "30px" }}>
        {" "}
        ¿Que te gustaría aprender?{" "}
      </h2>
      <div className="quizes">
        {loading ? (
          <div className="flex">
            <Loader />{" "}
          </div>
        ) : (
          data?.getQuizes.map((Quiz: any, i: any) => (
            <>
              <QuizCard Quiz={Quiz} key={i}/>
            </>
          ))
        )}
      </div>
    </section>
  );
}
export default ChooseQuiz;
