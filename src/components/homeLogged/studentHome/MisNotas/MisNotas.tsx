import { useQuery } from "@apollo/client";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import HomeworkQueries from "../../../../graphqueries/homework";
import Message from "../../../a_mini_components/message";
import Loader from "../../../loader/loader";
import "./MisNotas.sass";
function MisNotas({ homeworksDone }: { homeworksDone: any }) {
  return (
    <section className="w-100 notDone misNotas">
      <h2 className="fw-bold text-serif"> Mis Notas </h2>
      {homeworksDone === 0 ? (
        <div className="w-100 flex">
          <h2 className="text-main my-4">Aún no tienes notas disponibles</h2>
        </div>
      ) : (
        homeworksDone.map((hw: any) => (
          <Notas done_hw_id={hw.done_homework_id} key={hw.done_homework_id} />
        ))
      )}
    </section>
  );
}

function Notas({ done_hw_id }: { done_hw_id: String }) {
  const { data, loading } = useQuery(HomeworkQueries.getHomeworkDone, {
    variables: { id: done_hw_id },
  });
  const [inTime, setInTime] = useState(false);
  const history = useHistory();
  useEffect(() => {
    if (!data) return;
    const homework = data.getHomeworkDone;
    const doneDate = new Date(homework.doneDate).getTime();
    const expires_date = new Date(homework.expires_date).getTime();
    if (doneDate - expires_date > 0) setInTime(true);
  }, [data]);
  const [errorMessage, setErrorMessage] = useState("")
  return (
    <div
      className="w-100 homework d-flex"
      onClick={() => {
        if (!data?.getHomeworkDone?.calification) {
          setErrorMessage("Aún no puedes ver esta corrección")
          setTimeout(()=>{setErrorMessage("")},3000)
          return
        };
        history.push(`/corrected?id=${done_hw_id}`);
      }}
    >
      <Message message={errorMessage}/>
      {data?.getHomeworkDone?.calification ? (
        <div className="flex HomeworkHover" style={{ position: "absolute" }}>
          <i className="fas fa-eye"></i>
        </div>
      ) : null}
      {loading ? (
        <div className="flex">
          <Loader />
        </div>
      ) : (
        <div className="text w-100">
          <div
            className={`d-flex align-items-center ${
              data?.getHomeworkDone?.calification
                ? "justify-content-around"
                : "justify-content-center"
            }`}
          >
            {data?.getHomeworkDone?.expGiven ? (
              <h6>
                <i className="fas fa-star mx-1 text-yellow"></i>
                <span className="fw-bold">
                  {data?.getHomeworkDone?.expGiven}
                </span>
              </h6>
            ) : null}
            <h5 className="fw-bold text-serif text-capitalize text-center m-0 p-0">
              {data?.getHomeworkDone?.title}
            </h5>
            {data?.getHomeworkDone?.calification ? (
              <h6
                className="fw-bold text-serif text-primary mb-0"
                style={{ fontSize: "13px" }}
              >
                Nota: {data?.getHomeworkDone?.calification}/100
              </h6>
            ) : null}
          </div>
          {!data?.getHomeworkDone?.calification ? (
            <p className="text-center m-0 p-0">
              Aún no hemos evaluado tu tarea
            </p>
          ) : null}
          {data?.getHomeworkDone?.correctionDesription ? (
            <p className="text-center p-0 m-0" style={{ fontSize: "14px" }}>
              {data?.getHomeworkDone?.correctionDesription.length < 110
                ? data?.getHomeworkDone?.correctionDesription
                : data.getHomeworkDone.correctionDesription.split(0, 110) +
                  "..."}
            </p>
          ) : null}
          <div className="d-flex justify-content-sm-around text-center justify-content-center flex-column flex-sm-row">
            {!inTime ? (
              <span
                className="fw-bold text-main date mx-1 fs-6 my-0 p-0"
                style={{ position: "relative", top: "1px" }}
              >
                Entregado a tiempo
              </span>
            ) : (
              <span className="fw-bold text-serif text-danger mx-2">
                Entregado tarde
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
export default MisNotas;
