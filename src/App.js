import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [radioStations, setRadioStations] = useState([]);

  const getRadioStations = () => {
    axios
      .get("http://marxoft.co.uk/api/cuteradio/stations")
      .then((response) => response.data)
      .then((data) => {
        setRadioStations(data);
      });
  };

  useEffect(() => {
    getRadioStations();
  }, []);

  console.log(radioStations);

  /*let countries = radioStations.map((radioStation) => {
    return radioStation.country;
  });

  console.log(countries);*/

  return (
    <>
      <h1>Road Trip</h1>
    </>
  );
}

export default App;
