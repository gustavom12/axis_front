import React from "react";
import { Link } from "react-router-dom";
import Loader from "../loader/loader";
function AlreadySendDiv({ loading }: { loading: boolean }) {
  return (
    <div className="darkTrasnparentbg flex">
      <div className="bg-white SendHw flex ">
        {loading ? (
          <Loader />
        ) : (
          <div className="flex flex-column mt-4 px-3">
            <h2 className="fs-1 fw-bold text-main text-center">
              Haz corregído la tarea con éxito
            </h2>
            <Link to="/home" className="w-100 flex">
              <button className="fs-3 btn-main w-75 fw-bold text-serif mt-5">
                Volver al Inicio
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
export default AlreadySendDiv;
