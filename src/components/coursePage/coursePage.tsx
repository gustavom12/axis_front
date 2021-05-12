import { useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import CoursesQueries from "../../graphqueries/courses";
// import Sidebar from "../homeLogged/teacherHome/sidebar/sidebar";
import Loader from "../loader/loader";
import "./CoursePage.sass";
function CoursePage({ids = window.location.search.replace("?ids=", "")}:{ids ?:any}) {
  const { data, loading } = useQuery(CoursesQueries.GET_COURSES_BY_IDS, {
    variables: {
      ids,
    },
  });
  console.log({ids})
  return (
    <section
      className="coursePage flex w-100"
      style={{
        minHeight: "89vh",
        padding: "20px 10px",
      }}
    >
      {/* <Sidebar/> */}
      <div className="curso w-100">
        {loading ? (
          <div className="flex mt-5">
            <Loader></Loader>
          </div>
        ) : (
          <div className="data w-100">
            <div className="titles text-center container w-100 mt-4 text-serif fw-bold">
              <div className="row w-100 ">
                <h5 className="col mx-auto ">Student</h5>
                <h5 className="col-1 mx-auto">Exp</h5>
                <h6 className="col mx-auto">Tareas Entregadas</h6>
                <h6 className="col mx-auto"> Promedio de notas </h6>
                <div className="col mx-auto"></div>
              </div>
            </div>
            {data?.getCoursesById.map((getCourse: any,i:any) => (
              <div key={i}>
                <div className="students">
                  {getCourse.Students.map((student: any) => {
                    let notDone = 0;
                    student.homework.forEach((hw: any) => {
                      if (hw.alreadyDone) notDone += 1;
                    });
                    return (
                      <div className="student" key={student._id}>
                        <div className="text-center container w-100 py-3 text-serif fw-bold">
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
                            <h6 className="flex col mx-auto">
                              {" "}
                              Aún no disponible{" "}
                            </h6>
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
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
export default CoursePage;
