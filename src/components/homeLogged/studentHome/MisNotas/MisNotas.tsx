import { useQuery } from "@apollo/client";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import HomeworkQueries from "../../../../graphqueries/homework";
import "./MisNotas.sass";
function MisNotas({ homeworksDone }: { homeworksDone: any }) {
  return (
    <section className="w-100 notDone misNotas">
      <h2 className="fw-bold text-serif"> Mis Notas </h2>
      {homeworksDone.length === 0 ? (
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
  const [inTime,setInTime] = useState(false)
  console.log(data);
  useEffect(() => {
    if (!data) return;
    const homework = data.getHomeworkDone;
    const doneDate = new Date(homework.doneDate).getTime();
    const expires_date = new Date(homework.expires_date).getTime();
    if (doneDate - expires_date < 0) setInTime(true)
  }, [data]);
  return (
    <div className="w-100 homework d-flex ">
      <div className="text w-100">
        <h5 className="fw-bold text-serif text-capitalize text-center mb-0">
          {data?.getHomeworkDone?.title}
        </h5>
        <div className="d-flex justify-content-sm-around text-center justify-content-center flex-column flex-sm-row">
          {!inTime ?
            <span
              className="fw-bold text-main date mx-1 fs-6"
              style={{ position: "relative", top: "1px" }}
            >
            Entregado a tiempo
            </span>
            :
            <span className="fw-bold text-serif text-danger mx-2">
              Entregado tarde
            </span> }
          {data?.getHomeworkDone?.calification ?
            <h6 className="fw-bold text-serif text-primary mb-0">Nota: 87{data?.getHomeworkDone?.calification}</h6>
            : <p>Aún no hemos evaluado tu tarea</p>
          }
        </div>
      </div>
    </div>
  );
}
export default MisNotas;
