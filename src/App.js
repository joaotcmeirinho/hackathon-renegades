import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "./components/RadioFmForm";


function App() {
  const [radioStations, setRadioStations] = useState([]);

  const getRadioStations = () => {
    axios
      .get(`http://marxoft.co.uk/api/cuteradio/stations?country=Portugal`)
      .then((response) => response.data)
      .then((data) => {
        setRadioStations(data.items);
      });
  };

  useEffect(() => {
    getRadioStations();
  }, []);


  console.log(radioStations);

  let countries = radioStations.map((radioStation) => {
    return radioStation.country;
  });

  console.log(countries);

  let genre = radioStations.map((radioStation) => {
    return radioStation.genre;
  });

  console.log(genre);


  return (
    <>
      <h1>Road Trip</h1>
      <Form />
    </>
  );
}

export default App;
