import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import CoursesQueries from "../../graphqueries/courses";
import UserQueries from "../../graphqueries/users";
import Loader from "../loader/loader";
import "./CreateCourse.sass";
function CreateCourse() {
  const { data } = useQuery(UserQueries.GET_TEACHERs);
  const [teachers, setTeachers] = useState<any>([]);
  const user = useSelector((store: any) => store.user.user);
  const [createCourse, createCourseVar] = useMutation(
    CoursesQueries.createCourse
  );
  const [errors, setErrors] = useState("")
  const name: any = useRef();
  const accKey: any = useRef()
  return (
    <section
      className="CreateCourse miscursos mr-auto"
      style={{
        minHeight: "89vh",
        padding: "20px 10px",
      }}
    >
      <h2 className="text-serif2 mx-2"> Crear Curso </h2>
      <div className="hr "></div>
      <form
        className="w-50 mx-auto"
        onSubmit={(e) => {
          e.preventDefault();
          setErrors("")
          if(name.current.value.length < 4 ){
            setErrors("Ingresa un nombre válido")
            return
          }
          if(teachers.length === 0){
            setErrors("Debes seleccionar al menos un profesor")
            return
          }
          if(accKey.current.value.length < 4){
            setErrors("Ingresa una access key válida")
            return;
          }
          const Course = {
            Students: [],
            Teachers: teachers,
            name: name.current.value,
            accessKey: accKey.current.value
          };
          createCourse({ variables: { Course } })
        }}
      >
        <h5 className=" text-serif2 mt-5 mb-0 ">Nombre:</h5>
        <input
          type="text"
          className="form-control "
          placeholder="Nombre del curso"
          ref={name}
        />
        <h5 className="text-serif2 mt-3 mb-1"> Profesores: </h5>
        <div>
          <h5
            className={`text-center teacher text-serif inline-flex fw-bold mt-3 ${
              teachers.includes(user._id) ? "active" : null
            } `}
            onClick={() => {
              setTeachers([...teachers, user._id]);
            }}
          >
            {user?.fullname}
          </h5>
          {data?.getTeachers.map((teacher: any, i: any) => (
            <div key={i}>
              {teacher._id !== user._id ? (
                <h5
                  className={`teacher text-center inline-flex fw-bold ${
                    teachers.includes(user._id) && "active"
                  }`}
                  onClick={() => {
                    setTeachers([...teachers, teacher._id]);
                  }}
                >
                  {teacher.fullname}
                </h5>
              ) : null}
            </div>
          ))}
        </div>
        <input
          type="text"
          className="form-control mt-2 "
          placeholder="Access key"
          ref={accKey}
        />
        <p className="text-center">
          {" "}
          (Debés enviarle el "access key" a tus alumnos para q puedan ingresar
          al curso, no lo olvides!){" "}
        </p>
        <h6 className="text-danger text-center">{errors}</h6>
        <div className="flex">
          {createCourseVar.loading && <Loader />}
          {createCourseVar.data
            ?
              <h3 className="text-center text-main fw-bold"> Curso creado con éxito! </h3>
            :
              <button
              type="submit"
              className="btn-lightblue mx-auto w-75 fw-bold mt-4 fs-4"
            >
              Crear curso
            </button>
          }
        </div>
      </form>
    </section>
  );
}
export default CreateCourse;
