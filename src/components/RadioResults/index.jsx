import React from 'react'
import "./style.css"
import image from '../../assets/video/Dashboard.png'

const RadioResults = () => {
    return (
        <>
        <div className="">
         <img className="driver-img" src={image} alt="" 
         style={{  position: "absolute",
         width: "100%",
         left: "50%",
         top:"70vh",
         height:"70vh", 
         transform: "translate(-50%, -50%)", 
             }} />
             <div className="accordion">
                 <h4>title</h4><hr style={{color:"black"}}/><h4>country</h4>
                 
                 </div>
             
        </div>
            
        </>
    )
}

export default RadioResults
