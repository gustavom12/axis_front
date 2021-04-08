import React from "react";
import { Link } from "react-router-dom";

function StudentLoggedbtns() {
  return (
    <>
      <Link
        className="fw-bold text-dark mx-2 text-serif fs-6 underlineHover"
        to="/home"
      >
        Home
      </Link>
      <Link
        to=""
        className="underlineHover fw-bold text-dark mx-2 text-serif fs-6"
      >
        {" "}
        Pagar Online{" "}
      </Link>
      <Link
        to=""
        className="underlineHover fw-bold text-dark mx-2 text-serif fs-6"
      >
        {" "}
        Mi cuenta{" "}
      </Link>
      <button className="btn mx-3 btn-blue flex d-inline-flex">
        <Link to="" className="mx-2 text-serif fs-6">
          {" "}
          Mis tareas
        </Link>
      </button>
    </>
  );
}

export default StudentLoggedbtns;
