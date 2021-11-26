import { useForm } from "react-hook-form";
import React, { useState, useEffect } from "react";
import axios from "axios";

import RadioResults from "../RadioResults";
import "./style.css";

import { RadioDisplay } from "../RadioDisplay/RadioDisplay";
import "./style.css";
import videoForward from "../../assets/video/backgroundVforward.mp4";
import video from "../../assets/video/backgroundV.mp4";

export default function RadioFmForm() {
  const [countryRadioStations, setCountryRadioStations] = useState("");
  const [radioStationGenre, setRadioStationGenre] = useState("");
  const [radioStations, setRadioStations] = useState([]);
  const [radioDisplay, setRadioDisplay] = useState(false);

  const titles = radioStations.map((radioStation) => radioStation.title);
  const genre = radioStations.map((radioStation) => radioStation.genre);

  const fmCountry = radioStations
    .filter((station) => {
      return station.genre === radioStationGenre;
    })
    .map((item) => item);

  console.log("here here");
  console.log(fmCountry);

  const getRadioStations = () => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

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

  const toggleDisplay = () => {
    setRadioDisplay(!radioDisplay);
  };

  useEffect(() => {
    getRadioStations();
    if (radioStationGenre === "") {
      console.log("nonono");
    } else {
      toggleDisplay();
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

  return !radioDisplay ? (
    <>
      <div className="video-backwards">
        <video className="background-video" autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="blur-box"></div>
      <div className="form-handler">
        <form className="form-style" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="country-input"
            type="text"
            placeholder="Country"
            {...register("Country", {})}
          />
          <select {...register("genre")}>
            {genre
              .filter((item, index) => genre.indexOf(item) === index)
              .map((g) => (
                <option value={g}>{g}</option>
              ))}
          </select>
          <input type="submit" />
        </form>
      </div>
    </>
  ) : (
    <div>
      <RadioDisplay toggleDisplay={toggleDisplay} />
      <video className="background-video" autoPlay loop muted>
        <source src={videoForward} type="video/mp4" />
      </video>
    </div>
  );
}
