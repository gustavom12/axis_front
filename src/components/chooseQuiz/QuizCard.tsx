import React from "react";
import { Link } from "react-router-dom";
function QuizCard({ Quiz }: { Quiz: any }) {
  console.log(Quiz);
  return (
    <Link
      to={`/quiz?id=${Quiz._id}`}
      className="QuizCard flex text-center flex-column mx-auto"
    >
      {Quiz.imagePresentation === "" ? (
        <div className="bg-white imgPresentation flex">
          <div className="circle"></div>
        </div>
      ) : (
        <div className="bg-white imgPresentation flex">
          <img src={Quiz.imagePresentation} alt="" className="circle"/>
        </div>
      )}
      <h5 className="text-dark text-serif2"> {Quiz.title} </h5>
      <h6 className={`${Quiz.dificulty} text-capitalize `} style={{position:"relative", right:"7px"}} >
        <i className="fas fa-star mx-1"></i>
        {Quiz.dificulty}{" "}
      </h6>
    </Link>
  );
}
export default QuizCard;
