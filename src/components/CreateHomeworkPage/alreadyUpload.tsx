import React,{} from "react";
import { Link } from "react-router-dom";
import Loader from "../loader/loader";
function AlreadyUploadedHw ({loading,success}:{loading:boolean, success:string}){
  return(
    <div className="darkTrasnparentbg flex ">
      <div className="bg-white alreadyUploadedHw flex flex-column">
        {loading ?
          <div className="flex">
            <Loader/>
          </div>
          :
          <>
            <h2 className="text-main text-serif"> {success}</h2>
            <Link to="/home" className="w-100 flex mt-4">
              <button className="btn-blue w-75 fw-bold text-serif fs-4"> Volver al inicio </button>
            </Link>
          </>
        }
      </div>
    </div>
  )
}
export default AlreadyUploadedHw
