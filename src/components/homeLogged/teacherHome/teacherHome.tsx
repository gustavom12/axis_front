import React,{useEffect} from "react";
// import CreateHW from "../../CreateHWSelect/createhw"
import Miscursos from "./miscursos/miscursos";
import Sidebar from "./sidebar/sidebar";
import { useDispatch, useSelector } from "react-redux";
import { GetUser } from "../../../redux/userDuck";

function TeacherHome(){
  const dispatch = useDispatch();
  useEffect(() => {
    const getX = () => {
      dispatch(GetUser());
    };
    getX();
  }, [dispatch]);
  const user = useSelector((store: any) => store.user.user);
  return(
    <>
      {/* <CreateHW/> */}
      <div className="flex"
        style={{
          background: "#a8bebe54",
          minHeight: "89vh",
          padding: "20px 10px"
        }}>
        <Sidebar/>
        <Miscursos cursos={user.cursos}/>
      </div>
    </>
  )
}

export default TeacherHome;
