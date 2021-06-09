import {
  faFacebook,
  faGithub,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Home = () => {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I am
          <span> Asadbek Sobirov</span>
        </h1>
        <p className="description">
          I have been involved in web programming for several years.In my spare
          time I teach web programming to those who are interested.More about me
          if you want to have information, subscribe to my social media and
          contact me.
        </p>
        <div className="icons">
          <a
            href="https://www.facebook.com/asadbek.sobirov.9847/"
            className="icon-holder"
          >
            <FontAwesomeIcon className="icon fb" icon={faFacebook} />
          </a>
          <a className="icon-holder" href="https://github.com/Asadbek-Dev">
            <FontAwesomeIcon className="icon gh" icon={faGithub} />
          </a>
          <a
            className="icon-holder"
            href="https://www.instagram.com/__sob1rov__/"
          >
            <FontAwesomeIcon className="icon in" icon={faInstagram} />
          </a>
          <a className="icon-holder" href="https://t.me/asadbek11_01">
            <FontAwesomeIcon className="icon tg" icon={faTelegram} />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Home;
