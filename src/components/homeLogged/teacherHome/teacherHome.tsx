import React,{useEffect} from "react";
// import CreateHW from "../../CreateHWSelect/createhw"
import Miscursos from "./miscursos/miscursos";
import Sidebar from "./sidebar/sidebar";
import { useDispatch, useSelector } from "react-redux";
import { GetUser } from "../../../redux/userDuck";
import CreateHW from "./CreateHWSelect/createhw";
import CoursePage from "../../coursePage/coursePage"

function TeacherHome(){
  const dispatch = useDispatch();
  useEffect(() => {
    const getX = () => {
      dispatch(GetUser());
    };
    getX();
  }, [dispatch]);
  const user = useSelector((store: any) => store.user.user);
  const pathname = window.location.pathname
  return(
    <>
      {/* <CreateHW/> */}
      <div className="flex"
        style={{
          background: "#a8bebe54",
          minHeight: "89vh",
          padding: "20px 10px"
        }}>
        <Sidebar />
        {
          pathname.includes("createhw")
            ? <CreateHW/>
            :
          pathname.includes("cursos")
            ? <CoursePage ></CoursePage>
            :
          pathname.includes("students")
            ? <div className="students"></div>
            :
          pathname.includes("students")
            ? <div className="students"></div>
            : <Miscursos cursos={user.cursos}/>
        }
      </div>
    </>
  )
}

export default TeacherHome;
