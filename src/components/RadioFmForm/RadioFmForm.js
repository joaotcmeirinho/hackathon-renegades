import { useForm } from "react-hook-form";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function RadioFmForm() {
  const [countryRadioStations, setCountryRadioStations] = useState("");
  const [radioStations, setRadioStations] = useState([]);

  const countryName = countryRadioStations.Country;

  const titles = radioStations.map((radioStation) => radioStation.title);
  const genre = radioStations.map((radioStation) => radioStation.genre);
  console.log(genre);

  const getRadioStations = () => {
    axios
      .get(`http://marxoft.co.uk/api/cuteradio/stations?country=${countryName}`)
      .then((response) => response.data)
      .then((data) => {
        setRadioStations(data.items);
        console.log(data);
      });
  };

  useEffect(() => {
    getRadioStations();
  }, [countryRadioStations]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (country) => setCountryRadioStations(country);

  return (
    <div>
      <h1 className="country">Where are you planning on going?</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Country" {...register("Country", {})} />
        <select {...register}>
          {genre
            .filter((item, index) => genre.indexOf(item) === index)
            .map((g) => (
              <option value="t">{g}</option>
            ))}
        </select>

        <input type="submit" />
      </form>
    </div>
  );
}
