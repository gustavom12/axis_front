import React, { useRef, useState } from "react";
import { useEffect } from "react";
import TextHover from "../../a_mini_components/textOnHover";
import UploadImage from "../../CreateHomeworkPage/uploadImage/uploadImage";
import Loader from "../../loader/loader";
function AddInputsBtns({
  page,
  Quiz,
  setQuiz,
}: {
  page: any;
  Quiz: any;
  setQuiz: any;
}) {
  const [image, setImage] = useState("");
  const [imageLoading, setImageLoading] = useState(false);
  const add = (addType: string) => {
    const clone = { ...Quiz };
    const thisPage = clone.pages[clone.pages.indexOf(page)];
    switch (addType) {
      case "title":
        thisPage.question.push({
          type: "title",
          value: "Texto tipo titular",
          Number: thisPage.question[thisPage.question.length]?.Number + 1 || 1 ,
        });
        break;
      case "text":
        thisPage.question.push({
          type: "text",
          value: "Text",
          Number: thisPage.question[thisPage.question.length]?.Number + 1 || 1 ,
        });
        break;
      case "boldText":
        thisPage.question.push({
          type: "boldText",
          value: "Bold",
          Number: thisPage.question[thisPage.question.length]?.Number + 1 || 1 ,
        });
        break;
    }
    setQuiz({ ...clone });
    console.log(Quiz)
  };
  const pageRef = useRef(Quiz.pages[Quiz.pages.indexOf(page)])
  useEffect(() => {
    if (image === "") return;
    setQuiz((clone: any) => {
      const thisPage = clone.pages[clone.pages.indexOf(pageRef.current)];
      thisPage.question.push({
      type: "image",
      value: image,
      Number: thisPage.question[thisPage.question.length]?.Number + 1 || 1 ,
    });
      return { ...clone};
    });
  }, [image,setQuiz]);
  return (
    <div className="d-flex justify-content-around mx-auto inputsBtns">
      <div
        className="iconBtn HoverFather flex mx-auto"
        style={{ cursor: "default" }}
      >
        <UploadImage
          setUrl={setImage}
          id={page.Number}
          setLoading={setImageLoading}
        />
        {imageLoading ? (
          <Loader />
        ) : (
          <label
            htmlFor={page.Number}
            style={{ cursor: "pointer" }}
            onClick={() => {
              add("image");
            }}
            className="far fa-image"
          ></label>
        )}
        <TextHover message="añade una imagen" margin="0 300px 0 0" />
      </div>
      <div
        className="iconBtn HoverFather flex mx-auto"
        onClick={() => {
          add("title");
        }}
      >
        <i
          className="fw-bold"
          style={{ position: "relative", left: "-2px", zIndex: 0 }}
        >
          T
        </i>
        <TextHover message="añade una pregunta tipo titular" margin="0 300px 0 0" />
      </div>
      <div
        className="iconBtn HoverFather flex mx-auto"
        onClick={() => {
          add("text");
        }}
      >
        <i
          className=""
          style={{ position: "relative", left: "-2px", zIndex: 0 }}
        >
          P
        </i>
        <TextHover message="añade un parrafo explicativo" />
      </div>
      <div
        className="iconBtn HoverFather flex mx-auto"
        onClick={() => {
          add("boldText");
        }}
      >
        <i className="">!</i>
        <TextHover message="añade un párrafo resaltado" />
      </div>
    </div>
  );
}
export default AddInputsBtns;
