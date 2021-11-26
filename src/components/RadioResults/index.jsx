import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./style.css"
import image from '../../assets/video/Dashboard.png'
import { Accordion, Card } from 'react-bootstrap'

const RadioResults = ({toggleDisplay}) => {
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
            
            <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
            <Accordion.Body as={Card.Body}>
             <div className="">asdasdasdasd</div>
             <div className="">asdasdasdasd</div>
             <div className="">asdasdasdasd</div>
            </Accordion.Body>
            <Accordion.Button centered>
                <h4>title<hr/>country</h4>
            </Accordion.Button>
        
            
            </Accordion.Item>
            </Accordion>
            <button onClick={toggleDisplay} className="button-style">Back</button>
        </div>
            
        </>
    )
}

export default RadioResults
