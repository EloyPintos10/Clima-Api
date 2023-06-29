import React from "react";
import  { useState } from 'react';
import gifClima from '../assets/img/diseñoSinTítulo.gif'

const Card = () => {
    const API_CLIMA = `http://api.weatherapi.com/v1/current.json?key=6cb7eb20937d47ec997224826232606&aqi=no&q=`
    const [ciudad, setCiudad] = useState("")
    const [clima, setClima] = useState({
        city: "",
        country: "",
        temperature: 0,
        condition: "",
        humidity:"",
        conditionText: "",
        icon: "",
      });

      const onSubmit = async (e)=>{
        e.preventDefault();
        try {
            const climaApi = await fetch(API_CLIMA + ciudad);
            const dato = await climaApi.json();         

            setClima({
                city: dato.location.name,
                country: dato.location.country,
                temperature: dato.current.temp_c,
                humidity:dato.current.humidity,
                condition: dato.current.condition.code,
                conditionText: dato.current.condition.text,
                icon: dato.current.condition.icon,
              });
             
        } catch (error) {
            console.log(error);
        }
      }

  return (
    <div className="box">

        <p className="title-box">EL CLIMA</p>
        <div className="contain-form">
   <form className="form"  onSubmit={onSubmit}>
     <input placeholder="City" value={ciudad} onChange={(e) => setCiudad(e.target.value)} required />
     <button type="submit" className="btn btn-buscar">
       Search
     </button>
   </form>
 </div>

{clima.city?(
   
      <div className="text-center">
        <div className="contain-card">
            <p>Ciudad:</p>
          <h1>{clima.city}</h1>
        </div>
        <div className="contain-card-info">
          <img src={clima.icon} alt="icono clima" className="icon-api" width={100}/>
          <div>
          <p><span>Condicion: </span> {clima.conditionText}</p>
          <p> <span>Temperatura:</span> {clima.temperature}°C</p>
<p><span>Humedad: </span>{clima.humidity}%</p>
          </div>
        </div>
      </div>


):
(
  <div className="content-city">
    <p className="text-city">Ingresa tu ciudad</p>
  </div>
)}

      
    </div>
  );
};

export default Card;
