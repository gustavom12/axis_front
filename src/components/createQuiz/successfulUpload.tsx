import React from "react";
import { Link } from "react-router-dom";
import Loader from "../loader/loader";
function SuccessfulUpload({ loading }: { loading?: boolean }) {
  return (
    <div className="darkTrasnparentbg flex">
      <div className="bg-white SendHw">
        {loading ? (
          <div className="flex">
            <Loader />
          </div>
        ) : (
          <div className="flex flex-column mt-5 justify-content-around">
            <h2 className="text-main fw-bold fs-2">Haz creado el quiz con éxito!</h2>
            <Link to="/home" style={{position:"relative", top:"100px"}} className="btn-lightblue w-75 mt-auto fw-bold flex fs-4">
              Volver al Inicio
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
export default SuccessfulUpload;
