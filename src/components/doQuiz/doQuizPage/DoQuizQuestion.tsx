import React,{} from "react";
function DoQuizQuestion ({questions}:{questions:any}){
  return(
    <div className="">
      {questions.map((question:any,i:any)=>
        <div className="question" key={i}>
          {question.type === "title" ?
            <h3 className="fs-3 text-serif2 my-3">
              {question.value}
            </h3>
            : question.type === "image" ?
            <div className="flex">
              <img src={question.value} alt="" style={{maxWidth:"100%", maxHeight:"600px" }} />
            </div>
            : null
          }
        </div>
      )}
    </div>
  )
}
export default DoQuizQuestion
