import React from "react";
import video from "../../assets/video/backgroundV.mp4";
import Logo from "../../assets/video/LogoWhite.png";
import "./style.css";
import RadioFmForm from "../RadioFmForm/RadioFmForm";

const MainPage = () => {
  return (
    <div className="background-mp">
      <div>
        <RadioFmForm />
        <video className="background-video" autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
        <div className="logo-space">
          <img className="logo" src={Logo} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
