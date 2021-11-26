import React, { useState } from "react";
import Logo from "../../assets/video/LogoWhite.png";
import "./style.css";
import RadioFmForm from "../RadioFmForm/RadioFmForm";
import { RadioDisplay } from "../RadioDisplay/RadioDisplay";
import RadioResults from "../RadioResults";

const MainPage = () => {
  return (
    <div className="background-mp">
      <div>
        <RadioFmForm />
        <div className="logo-space">
          <img className="logo" src={Logo} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
