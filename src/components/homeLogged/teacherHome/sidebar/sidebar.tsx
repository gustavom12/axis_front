import React, { useState } from "react";
import { useEffect } from "react";
import coursesvg from "./lecture.svg";
import "./sidebar.sass";
import { useDispatch, useSelector } from "react-redux";
import { GetUser } from "../../../../redux/userDuck";
import Message from "../../../a_mini_components/message";
import EditProfile from "../../studentHome/editProfile/editProfile";
function Sidebar() {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    const getX = () => {
      dispatch(GetUser());
    };
    getX();
  }, [dispatch]);
  const user = useSelector((store: any) => store.user.user);
  const changePathname = (url: string) => {
    console.log(user.cursos);
    console.log(Url);
    window.location.pathname = url;
    setUrl(url);
  };
  const [Url, setUrl] = useState(window.location.pathname);
  const [editProfileDiv, setEditProfileDiv] = useState(false);
  return (
    <div className="Sidebar">
      <Message message={errorMessage} />
      <h5 className="fw-bold mb-1">Teacher Tools</h5>
      <hr className="hr w-25 m-0" />
      <div className="tools w-100 mt-3">
        <div
          onClick={() => changePathname("/home")}
          className={`d-flex tool mt-1 px-1 ${
            Url === "/home" ? "active text-white" : null
          }`}
        >
          <i className="fas fa-user-graduate" style={{ fontSize: "25px" }}></i>
          <h6 className="my-auto ml-1">Mis alumnos</h6>
        </div>
        <div
          className={`d-flex tool mt-1 px-1 ${
            Url.includes("courses") ? "active" : null
          }`}
          onClick={() => changePathname("/home/courses")}
        >
          <img
            src={coursesvg}
            className="mr-1"
            alt=""
            style={{ height: "25px" }}
          />
          <h6 className="my-auto ml-1">Mis cursos</h6>
        </div>
        <div
          className={`d-flex tool mt-1 px-1 ${
            Url.includes("createhw") ? "active" : null
          }`}
          onClick={() => changePathname("/home/createhw")}
        >
          <i className="fas fa-book text-dark" style={{ fontSize: "25px" }}></i>
          <h6 className="my-auto ml-1">Crear tarea </h6>
        </div>
        <div
          className={`d-flex tool mt-1 px-1 ${
            editProfileDiv ? "active" : null
          }`}
          onClick={() => setEditProfileDiv(true)}
        >
          <i className="fas fa-user-circle" style={{ fontSize: "25px" }}></i>
          <h6 className="my-auto ml-1">Mi Perfíl</h6>
        </div>
      </div>
      <div
        className={`d-flex tool mt-1 px-1 ${
          Url.includes("createcourse") ? "active" : null
        }`}
        onClick={() => changePathname("/home/createcourse")}
      >
        <img
          src={coursesvg}
          className="mr-1"
          alt=""
          style={{ height: "25px" }}
        />
        <h6 className="my-auto ml-1">Crear cursos</h6>
      </div>
      <hr className="hr w-75" />
      <h5 className="fw-bold mt-2 mb-0">Admin Tools</h5>
      <hr className="hr w-25 m-0" />
      <div className="tools w-100 mt-2">
        <div
          className={`d-flex tool mt-1 px-1 ${
            Url.includes("teachers") ? "active" : null
          }`}
          onClick={() => {
            if (!user.isAdmin) {
              setErrorMessage(
                "No tienes los permisos para realizar esta acción"
              );
              setTimeout(() => setErrorMessage(""), 4000);
              return;
            }
            changePathname("/home/teachers");
          }}
        >
          <img
            src={coursesvg}
            className="mr-1"
            alt=""
            style={{ height: "25px" }}
          />
          <h6 className="my-auto ml-1">Profesores</h6>
        </div>
        <div
          className={`d-flex tool mt-1 px-1 ${
            Url.includes("students") ? "active" : null
          }`}
          onClick={() => {
            if (!user.isAdmin) {
              setErrorMessage(
                "No tienes los permisos para realizar esta acción"
              );
              setTimeout(() => {
                setErrorMessage("");
              }, 4000);
              return;
            }
            changePathname("/home/students");
          }}
        >
          <i className="fas fa-user-graduate" style={{ fontSize: "25px" }}></i>
          <h6 className="my-auto ml-1">Alumnos</h6>
        </div>
        <div className="d-flex tool mt-1 px-1">
          <i className="fas fa-cash-register" style={{ fontSize: "25px" }}></i>
          <h6 className="my-auto ml-1">Pagos</h6>
        </div>
      </div>
      {editProfileDiv && (
        <EditProfile
          user={user}
          userImg={user.image}
          name={user.fullname.split("", 1)}
          setEditProfileDiv={setEditProfileDiv}
        />
      )}
    </div>
  );
}
export default Sidebar;
