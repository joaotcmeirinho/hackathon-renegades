import React from 'react'
import '../MainPage/style.css'
import Logo from "../../assets/video/LogoWhite.png";

const Logo1 = () => {
    return (
        <>
         <div className="logo-space">
          <img className="logo" src={Logo} alt="Logo" />
        </div>   
        </>
    )
}

export default Logo1
