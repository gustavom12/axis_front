import React from "react";
import { useHistory } from "react-router-dom";
import StudentHome from "./studentHome/studentHome"
import { useSelector } from "react-redux";
import TeacherHome from "./teacherHome/teacherHome";

function HomeLogged(){
  const history = useHistory()
  const user = useSelector((store: any) => store.user.user);
  if(!localStorage.getItem('_us')){
    history.push("")
  }
  return(
    <>
      {user.type === "student"
        ? <StudentHome/>
        : <TeacherHome/>
      }
    </>
  )
}

export default HomeLogged;

