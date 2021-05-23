import React from "react";
import { useState } from "react";
import Message from "../../a_mini_components/message";
import Loader from "../../loader/loader";
import DoQuizQuestion from "./DoQuizQuestion";
function DoQuizPage({
  page,
  setDoneQuiz,
  doneQuiz,
  setSelectedOption,
  submitMessage
}: {
  page: any;
  setDoneQuiz: any;
  doneQuiz: any;
  setSelectedOption: any;
  submitMessage: any
}) {
  const [errorMessage, setErrorMessage] = useState("");
  return (
  !page  ? <div className="flex w-100" style={{minHeight:"80vh"}} ><Loader/></div>  :
    <div className="doQuizPage">
      <Message message={errorMessage} />
      <DoQuizQuestion questions={page?.question} />
      <div className="options">
        {page?.options.map((option: any, i: any) => (
          <>
            <div key={i}>
              <input
                style={{ height: "0" }}
                type="radio"
                name={"option" + page.Number + option.Number}
                id={"option" + page.Number + option.Number}
                checked={option.isSelected ? true : false}
                onChange={(e) => {
                  if (page.alreadyDone === true || submitMessage === "error" || submitMessage === "success") {
                    setErrorMessage("Ya haz completado esta pregunta");
                    setTimeout(() => {
                      setErrorMessage("");
                    }, 4000);
                    return;
                  }
                  let clone = { ...doneQuiz };
                  let copiedOptions;
                  let CopiedPages = clone.pages.map((pag: any) => {
                    if (pag !== page) return pag;
                    copiedOptions = pag.options.map((opt: any) => {
                      if (opt === option) {
                        setSelectedOption({...opt, isSelected: true})
                        return { ...opt, isSelected: true };
                      } else return { ...opt, isSelected: false };
                    });
                    return { ...page, options: copiedOptions };
                  });
                  setDoneQuiz({ ...clone, pages: CopiedPages });
                }}
              />
              <label
                htmlFor={"option" + page.Number + option.Number}
                className={`option text-serif fs-4
                  ${option.isSelected && "selected"}
                  ${page.alreadyDone === true && option.isCorrect ? "success" : null}
                  ${submitMessage === "success" && option.isSelected && option.isCorrect && "success"}
                  ${submitMessage === "error" && !option.isSelected && option.isCorrect && "success"}
                `
                }
              >
                {option.value}
              </label>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
export default DoQuizPage;
