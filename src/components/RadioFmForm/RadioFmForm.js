import { useForm } from "react-hook-form";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { RadioDisplay } from "../RadioDisplay/RadioDisplay";
import "./style.css"

export default function RadioFmForm() {
  const [countryRadioStations, setCountryRadioStations] = useState("");
  const [radioStationGenre, setRadioStationGenre] = useState("");
  const [radioStations, setRadioStations] = useState([]);
  const [radioDisplay, setRadioDisplay] = useState(false);

  const titles = radioStations.map((radioStation) => radioStation.title);
  const genre = radioStations.map((radioStation) => radioStation.genre);
  console.log(genre);

  const getRadioStations = () => {
    axios
      .get(
        `http://marxoft.co.uk/api/cuteradio/stations?country=${countryRadioStations}`
      )
      .then((response) => response.data)
      .then((data) => {
        setRadioStations(data.items);
        console.log(data);
      });
  };

  useEffect(() => {
    getRadioStations();
    if (radioStationGenre !== "") {
      setRadioDisplay(true);
    }
  }, [countryRadioStations, radioStationGenre]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setCountryRadioStations(data.Country);
    setRadioStationGenre(data.genre);
  };
  console.log("hello");

  return !radioDisplay ? (
    <>
          <div className="blur-box"></div>
        <div className="form-handler">
          <form className="form-style" onSubmit={handleSubmit(onSubmit)}>
            <input className="country-input"
              type="text"
              placeholder="Country"
              {...register("Country", {})}
              />
            <select {...register("genre")}>
              {genre
                .filter((item, index) => genre.indexOf(item) === index)
                .map((g) => <option value={g}>{g}</option>)}
            </select>
            <input type="submit" />
          </form>
                </div>
         
        </>
      ) : (
        <div>hello</div>
      )}

