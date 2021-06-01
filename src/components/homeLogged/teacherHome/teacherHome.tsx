import React, { useEffect } from "react";
// import CreateHW from "../../CreateHWSelect/createhw"
import Miscursos from "./miscursos/miscursos";
import Sidebar from "./sidebar/sidebar";
import { useDispatch, useSelector } from "react-redux";
import { GetUser } from "../../../redux/userDuck";
import CreateHW from "./CreateHWSelect/createhw";
import CoursePage from "../../coursePage/coursePage";
import StudentData from "../../studentData/studentData";
import CreateCourse from "../../createCourse/createCourse";
import TeacherData from "../../teacherData/TeacherData";

function TeacherHome() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getX = () => {
      dispatch(GetUser());
    };
    getX();
  }, [dispatch]);
  const user = useSelector((store: any) => store.user.user);
  const pathname = window.location.pathname;
  console.log(user);
  return (
    <>
      {/* <CreateHW/> */}
      <div
        className="flex"
        style={{
          background: "#a8bebe54",
          minHeight: "89vh",
          padding: "20px 10px",
        }}
      >
        <Sidebar />
        {pathname.includes("createhw") ? (
          <CreateHW />
        ) : pathname.includes("cursos") && user.cursos ? (
          <CoursePage></CoursePage>
        ) : pathname.includes("courses") ? (
          <Miscursos cursos={user.cursos} />
        ) : pathname.includes("alumn") ? (
          <StudentData />
        ) : pathname.includes("createcourse") ? (
          <CreateCourse />
        ) : pathname.includes("teachers") ? (
          <TeacherData />
        ) : pathname.includes("students") ? (
          <CoursePage/>
        ) : (
          <CoursePage ids={user.cursos.map((el: any) => el._id)}></CoursePage>
        )}
      </div>
    </>
  );
}

export default TeacherHome;
