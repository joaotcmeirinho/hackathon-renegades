import React from "react";
import video from "../../assets/video/backgroundV.mp4";
import Logo from "../../assets/video/LogoWhite.png";
import "./style.css";
import RadioFmForm from "../RadioFmForm/RadioFmForm";

const MainPage = () => {
  return (
    <div>
      <RadioFmForm />
      <div className="background-mp">
        <div className="logo-space">
          <img className="logo" src={Logo} alt="Logo" />
        </div>
        <video
          className="background-video"
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}
        >
          <div className="logo-space">
            <img className="logo" src={Logo} alt="Logo" />
          </div>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default MainPage;
