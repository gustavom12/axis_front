import { useQuery } from "@apollo/client";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CoursesQueries from "../../graphqueries/courses";
import UserQueries from "../../graphqueries/users";
import Loader from "../loader/loader";
import SendNotification from "../sendNotification/sendNotification";
import "./CoursePage.sass";
function CoursePage({
  ids = window.location.search.replace("?ids=", ""),
}: {
  ids?: any;
}) {
  const [sendNotification, setSendNotification] = useState({
    to: { img: "", id: "", fullname: "" },
    from: { img: "", id: "", fullname: "" },
  });
  const [students, setStudents] = useState([])
  const user = useSelector((store:any)=>store.user.user)
  console.log(user)
  const query = ids ? CoursesQueries.GET_COURSES_BY_IDS : UserQueries.getStudents
  const { data, loading } = useQuery(query, {
    variables: {
      ids,
    },
  });
  console.log(data)
  useEffect(()=>{
    if(!data)return
    if(data.getCoursesById){
      let students:any = []
      data.getCoursesById.forEach((el:any)=> {
        students = [...students, ...el.Students]
      });
      setStudents(students)
      console.log({students})
      return
    }else{
      setStudents(data.getStudents)
    }
  },[data])
  return (
    <section
      className="coursePage flex w-100 mb-auto"
      style={{
        minHeight: "89vh",
        padding: "10px 10px",
      }}
    >
      {sendNotification?.to?.fullname && (
        <SendNotification
          type="message"
          to={sendNotification.to}
          from={sendNotification.from}
          setToFrom={setSendNotification}
        />
      )}
      <div className="curso w-100" style={{overflowY:"scroll"}} >
        {loading ? (
          <div className="flex mt-5">
            <Loader></Loader>
          </div>
        ) : (
          <div className="data w-100">
            <div className="titles text-center container w-100 mt-2 text-serif fw-bold">
              <div className="row w-100 ">
                <h5 className="col mx-auto ">Student</h5>
                <h5 className="col-1 mx-auto">Exp</h5>
                <h6 className="col mx-auto">Tareas Entregadas</h6>
                <div className="col mx-auto"></div>
                <div className="col mx-auto"></div>
              </div>
            </div>
                <div className="students">
                  {students?.map((student: any) => {
                    let notDone = 0;
                    student.homework.forEach((hw: any) => {
                      if (hw.alreadyDone) notDone += 1;
                    });
                    return (
                      <div className="student" key={student._id}>
                        <div className="text-center container w-100 py-2 text-serif fw-bold">
                          <div className="row w-100 ">
                            <h6 className="col name fw-bold mx-auto text-capitalize d-flex align-center ">
                              {student.image !== null ? (
                                <img
                                  src={student.image}
                                  alt=""
                                  className="avatarImg"
                                />
                              ) : (
                                <div className="avatarImg inline-flex fw-bold text-white text-capitalize">
                                  {student.fullname.split("", 1)}
                                </div>
                              )}
                              {student.fullname}
                            </h6>
                            <h6 className="flex  mx-auto col-1">
                              {student.exp}
                            </h6>
                            <h6 className="flex col mx-auto">
                              {notDone}/{student.homework.length}
                            </h6>
                            <div className="flex col mx-auto">
                              <button
                                className="btn btn-blue2 py-2 mb-auto col fw-bold"
                                style={{fontSize:"14px"}}
                                onClick={() =>
                                  setSendNotification({
                                    to: {
                                      img: student.image,
                                      id: student._id,
                                      fullname: student.fullname,
                                    },
                                    from: {
                                      img: user.image,
                                      id: user._id,
                                      fullname: user.fullname
                                    },
                                  })
                                }
                              >
                                Enviar mensaje
                              </button>
                            </div>
                            <div className="flex col mx-auto">
                              <Link
                                to={"home/alumn?id=" + student._id}
                                className="btn btn-blue mb-auto col fw-bold"
                              >
                                Ver más
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
          </div>
        )}
      </div>
    </section>
  );
}
export default CoursePage;
