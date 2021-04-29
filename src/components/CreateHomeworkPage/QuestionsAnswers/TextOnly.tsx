import React from "react";
function OnlyText({
  question,
  questions,
  setQuestions,
}: {
  question: any;
  setQuestions: any;
  questions: any;
}) {
  return (
    <div className="questionAnswer bg-white  mt-3">
      <textarea
        onChange={(e) => {
          let questionsClone = questions;
          questionsClone[questions.indexOf(question)].title = e.target.value;
          setQuestions([...questionsClone]);
        }}
        value={questions[questions.indexOf(question)].title}
        name=""
        className="text-serif"
        placeholder="Téxto explicativo"
        style={{
          minHeight: "80px",
          width: "100%",
          background: "#fff",
          fontWeight: "normal",
        }}

      ></textarea>
      <div className="d-flex justify-content-end">
      <i
        onClick={() => {
          let questionsClone = questions;
          questionsClone.splice(questions.indexOf(question), 1);
          setQuestions([...questionsClone]);
        }}
        className="fas fa-trash delete ml-auto"
        style={{
          position: "relative",
          height: "0 !important",
        }}
      ></i>
      </div>
    </div>
  );
}
export default OnlyText;
