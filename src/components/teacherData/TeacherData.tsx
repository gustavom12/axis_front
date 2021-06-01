import { useQuery } from "@apollo/client";
import React from "react";
import UserQueries from "../../graphqueries/users";
import TeacherCard from "./teacherCard";
import "./TeacherData.sass";
function TeacherData() {
  const { data} = useQuery(UserQueries.GET_TEACHERs);
  return (
    <section className="miscursos mr-auto">
      <h3 className="mb-1 fw-bold">Profesores</h3>
      <div className="hr w-10 m-0" />
      <div className="flex flex-column teacherRow text-center" style={{overflowX:"scroll" }} >
        <div className="titles container mt-3 text-serif fw-bold" style={{width:"120%"}} >
          <div className="row w-100 ">
            <h5 className="col mx-auto ">Nombre</h5>
            <h5 className="col mx-auto">Email</h5>
            <h5 className="col mx-auto">Quiz creados</h5>
            <h5 className="col mx-auto">Cursos</h5>
            <h5 className="col mx-auto">isAdmin</h5>
          </div>
          {data?.getTeachers.map((teacher: any,i:any) => (
            <TeacherCard teacher={teacher} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default TeacherData;
