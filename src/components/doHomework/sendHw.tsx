import React from "react";
import Loader from "../loader/loader";
import "./sendHw.sass";
import education from "./education.svg";
import { Link } from "react-router-dom";
function SendHw({
  loading,
  sendToDatePoints,
  errors,
}: {
  loading: boolean;
  sendToDatePoints: boolean;
  errors: any;
}) {
  return (
    <div className="darkTrasnparentbg flex">
      <div className="bg-white SendHw">
        {loading ? (
          <div className="">
            <h2 className="fw-bold text-serif">Subiendo tarea...</h2>
            <div className="flex mt-5">
              <Loader></Loader>
            </div>
          </div>
        ) : !errors ? (
          <div className="flex flex-column">
            <img src={education} alt="" />
            <h2 className="fw-bold text-serif text-center m-0">
              {" "}
              Haz subído tu tarea con éxito!{" "}
            </h2>
            {!sendToDatePoints ? (
              <h3 className="text-main mt-2 text-center">
                Felicidades! Haz ganado <span>50EXP  </span>por entregar a tiempo!
              </h3>
            ) : null}
            <Link to="/home" className="w-100 flex">
              <button
                className="btn-lightblue w-75 flex fw-bold fs-4 mt-2"
                style={{borderRadius:"50px"}}
                >Volver al inicio</button>
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default SendHw;
