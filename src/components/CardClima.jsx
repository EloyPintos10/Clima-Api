import React from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";



const CardClima = () => {
  const API_CLIMA = `http://api.weatherapi.com/v1/current.json?key=6cb7eb20937d47ec997224826232606&aqi=no&q=`;
  const [ciudad, setCiudad] = useState("");
  const [clima, setClima] = useState({
    city: "",
    country: "",
    temperature: 0,
    condition: "",
    humidity: "",
    conditionText: "",
    icon: "",
  });



  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const climaApi = await fetch(API_CLIMA + ciudad);
      const dato = await climaApi.json();

      setClima({
        city: dato.location.name,
        country: dato.location.country,
        temperature: dato.current.temp_c,
        humidity: dato.current.humidity,
        condition: dato.current.condition.code,
        conditionText: dato.current.condition.text,
        icon: dato.current.condition.icon,
      });


    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="box">
      <p className="title-box">TU API DEL CLIMA</p>
      <div className="contain-form">
        <form className="form" onSubmit={onSubmit}>
          <input
            placeholder="City"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-buscar">
            Search
          </button>
        </form>
      </div>
      <div className="d-flex justify-content-center">

      {clima.city ? (
        <Card className="tarjeta">
          <Card.Body>
            <Card.Title className="text-start fs-3">{clima.city}</Card.Title>
            <Card.Text>
              
                <p className="temperature">
                  {" "}
                   {clima.temperature}°C
                </p>
                <img src={clima.icon} alt="" />   
             
                <p>
                  {" "}
                  <span className="fw-bold">Condicion: </span> {clima.conditionText}
                </p>

                <p>
                  <span className="fw-bold">Humedad: </span>
                  {clima.humidity}%
                </p>
              
            </Card.Text>           
          </Card.Body>
        </Card>
      ) : (
       ""
        
      )}
      </div>

    </div>
  );
};

export default CardClima;
