import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useState } from "react";
import GetDate from "../../../../customhooks/GetDate";
import HomeworkQueries from "../../../../graphqueries/homework";
import TextHover from "../../../a_mini_components/textOnHover";
import Loader from "../../../loader/loader";
import book from "./book.svg";

export default function GetHomework({
  id,
  setHomeworksNotDoneLength,
  homeworksNotDoneLength,
}: {
  id: any;
  setHomeworksNotDoneLength: any;
  homeworksNotDoneLength: any;
}) {
  const { data, loading } = useQuery(HomeworkQueries.GetHomework, {
    variables: {
      id,
    },
  });
  const [date, setDate] = useState("");
  useEffect(() => {
    if (!data) return;
    setHomeworksNotDoneLength((prevData: any) => (prevData += 1));
    // Date.parse(data?.getMultipleChoice.expires_date)
    const newD = GetDate(Date.parse(data?.getHomework.expires_date));
    setDate(newD.complete);
  }, [data, setHomeworksNotDoneLength, setDate]);
  return loading ? (
    <div className="flex">
      <Loader />
    </div>
  ) : data ? (
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
