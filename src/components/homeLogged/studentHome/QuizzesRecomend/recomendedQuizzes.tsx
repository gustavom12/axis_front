import { useQuery } from "@apollo/client";
import React, { } from "react";
import QuizQueries from "../../../../graphqueries/quiz";
import SwiperCore, {  } from 'swiper';
import { Swiper, SwiperSlide, } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import './recomendedQuizzes.sass'
import Loader from "../../../loader/loader";
function RecomendedQuizzes() {
  const { data, loading } = useQuery(QuizQueries.getQuizes, { variables: { limit: 5 } })
  console.log(data?.getQuizes[0])
  // SwiperCore.use([]);
  return (
    <section className="mt-4 w-100 notDone misNotas">
      <h4 className="fw-bold text-serif"> Quizzes for you </h4>
      {loading ? <div className="flex"> <Loader /> </div> :
        <h1 className="fw-bold text-center mt-5"> Sección aún no disponible </h1>
        // <Swiper
        //   spaceBetween={10}
        //   slidesPerView={1}
        //   slidesPerGroup={1}
        //   loop={true}
        // >
        //   {data?.getQuizes?.map((quiz: any, i: number) =>
        //     // <SwiperSlide key={i}>
        //       <div className="recomendQuizCard">
        //         <h5 className="text-serif2"> {quiz?.title} </h5>
        //       </div>
        //     // </SwiperSlide>
        //   )}
        // </Swiper>
      }
    </section>
  )
}
export default RecomendedQuizzes
