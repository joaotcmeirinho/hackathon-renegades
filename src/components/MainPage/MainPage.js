import React from "react";
import video from "../../assets/video/backgroundV.mp4";

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
      </div>
    </div>
  );
};

export default MainPage;
