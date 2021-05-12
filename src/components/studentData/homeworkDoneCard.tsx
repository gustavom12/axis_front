import { useQuery } from "@apollo/client";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import HomeworkQueries from "../../graphqueries/homework";
import TextHover from "../a_mini_components/textOnHover";
import checklist from "./checklist.svg";
function HomeworkDoneCard({
  id,
  setHomeworksDoneLength,
}: {
  id: String;
  setHomeworksDoneLength: any;
}) {
  const { data } = useQuery(HomeworkQueries.getHomeworkDone, {
    variables: { id },
  });
  console.log(data);
  const [inTime, setInTime] = useState(false);
  useEffect(() => {
    if (!data) return;
    const homework = data.getHomeworkDone;
    const doneDate = new Date(homework.doneDate).getTime();
    const expires_date = new Date(homework.expires_date).getTime();
    if (doneDate - expires_date < 0) setInTime(true);
    setHomeworksDoneLength((prevData: any) => (prevData += 1))
  }, [data,setHomeworksDoneLength,setInTime]);
  return data ? (
    <Link to={"/chw?id=" + id} className="w-100 text-dark">
      <div className="w-100 homework flex HoverFather">
        <TextHover message="Corregir tarea" margin="110px 0 0 0" />
        <div className="text w-75">
          <h6 className="fw-bold text-serif text-capitalize mb-0">
            {" "}
            {data?.getHomeworkDone?.title}{" "}
          </h6>
          {inTime ? (
            <h6 className="inline-flex text-main fw-bold m-0">
              Entregado a tiempo
            </h6>
          ) : (
            <h6 className="inline-flex text-danger fw-bold m-0">
              Entregado fuera de tiempo
            </h6>
          )}
          {data?.getHomeworkDone?.calification === null ? (
            <h6 className="text-danger m-0">Aún no corregido</h6>
          ) : null}
        </div>
        <div className="w-25  ">
          {data?.getHomeworkDone?.calification === null ? (
            <span className="ContainerIcon ">
              <img
                src={checklist}
                alt=""
                style={{
                  width: "34px",
                  height: "34px",
                }}
              />
            </span>
          ) : (
            <div className="fw-bold">
              <h5 className="text-serif">
                Nota:{" "}
                <span className="text-main">
                  {data?.getHomeworkDone?.calification}
                </span>
              </h5>
            </div>
          )}
        </div>
      </div>
    </Link>
  ) : null;
}
export default HomeworkDoneCard;
