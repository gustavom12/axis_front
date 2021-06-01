import React from "react";
function TeacherCard({ teacher }: { teacher: any }) {
  return (
    <div className="row curso pt-2 w-100 flex" key={teacher._id}>
      <h6 className="col mx-auto ">
        {teacher.image !== null ? (
          <img src={teacher.image} alt="" className="avatarImg" />
        ) : (
          <div className="avatarImg inline-flex fw-bold text-white text-capitalize">
            {teacher.fullname.split("", 1)}
          </div>
        )}
        {teacher.fullname}
      </h6>
      <h6 className="col mx-auto ">{teacher.email}</h6>
      <h6 className="col mx-auto ">
        {teacher?.createdQuizes?.length || 0}
        {/* <button className="btn btn-blue2 mb-auto col w-75">Enviar mensaje</button>
            <TextHover message="Función aún no disponible" /> */}
      </h6>
      <h6 className="col mx-auto"> {teacher?.cursos?.length || 0} </h6>
      <h6 className="col mx-auto"> {teacher?.isAdmin ? "true" : "false"} </h6>
    </div>
  );
}
export default TeacherCard;
