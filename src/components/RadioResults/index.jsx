import React from 'react'
import "./style.css"
import image from '../../assets/video/Dashboard.png'

const RadioResults = () => {
    return (
        <>
        <div className="">
         <img className="driver-img" src={image} alt="" 
         style={{ position: "absolute",
         width: "100%",
         left: "50%",
         top:"100%",
         height: "100vh",
         objectFit: "cover",
         transform: "translate(-50%, -50%)",
         zIndex: "-1",
         display:"flex",
             }} />
             <div><h2>hello</h2></div>
             
        </div>
            
        </>
    )
}

export default RadioResults
