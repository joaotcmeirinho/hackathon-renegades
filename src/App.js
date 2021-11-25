import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "./components/RadioFmForm";


function App() {
  const [radioStations, setRadioStations] = useState([]);

  const getRadioStations = () => {
    axios
      .get("http://marxoft.co.uk/api/cuteradio/stations")
      .then((response) => response.data)
      .then((data) => {
        setRadioStations(data.items);
      });
  };

  useEffect(() => {
    getRadioStations();
  }, []);

  console.log(radioStations.map(item => item.country));


  return (
    <>
      <h1>Road Trip</h1>
      <Form />
    </>
  );
}

export default App;
