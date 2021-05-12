import React from "react";
import { useState } from "react";
import Message from "../../a_mini_components/message";
import TextHover from "../../a_mini_components/textOnHover";
function OptionQuiz({
  page,
  Quiz,
  setQuiz,
  option,
  preWatch,
}: {
  page: any;
  Quiz: any;
  setQuiz: any;
  option: any;
  preWatch: boolean;
}) {
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <div
      className={`option mx-auto mt-3 ${
        !preWatch ? (option.isCorrect ? "correct" : "incorrect") : null
      }`}
    >
      {!preWatch ? (
        <div
          className="d-flex w-100 justify-content-between "
          style={{
            height: 0,
          }}
        >
          <i
            className="fas fa-trash text-danger"
            style={{
              fontSize: "14px",
              margin: "7px 11px",
              cursor: "pointer",
            }}
            onClick={() => {
              const clone = { ...Quiz };
              const pageOptions: [any] =
                clone.pages[clone.pages.indexOf(page)].options;
              if (pageOptions.length <= 2) {
                setErrorMessage("Deben haber al menos 2 opciones");
                setTimeout(() => setErrorMessage(""), 3000);
                return;
              }
              pageOptions.splice(pageOptions.indexOf(option), 1);
              if (option.isCorrect) {
                pageOptions[0].isCorrect = true;
              }
              setQuiz({ ...clone });
            }}
          ></i>
          <input
            type="radio"
            name={"option" +page.Number + option.Number}
            id={"option" + page.Number + option.Number}
            style={{ height: "0" }}
            value={option.isCorrect}
            checked={option.isCorrect}
            onChange={(e) => {
              const checked = e.target.checked;
              //Makes input value to true and other inputs values to false
              let clone = { ...Quiz };
              const pageOptions: [any] =
                clone.pages[clone.pages.indexOf(page)].options;
              pageOptions.forEach((el: any) => {
                if (el.Number === option.Number) {
                  el.isCorrect = checked;
                  return;
                }
                el.isCorrect = !checked;
              });
              setQuiz({ ...clone });
            }}
          />
          <label
            className="fas fa-check text-main ml-auto flex HoverFather"
            htmlFor={"option" + page.Number + option.Number}
            style={{
              fontSize: "18px",
              margin: "12px 7px",
              cursor: "pointer",
            }}
          >
            <TextHover message="Marca esta opcion como correcta" />
          </label>
        </div>
      ) : null}
      <div
        className="w-100"
        style={{
          padding: " 16px 32px",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <input
          type="text"
          value={option.value}
          required
          key={option.index}
          onChange={(e) => {
            let clone = { ...Quiz };
            const pageOptions: [any] =
              clone.pages[clone.pages.indexOf(page)].options;
            pageOptions[pageOptions.indexOf(option)].value = e.target.value;
            setQuiz({ ...clone });
          }}
          className="inputMinimalist mr-auto text-serif"
        />
      </div>
      <Message message={errorMessage} />
    </div>
  );
}
export default OptionQuiz;
