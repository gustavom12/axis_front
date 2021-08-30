import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import UserQueries from "../../graphqueries/users";
import Loader from "../loader/loader";
import './leadeBoard.sass'
import StudentExp from "./studentExp";
import trophy from "./winner.svg"
function LeadeBoard({ course }: { course: string }) {
  const { data, loading } = useQuery(UserQueries.getStudents,)
  const [leaders, setLeaders] = useState<any>([{}]);
  const [notLeaders, setNotLeaders] = useState<any>([{}]);
  useEffect(() => {
    if (!data) return;
    const copiedStudents: any = [...data.getStudents]
    const sorted = copiedStudents.sort(((a: any, b: any) => b.exp - a.exp))
    const leaders = [...sorted]
    const notLeaders = [...sorted]
    notLeaders.splice(0, 3)
    setLeaders(leaders.slice(0, 3))
    setNotLeaders(notLeaders)
  }, [data])
  return (
    <div className="leadeBoard my-4 w-100 notDone">
      <div className="trophies d-flex w-100 justify-content-between">
        <img src={trophy} alt="" />
        <div className="flex">
          <h4 className="title inline-flex text-serif2 text-center">
            LeadeBoard
          </h4>
        </div>
        <img src={trophy} alt="" />
      </div>
      {loading ? <div className="flex"> <Loader /> </div> :
        <div style={{ background: "#0057ff99" }}>
          <div className="leaders">
            {/* <i className="fas fa-trophy bg-icon" ></i> */}
            {leaders.map((student: any, i: number) =>
              <StudentExp student={student} index={i} leader={true} key={i} />
            )}
          </div>
          <div className="notLeaders">
            {notLeaders.map((student: any, i: any) =>
              <StudentExp student={student} index={i} leader={false} key={i} />
            )}
          </div>
        </div>
      }
    </div>
  )
}
export default LeadeBoard
