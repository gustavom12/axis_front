import { useQuery } from "@apollo/client";
import React from "react";
import HomeworkQueries from "../../graphqueries/homework";
import { QuestionsAnswer } from "../../interfaces/homeworkDone";
import CorrectMultipleChoice from "../correctHomework/correctMultipleChoice";
import Loader from "../loader/loader";
import "./CorrectedHomework.sass";
function CorrectedHomework() {
  const id = window.location.search.replace("?id=", "");
  const { data, loading } = useQuery(HomeworkQueries.getHomeworkDoneComplete, {
    variables: {
      id,
    },
  });
  console.log(data);
  return (
    <section className="correctedHomework createHomework">
      <div className="Block bg-white">
        {loading ? (
          <div className="flex">
            <Loader />
          </div>
        ) : (
          <>
            <h1 className="fw-bold text-center">
              {data?.getHomeworkDone?.title}
            </h1>
            <p className="text-center">{data?.getHomeworkDone?.description}</p>
          </>
        )}
      </div>
        {data?.getHomeworkDone?.questions_answers?.map((qa:QuestionsAnswer, i: number) => (
          <div className="questions_answer w-100 bg-white mt-4" key={i}>
            <h4 className="fw-bold  ">{qa.title}</h4>
            {qa.image ? <img src={qa.image} alt="" /> : null}
            {qa.type === "textLong" ||qa.type === "textShort" ?
              <div>
                <h6
                  className={`answer py-3 px-2 text-serif mb-3 ${qa.isCorrect} `}
                  >{qa.answer}</h6>
                <h6 className={`fw-bold text-center`} style={{fontSize:"15px"}}> {qa.correction} </h6>
              </div>
              : qa.type === "number" ?
              <div>
              <div>
                <div className="flex">
                <h5
                  className={`answer d-inline mx-auto py-2 px-2 text-serif my-2 ${qa.isCorrect} `}
                  >{qa.answer}</h5>
                </div>
                <h6 className={`fw-bold text-center`} style={{fontSize:"15px"}}> {qa.correction} </h6>
              </div>
              </div>
              : qa.type === "choice" ?
              <div>
                <CorrectMultipleChoice question_answer={qa} notModify={true}/>
              </div>
              : null
            }
          </div>
        ))}
    </section>
  );
}
export default CorrectedHomework;
