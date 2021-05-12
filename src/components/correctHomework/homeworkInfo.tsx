import { useQuery } from "@apollo/client";
import React from "react";
import { useEffect } from "react";
import UserQueries from "../../graphqueries/users";
function HomeworkInfo({
  expiresDate,
  doneDate,
  student,
  calification,
  setName
}: {
  expiresDate: any;
  doneDate: any;
  student: any;
  calification: any;
  setName:any
}) {
  const { data } = useQuery(UserQueries.GET_STUDENT, {
    variables: { id: student },
  });
  useEffect(()=>{
    if(!data) return
    setName(data?.getStudent.fullname.split(" ")[0])
  },[data,setName])
  return (
    <div className="info bg-white mt-4 flex flex-column">
      <h3 className="text-serif fw-bold flex mb-0">
        <img src={data?.getStudent.image} className="mx-2" style={{width:"50px", height:"50px", borderRadius:"50%"}} alt=""/>
        {data?.getStudent.fullname}
      </h3>
      {calification ?
        <h5 className="fw-bold">
          Nota: <span className="text-main">{calification}</span>
        </h5>
      :
        <h5 className="fw-bold text-danger">
          Aún no corregido
        </h5>
      }
      <h6>
        Fecha de entrega:{" "}
        <span className="text-main fw-bold">{expiresDate}</span>
      </h6>
      <h6>
        Entregado el: <span className="text-main fw-bold">{doneDate}</span>{" "}
      </h6>
    </div>
  );
}
export default HomeworkInfo;
