import React from "react";
import image from "../img/photo_2020-11-30_13-50-05.jpg";
import Skill from "./Skill";

const About = () => {
  return (
    <div className="About">
      <div className="title">
        <h3>
          About me
          <span>About me</span>
        </h3>
      </div>
      <div className="imageBox">
        <div className="img">
          <img src={image} alt="" />
        </div>
        <div className="about-info">
          <h4>
            I am <span>Sobirov Asadbek</span>
          </h4>
          <p className='about-text'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad vero
            voluptatem voluptatibus itaque laudantium et labore inventore,
            necessitatibus odit ipsam maxime non ea exercitationem perspiciatis
            ducimus, expedita perferendis. Consectetur, esse.
          </p>
        <div className="about-details">
            <div className="left-side">
                <p>Full Name</p>
                <p>Age</p>
                <p>Nationlity</p>
                <p>Languages</p>
                <p>Address</p>
                <p>Country</p>
            </div>
            <div className="right-side">
                <p>Sobirov Asadbek</p>
                <p>21</p>
                <p>Uzbek</p>
                <p>English, Uzbek, Russia</p>
                <p>7 Mangulik st,Bogot,Khorezm</p>
                <p>Uzbekistan</p>
            </div>
        </div>
        <div className="btn">Download Cv</div>
        </div>
      </div>
      <div className="title">
        <h3>
          My skills
          <span>My skills</span>
        </h3>
      </div>
      <Skill progress={'60%'} skill={'Javascript'} width={'60%'} />
    </div>
  );
};

export default About;
