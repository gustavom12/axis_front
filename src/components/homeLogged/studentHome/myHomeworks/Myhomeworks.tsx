import React from "react";
import { Link } from "react-router-dom";
import GetHomework from "./getHomework";
import "./Myhomeworks.sass";
function Myhomeworks({
  homeworkNotDone,
  homeworksNotDoneLength,
  setHomeworksNotDoneLength,
}: {
  homeworkNotDone: [any];
  homeworksNotDoneLength: any;
  setHomeworksNotDoneLength: any;
}) {
  return (
    <>
      <section className="notDone w-100 mx-1">
        <h2 className="fw-bold text-serif "> Tareas Pendientes </h2>
        {homeworksNotDoneLength === 0 ? (
          <div className="w-100 flex">
            <h2 className="text-main my-4">No tienes tareas pendientes</h2>
          </div>
        ) : null}
        {homeworkNotDone.map((hw) => (
          <Link to={`/hw?id=${hw.homework_id}`} key={hw.homework_id}>
            <GetHomework
              id={hw.homework_id}
              homeworksNotDoneLength={homeworksNotDoneLength}
              setHomeworksNotDoneLength={setHomeworksNotDoneLength}
            />
          </Link>
        ))}
      </section>
    </>
  );
}
export default Myhomeworks;
