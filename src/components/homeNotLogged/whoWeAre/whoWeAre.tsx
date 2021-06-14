import React, { } from "react";
import Icons from "../../a_mini_components/icons/icons";
import './whoWeAre.sass'
function WhoWeAre() {
  return (
    <section className="WhoWeAre">
      <div className="students">
        <div className="mx-auto flex" data-aos="fade" data-aos-duration="1300">
          <img src="https://i.ibb.co/wwSyNT3/group.png" alt="" />
        </div>
        <div className="aboutCard mx-auto">
          <div className="circle1 circle" data-aos="fade-right" />
          <div className="circle2 circle" data-aos="fade-right" data-aos-duration="1300" />
          <div className="circle3 halfcircle" data-aos="fade-left" data-aos-duration="1300" />
          <div className="aptitude aptitude1 text-serif" data-aos="fade-left" data-aos-duration="1300">- ACOMPAÑAMIENTO -</div>
          <div className="aptitude aptitude2 text-serif" data-aos="fade-right" data-aos-duration="1300">- FLEXIBLE -</div>
          <div className="aptitude aptitude3 text-serif" data-aos="fade-right" data-aos-duration="1300">- CERTIFICACIÓN -</div>
          <h2 className="text-center fs-1 text-serif m-0" data-aos="fade-up">
            Sobre Nosotros
          </h2>
          <h6 className="d-flex justify-content-around">
            <p style={{ width: "48%" }} data-aos="fade" data-aos-delay="450">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Necessitatibus voluptatem possimus nihil repellendus? Distinctio,
              in atque! Excepturi molestias ducimus, voluptatem architecto molestiae
              totam nobis voluptates assumenda quibusdam corrupti sapiente nihil.
            </p>
            <div className="line" />
            <p style={{ width: "48%" }} data-aos="fade" data-aos-delay="600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Necessitatibus voluptatem possimus nihil repellendus? Distinctio,
              in atque! Excepturi molestias ducimus, voluptatem architecto molestiae
              totam nobis voluptates assumenda quibusdam corrupti sapiente nihil.
            </p>
          </h6>
          <Icons />
        </div>
      </div>
    </section>
  )
}
export default WhoWeAre
