import React from "react";
import image from "../img/photo_2020-11-30_13-50-05.jpg";
import ServicesSection from "./ServicesSection";
import Skill from "./Skill";
import design from '../img/design.svg'

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
            I am <span>Asadbek</span>
          </h4>
        <div className="about-details">
            <div className="left-side">
                <p>Full Name:</p>
                <p>Age:</p>
                <p>Nationlity:</p>
                <p>Languages:</p>
                <p>Address:</p>
                <p>Country:</p>
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
      <div className="skillsContainer">
      <Skill progress={'90%'} skill={'HTML'} width={'90%'} />
      <Skill progress={'75%'} skill={'CSS'} width={'75%'} />
      <Skill progress={'60%'} skill={'Javascript'} width={'60%'} />
      <Skill progress={'50%'} skill={'Bootstrap'} width={'50%'} />
      <Skill progress={'70%'} skill={'React.js'} width={'70%'} />
      <Skill progress={'50%'} skill={'Redux'} width={'50%'} />
      <Skill progress={'60%'} skill={'material-ui'} width={'60%'} />
      <Skill progress={'40%'} skill={'Firebase'} width={'40%'} />
      </div>
      <div className="services-container">
          <ServicesSection image={design} text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'} title={'Web design'} />
      </div>
    </div>
  );
};

export default About;
