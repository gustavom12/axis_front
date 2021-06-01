import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useRef } from "react";
import UserQueries from "../../../../graphqueries/users";
import UploadImage from "../../../CreateHomeworkPage/uploadImage/uploadImage";
import "./EditProfile.sass";
function EditProfile({
  userImg,
  name,
  user,
  setEditProfileDiv,
}: {
  userImg: any;
  name: string;
  user: any;
  setEditProfileDiv: any;
}) {
  const [editProfile] = useMutation(UserQueries.editProfile);
  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(inputName.current.value);
    const fullname = inputName.current.value;
    console.log(profileImg, fullname);
    editProfile({ variables: { id: user._id, fullname, url: profileImg } })
      .then((data: any) => {
        console.log(data);
        window.location.href = "/home";
      })
      .catch((err) => console.log(err));
  };
  const [profileImg, setProfileImg] = useState(userImg);
  const inputName: any = useRef(null);
  return (
    <div className="darkTrasnparentbg flex">
      <form className="bg-white editProfile" onSubmit={onSubmit}>
        <div className="d-flex justify-content-end">
          <span
            className="x text-danger fw-bold text-serif fs-2"
            style={{
              position: "absolute",
              marginTop: "15px",
              cursor: "pointer",
              marginRight: "10px"
            }}
            onClick={()=>{
              setEditProfileDiv(false)
            }}
          >
            X
          </span>
        </div>
        {!profileImg ? (
          <>
            <UploadImage setUrl={setProfileImg} id="profileImg" />
            <label
              htmlFor="profileImg"
              className="img mx-auto flex fw-bold text-white text-capitalize HoverFather bg-primary notImage"
            >
              {name}
              <div className="onHover flex" style={{}}>
                <i className="fas fa-camera"></i>
              </div>
            </label>
          </>
        ) : (
          <>
            <UploadImage setUrl={setProfileImg} id="profileImg" />
            <div className="flex">
              <label htmlFor="profileImg" className="mx-auto flex label-img">
                <img
                  className="img mx-auto fw-bold HoverFather"
                  src={profileImg}
                  alt=""
                />
                <div
                  className="onHover flex text-white text-capitalize"
                  style={{}}
                >
                  <i className="fas fa-camera"></i>
                </div>
              </label>
            </div>
          </>
        )}
        <p className="text-center mb-0 fw-bold fs-5 mt-2">Nombre:</p>
        <input
          type="text"
          placeholder="Nombre Completo"
          ref={inputName}
          className="form-control w-60 fw-bold text-serif text-center fs-4  mx-auto"
          defaultValue={user.fullname}
          maxLength={50}
          pattern="^(\w\w+)\s(\w+)$"
          minLength={10}
        />
        <div className="flex w-100 mt-4">
          <button className="btn-blue2 fw-bold fs-5 mx-auto w-60">
            Guardar Cambios
          </button>
        </div>
      </form>
    </div>
  );
}
export default EditProfile;
