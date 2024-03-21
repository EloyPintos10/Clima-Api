import React, { useEffect } from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import { consultarAPI, traductorViento } from "./helpers/api";
import Swal from 'sweetalert2'
import { background } from "./helpers/api";

const CardClima = () => {   


  const [ciudad, setCiudad] = useState("");  
  const [clima, setClima] = useState({
    city: "",
    country: "",
    temperature: 0,
    condition: "",
    humidity: "",
    uv: 0,
   viento: "",
    conditionText: "",
    icon: "",
    day: 0,
  });

  



  const onSubmit = async (e) => {
    e.preventDefault();


    consultarAPI(ciudad).then(
      (respuesta) => {
       console.log(respuesta)
        setClima({
          country: respuesta.location.country,
          city: respuesta.location.name,
          temperature: Math.round(respuesta.current.temp_c),
          humidity: respuesta.current.humidity,
        uv: respuesta.current.uv,
        viento:respuesta.current.wind_dir,
          condition: respuesta.current.condition.code,
        conditionText: respuesta.current.condition.text,
         icon: respuesta.current.condition.icon,
         day: respuesta.current.is_day,
        });

        background( respuesta.current.is_day, respuesta.current.condition.text, );
      
       setCiudad("");

     
      },
      (reason) => {
        console.log(reason);

        Swal.fire(
          "Ocurrio un error",
          "Intentelo nuevamente en unos minutos",
          "error"
        );
      }
    );   
  };

  

  return (
    <div className="box" id="boxes" >
          
      <div>
      {clima.city ? (
        <div  className="div-tarjetas">
        <Card className='tarjeta'>
          <Card.Body className="contain-tarjetas">
            <div>
            <Card.Title className="text-start fs-3">{clima.city}</Card.Title>
                <p className="temperature">
                 
                   {clima.temperature}°C
                </p>
                <img src={clima.icon} alt="" />   
            </div>
            <Card.Text>
              
             
                <p>                 
                  <span className="fw-bold">Condicion: </span> {clima.conditionText}
                </p>

                <p>
                  <span className="fw-bold">Humedad: </span>
                  {clima.humidity}%
                </p>
                <p>
                  <span className="fw-bold">Uv: </span>
                  {clima.uv}
                </p>
                <p>
                  <span className="fw-bold">Viento: </span>
                  {clima.viento}
                </p>
              
            </Card.Text>           
          </Card.Body>
        </Card>
        <div>
          <a href="" className="btnAtras">Atras</a>
        </div>
          
          </div>
          ) : (
        <>
        <div>
        <p className="title-box"> API DEL CLIMA</p>
        <div className="contain-form">       
        <form className="form" onSubmit={onSubmit}>
            <input
              placeholder="Ingresá Ciudad"
              value={ciudad}
              onChange={(e) => setCiudad(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-buscar">
              BUSCAR
            </button>
          </form>         
        </div>
        </div>
        </>
      )}
     
   
      </div>

    </div>
  );
};

export default CardClima;
