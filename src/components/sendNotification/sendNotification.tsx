import { useMutation } from "@apollo/client";
import React from "react";
import { useRef } from "react";
import NotificationQueries from "../../graphqueries/notification";
import Loader from "../loader/loader";
import "./sendNotification.sass";
function SendNotification({
  to,
  from,
  setToFrom,
  type,
}: {
  to: any;
  from: any;
  setToFrom: any;
  type: String;
}) {
  const [createNotification, { data, loading }] = useMutation(
    NotificationQueries.createNotification
  );
  const content: any = useRef(null);
  const onSubmit = () => {
    const NotificicationContent = content.current.value;
    let notification: any = {};
    if (type === "message") {
      notification = {
        title: `Mensaje de "${from.fullname}"`,
        description: NotificicationContent,
        img: from.img,
        to: to.id,
        date: Date.now(),
        type: type,
      };
    }
    createNotification({variables:{notification, student: to.id }})
      .then((data:any)=>console.log(data))
      .catch(err=>console.log({err}))
  };
  return (
    <div className="darkTrasnparentbg flex">
      {loading ? (
        <Loader />
      ) : (
        <div className="bg-white  flex flex-column sendNotification">
          <span
            className="text-serif text-danger cursor-pointer fs-3"
            style={{ position: "absolute", right: "10px", top: "10px" }}
            onClick={() => {
              setToFrom({});
            }}
          >
            X
          </span>
          {data ? (
            <div>
              <h2 className="text-main fw-bold text-center">
                {" "}
                La notificación se ha enviado con éxito{" "}
              </h2>
            </div>
          ) : (
            <>
              <h2 className="fw-bold text-capitalize mb-1">
                {to?.img ? (
                  <img src={to.img} alt="" className="avatarImg" />
                ) : (
                  <div
                    className="avatarImg inline-flex fw-bold text-serif text-white text-capitalize"
                    style={{ fontSize: "20px" }}
                  >
                    {to?.fullname.split("", 1)}
                  </div>
                )}
                {to?.fullname}
              </h2>
              <textarea
                className="form-control mt-4"
                style={{ minHeight: "150px" }}
                placeholder="Contenido de notificación"
                minLength={15}
                maxLength={400}
                ref={content}
              />
              <button
                className="btn-lightblue fw-bold text-serif2 w-75 fs-4 mt-5"
                onClick={onSubmit}
              >
                Enviar Notificación
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
export default SendNotification;
