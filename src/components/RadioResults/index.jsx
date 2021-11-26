import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./style.css"
import image from '../../assets/video/Dashboard.png'
import { Accordion } from 'react-bootstrap'

const RadioResults = ({toggleDisplay}) => {
    return (
        <>
         <button onClick={toggleDisplay}>Back</button>
        <div className="">
         <img className="driver-img" src={image} alt="" 
         style={{  position: "absolute",
         width: "100%",
         left: "50%",
         top:"70vh",
         height:"70vh", 
         transform: "translate(-50%, -50%)", 
             }} />
        <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="1">
            <Accordion.Button centered><h4>title<hr/>country</h4></Accordion.Button>
            
            <Accordion.Body>
      <div className="div">hashdhashd</div>
      <div className="div">hashdhashd</div>
      <div className="div">hashdhashd</div>
            </Accordion.Body>
            
            </Accordion.Item>
            </Accordion>
        </div>
            
        </>
    )
}

export default RadioResults
