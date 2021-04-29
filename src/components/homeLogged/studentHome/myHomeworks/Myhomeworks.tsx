import { useQuery } from "@apollo/client";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import HomeworkQueries from "../../../../graphqueries/homework";
import TextHover from "../../../a_mini_components/textOnHover";
import book from "./book.svg";
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
      <section className="notDone mx-1">
        <h2 className="fw-bold text-serif "> Tareas Pendientes </h2>
        {homeworkNotDone.length <= 0 ? (
          <div className="w-100 flex">
            <h2 className="text-main my-4">No tienes tareas pendientes</h2>
          </div>
        ) : (
          homeworkNotDone.map((hw) => {
            if (hw.type === "multiplechoice")
              return (
                <Link to={`/hw?id=${hw.homework_id}`} key={hw.homework_id}>
                  <GetHomework
                    id={hw.homework_id}
                    homeworksNotDoneLength={homeworksNotDoneLength}
                    setHomeworksNotDoneLength={setHomeworksNotDoneLength}
                  />
                </Link>
              );
            else return null;
          })
        )}
      </section>
    </>
  );
}
export default Myhomeworks;

function GetHomework({
  id,
  setHomeworksNotDoneLength,
  homeworksNotDoneLength,
}: {
  id: any;
  setHomeworksNotDoneLength: any;
  homeworksNotDoneLength: any;
}) {
  const { data } = useQuery(HomeworkQueries.GetHomework, {
    variables: {
      id,
    },
  });
  const [date, setDate] = useState("");
  useEffect(() => {
    if (!data) return;
    setHomeworksNotDoneLength(homeworksNotDoneLength += 1)
    // Date.parse(data?.getMultipleChoice.expires_date)
    const newD = new Date(Date.parse(data?.getHomework.expires_date));
    const dateString = `${newD.getDate()}/${newD.getMonth()}/${newD.getFullYear()}`;
    setDate(dateString);
    console.log({ d: newD.getDate() });
  }, [data]);
  return data ? (
    <div className="w-100 homework d-flex">
      <div className="text">
        <h6 className="fw-bold text-serif text-capitalize">
          {" "}
          {data?.getHomework?.title}{" "}
        </h6>
        <h6 className="inline-flex">
          {" "}
          Fecha de entrega:
          <span
            className="fw-bold text-main date mx-1 fs-6"
            style={{ position: "relative", top: "1px" }}
          >
            {date}
          </span>{" "}
        </h6>
      </div>
      <div className="imgContainer flex HoverFather">
        <TextHover message="Realizar tarea" margin="0 250px 0 0" />
        <img src={book} className="ml-auto" alt="" />
      </div>
    </div>
  ) : null;
}
