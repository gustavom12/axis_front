function Option({
  question,
  optionIndex,
  questions,
  setQuestions,
}: {
  question: any;
  questions: [any];
  optionIndex: number;
  setQuestions: any;
}) {
  return (
    <div className="flex mt-3 w-100 ">
      <input
        className="form-check-input mx-2"
        type="radio"
        name={"Iscorrect:" + optionIndex + question.questionNumber}
        checked={question.answers[optionIndex].isCorrect}
        onChange={(e) => {
          const checked = e.target.checked;
          //Makes input value to true and other inputs values to false
          let questionsClone = questions;
          questionsClone[questions.indexOf(question)].answers.forEach(
            (el: any) => {
              if (el.number === optionIndex + 1) {
                el.isCorrect = checked;
                return;
              }
              el.isCorrect = !checked;
            }
          );
          setQuestions([...questionsClone]);
        }}
      />
      <input
        required
        value={question.answers[optionIndex].text}
        type="text"
        className="form-control inputAnswer "
        placeholder="Respuesta"
        onChange={(e) => {
          let questionsClone = questions;
          questionsClone[questions.indexOf(question)].answers[
            optionIndex
          ].text = e.target.value;
          setQuestions([...questionsClone]);
        }}
      />
    </div>
  );
}
export default Option
