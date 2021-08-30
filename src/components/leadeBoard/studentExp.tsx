import lead from "./wreath.svg"
import lead2 from "./wreath (1).png"
import lead3 from "./wreath (2).png"
function StudentExp({ student, index,leader }: { student: any, index: number, leader:boolean }) {
  // console.log(index,student.exp)
  if (leader) return (
    <div className={`first w-100 flex flex-column text-center leader is${index}` } >
      <div className="flex images m-0">
        <h6 className="fw-bold text-serif2 flex text-center exp m-0">
          <span>
            <i style={{fontSize:"10px"}} className="fas fa-star mx-0 text-yellow"></i>
            {student?.exp}
          </span>
        </h6>
        <img src={index === 0 ? lead : index === 1 ? lead2 : lead3} alt="" className="leadImage" />
        {
          !student?.image ?
            <div className="img my-auto fw-bold text-serif2 flex text-white" style={{fontSize:"70px"}} >
              <span style={{position:"relative", top:"0px"}}>{student?.fullname?.split("")[0]}</span>
            </div>
            :
            <img className="img" src={student?.image} alt="" />
        }
      </div>
      <h6 style={{fontWeight:500}} className="fullname text-capitalize my-auto text-serif2"> {student?.fullname} </h6>
    </div>
  )
  return (
    <div className="studentExp flex justify-content-around">
      <div className="flex mr-auto">
        <h5 className="text-serif my-auto">{index + 3}</h5>
        {
          !student?.image ?
            <div className="img my-auto text-serif2 fs-2 flex text-white">
              <span style={{position:"relative", top:"-3px"}}>{student?.fullname?.split("")[0]}</span>
            </div>
            :
            <img className="img" src={student?.image} alt="" />
        }
        <h5 className="fw-bold fullname text-capitalize my-auto text-serif"> {student?.fullname} </h5>
      </div>
      <h5 className="fw-bold text-serif2 d-flex text-center exp">
        <i className="fas fa-star mx-2 text-yellow"></i>
        {student?.exp}
      </h5>
    </div>
  )
}
export default StudentExp
