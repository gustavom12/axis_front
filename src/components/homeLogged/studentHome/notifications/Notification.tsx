import { useQuery } from "@apollo/client";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import GetDate from "../../../../customhooks/GetDate";
import NotificationQueries from "../../../../graphqueries/notification";
import Loader from "../../../loader/loader";
function Notification({ id }: { id: String }) {
  const { data, loading } = useQuery(NotificationQueries.getNotification, {
    variables: { id: id },
  });
  const [date, setDate] = useState<any>(null);
  useEffect(() => {
    if (!data) return;
    const x = Date.parse(data.getNotification.date);
    setDate(`${GetDate(x).day}/${GetDate(x).month}/${GetDate(x).year}`);
    console.log(GetDate(x));
  }, [data]);
  return loading ? (
    <div className="flex">
      {" "}
      <Loader />{" "}
    </div>
  ) : data ? (
    <div className="Notification d-flex w-100 px-2">
      {data.getNotification.img ? (
        <img src={data.getNotification.img} alt="" />
      ) : data.getNotification.type === "message" ? (
        <div className="image fs-2 text-white inline-flex mx-2">
          <i className="fas fa-comment-dots"></i>
        </div>
      ) : data.getNotification.type === "homework" ? (
        <div className="image fs-2 text-white inline-flex mx-2 mt-1">
          <i className="fas fa-book"></i>
        </div>
      ) : (
        <div className="image fs-3 text-white inline-flex mx-2">
          <i className="far fa-bell"></i>
        </div>
      )}
      <div className="w-100">
        <div className="d-flex justify-content-between w-100">
          <h5
            className="text-serif fw-bold mt-1 m-0 my-auto"
            style={{ position: "relative" }}
          >
            {data.getNotification.title}
          </h5>
          <span style={{ fontSize: "10px" }}>{date}</span>
        </div>
        {data.getNotification.description && (
          <p
            className="m-0 text-serif2"
            style={{ position: "relative", top: "-3px" }}
          >
            {data.getNotification.description}
          </p>
        )}
      </div>
    </div>
  ) : null;
}
export default Notification;
