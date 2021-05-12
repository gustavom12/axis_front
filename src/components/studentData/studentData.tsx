import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { useEffect } from "react";
import HomeworkQueries from "../../graphqueries/homework";
import UserQueries from "../../graphqueries/users";
import Loader from "../loader/loader";
import HomeworkDoneCard from "./homeworkDoneCard";
import "./Studentdata.sass";
function StudentData() {
  const id = window.location.search.replace("?id=", "");
  const { data, loading } = useQuery(UserQueries.GET_STUDENT, {
    variables: {
      id,
    },
  });
  const [homeworksNotDoneLength, setHomeworksNotDoneLength] = useState(0);
  const [homeworksDoneLength, setHomeworksDoneLength] = useState(0);
  return (
    <section
      className="coursePage w-100"
      style={{
        minHeight: "89vh",
        padding: "20px 10px",
      }}
    >
      {loading ? (
        <Loader />
      ) : (
        <div className="homeWhiteDiv student w-100 mt-auto text-center">
          {data?.getStudent?.image ? (
            <div className="flex">
              <img
                src={data?.getStudent?.image}
                alt=""
                style={{
                  width: "180px",
                  height: "180px",
                  borderRadius: "50%",
                  border: "1px solid #00000050",
                }}
              />
            </div>
          ) : (
            <div
              className="mx-auto avatarImg flex fw-bold text-white text-capitalize bg-primary"
              style={{
                width: "180px",
                height: "180px",
                borderRadius: "50%",
                border: "1px solid #00000050",
                fontSize: "130px",
              }}
            >
              {data?.getStudent?.fullname.split("", 1)}
            </div>
          )}
          <h2 className="fw-bold text-capitalize">
            {data?.getStudent?.fullname}
          </h2>
          <h5 className=" text-serif">
            <i className="fas fa-star mx-1 text-yellow"></i>
            {data?.getStudent?.exp} EXP
          </h5>
          <div className="d-flex">
            <div
              className="d-flex flex-column w-50 py-1 notDone"
              style={{
                border: "1px solid #00000030",
                justifyContent:"flex-start",
                alignItems:"center"
              }}
            >
              <h2 className="fw-bold text-center">No entregados</h2>
              {data?.getStudent?.homework?.map((hw: any) =>
                hw.alreadyDone ? null : (
                  <GetStudentHomework
                    key={hw.homework_id}
                    id={hw.homework_id}
                    setHomeworksDoneLength={setHomeworksNotDoneLength}
                  />
                )
              )}
              {homeworksNotDoneLength === 0 ? (
                <h2 className="text-main fw-bold text-center">
                  No hay tareas sin entregar
                </h2>
              ) : null}
            </div>
            <div
              className="d-flex flex-column w-50 py-1 notDone"
              style={{
                border: "1px solid #00000030",
                justifyContent:"flex-start",
                alignItems:"center"
              }}
            >
              <h2 className="fw-bold text-center">Entregados</h2>
              {data?.getStudent?.homework?.map((hw: any) =>
                !hw.alreadyDone ? null : (
                  <HomeworkDoneCard
                    key={hw.homework_id}
                    id={hw.done_homework_id}
                    setHomeworksDoneLength={setHomeworksDoneLength}
                  />
                )
              )}
              {homeworksDoneLength === 0 ? (
                <h2 className="text-main fw-bold text-center">
                  No hay tareas entregadas
                </h2>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
export default StudentData;

function GetStudentHomework({
  id,
  setHomeworksDoneLength,
}: {
  id: any;
  setHomeworksDoneLength: any;
}) {
  const { data } = useQuery(HomeworkQueries.GetHomework, {
    variables: {
      id,
    },
  });
  const [date, setDate] = useState("");
  useEffect(() => {
    if (!data?.getHomework) return;
    setHomeworksDoneLength((prevData: any) => (prevData += 1));
    // Date.parse(data?.getMultipleChoice.expires_date)
    const newD = new Date(Date.parse(data?.getHomework?.expires_date));
    const dateString = `${newD.getDate()}/${newD.getMonth()}/${newD.getFullYear()}`;
    setDate(dateString);
  }, [data, setHomeworksDoneLength]);
  return data ? (
    <div className="w-100 homework flex">
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
    </div>
  ) : null;
}
