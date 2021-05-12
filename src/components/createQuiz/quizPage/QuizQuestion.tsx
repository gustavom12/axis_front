import React from "react";
import TextHover from "../../a_mini_components/textOnHover";
function QuizQuestions({
  page,
  Quiz,
  setQuiz,
}: {
  page: any;
  Quiz: any;
  setQuiz: any;
}) {
  const onQuestionInputChange = (value: string, question: any) => {
    const clone = { ...Quiz };
    const thisPage = clone.pages[clone.pages.indexOf(page)];
    const thisQuestion = thisPage.question[thisPage.question.indexOf(question)];
    thisQuestion.value = value;
    setQuiz({ ...clone });
  };
  return (
    <div className="questionSection">
      {page.question.map((question: any, i: any) =>
        question.type === "image" ? (
          <div className="flex mt-4" style={{position:"relative"}} >
            <img src={question.value} key={i} alt="" className="mx-auto" />
            <i
              className="text-danger cursor-pointer fw-bold mt-1 HoverFather flex"
              style={{
                position: "absolute",
                top: 0,
                right: 0,
              }}
              onClick={() => {
                const clone = { ...Quiz };
                const thisPage = clone.pages[clone.pages.indexOf(page)];
                thisPage.question.splice(
                  thisPage.question.indexOf(question),
                  1
                );
                setQuiz({ ...clone });
              }}
            >
              X
              <TextHover message=" Eliminar campo " />
            </i>
          </div>
        ) : question.type === "title" ? (
          <div style={{ position: "relative" }} className="mt-4">
            <textarea
              className="inputMinimalist fs-3 w-100"
              style={{ fontWeight: 600, height: "50px" }}
              onChange={(e) => {
                const scrollHeight = e.target.scrollHeight - 2;
                e.target.style.height = `${scrollHeight + 3}px`;
                onQuestionInputChange(e.target.value, question);
              }}
              value={question.value}
              key={i}
            ></textarea>
            <i
              className="text-danger cursor-pointer fw-bold mt-1 HoverFather flex"
              style={{
                position: "absolute",
                top: 0,
                right: 0,
              }}
              onClick={() => {
                const clone = { ...Quiz };
                const thisPage = clone.pages[clone.pages.indexOf(page)];
                thisPage.question.splice(
                  thisPage.question.indexOf(question),
                  1
                );
                setQuiz({ ...clone });
              }}
            >
              X
              <TextHover message=" Eliminar campo " />
            </i>
          </div>
        ) : question.type === "text" ? (
          <div style={{ position: "relative"}}  >
            <textarea
              className="inputMinimalist w-100 m-0 p-0 fs-5 "
              style={{ color: "#333333", height:"35px" }}
              onChange={(e) => {
                const scrollHeight = e.target.scrollHeight - 2;
                e.target.style.height = `${scrollHeight + 3}px`;
                const scrollWidth = e.target.scrollWidth - 2;
                e.target.style.width = `${scrollWidth + 3}px`;
                onQuestionInputChange(e.target.value, question);
              }}
              key={i}
              value={question.value}
            />
            <i
              className="text-danger cursor-pointer fw-bold HoverFather flex"
              style={{
                position: "absolute",
                top: 0,
                right: 0,
              }}
              onClick={() => {
                const clone = { ...Quiz };
                const thisPage = clone.pages[clone.pages.indexOf(page)];
                thisPage.question.splice(
                  thisPage.question.indexOf(question),
                  1
                );
                setQuiz({ ...clone });
              }}
            >
              X
              <TextHover message=" Eliminar campo " />
            </i>
          </div>
        ) : question.type === "boldText" ? (
          <div style={{ position: "relative" }} >
            <textarea
              key={i}
              value={question.value}
              style={{ color: "#333333", height:"35px" }}
              className="inputMinimalist w-100 fw-bold m-0 p-0 fs-5"
              onChange={(e) => {
                const scrollHeight = e.target.scrollHeight - 2;
                e.target.style.height = `${scrollHeight + 3}px`;
                const scrollWidth = e.target.scrollWidth - 2;
                e.target.style.width = `${scrollWidth + 3}px`;
                onQuestionInputChange(e.target.value, question);
              }}
            />
            <i
              className="text-danger cursor-pointer fw-bold HoverFather flex"
              style={{
                position: "absolute",
                top: 0,
                right: 0,
              }}
              onClick={() => {
                const clone = { ...Quiz };
                const thisPage = clone.pages[clone.pages.indexOf(page)];
                thisPage.question.splice(
                  thisPage.question.indexOf(question),
                  1
                );
                setQuiz({ ...clone });
              }}
            >
              X
              <TextHover message=" Eliminar campo " />
            </i>
          </div>
        ) : null
      )}
    </div>
  );
}
export default QuizQuestions;
