export const consultarAPI = async (ciudad) => {
  try {
    const respuesta = await fetch(
      "https://api.weatherapi.com/v1/current.json?key=6cb7eb20937d47ec997224826232606&aqi=no&lang=es&days=5&q=" +
        ciudad
    );
    const clima = await respuesta.json();
    return clima;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const traductorViento = (dato)=>{

  if(dato === "SSW"){
    return "Sudoeste"
  }else if(dato === "SST"){
    return "Sudeste"
  }else if(dato=== "N"){
    return "Norte"
  }else if (dato=== "S"){
    return "Sur"
  }else if (dato === "NNW"){
    return "Noroeste"
  }else if (dato === "NNE"){
    return "Noreste"
  }


}





export const background = (dato1, dato2) => {
  if ((dato1 === 1) & (dato2 === "Soleado")) {
    document.getElementById("body-bg").classList.add("fondo1");   
  } else if ((dato1 === 0) & (dato2 === "Despejado")) {
    document.getElementById("body-bg").classList.add("fondo2");
    console.log("es de noche");
  } else if ((dato1 === 1) & (dato2 === "Despejado")) {
    document.getElementById("body-bg").classList.add("fondo1");
   
  } else if ((dato1 === 1) & (dato2 === "Parcialmente nublado")) {
    document.getElementById("body-bg").classList.add("fondo_clima1");
  } else if ((dato2 === "Nublado")) {
    document.getElementById("body-bg").classList.add("fondo_clima1");
  
  } else if ((dato1 === 0) & (dato2 === "Parcialmente nublado")) {
    document.getElementById("body-bg").classList.add("fondo_clima2");
   
  } else if (dato2 === "Ligeras precipitaciones" || dato2 === "Lluvia" || dato2 === "Ligeras lluvias" || dato2 === "Lluvias fuertes y moderadas") {
    document.getElementById("body-bg").classList.add("fondo_clima3");
  } else if (dato2 === "Lluvia moderada a intervalos") {
    document.getElementById("body-bg").classList.add("fondo_clima3");
    
  }else if (dato2 === "Cielo cubierto") {
    document.getElementById("body-bg").classList.add("fondo_clima4");
    
  }else if (dato2 === "Neblina" || dato2 === "Niebla moderada") {
    document.getElementById("body-bg").classList.add("fondo_clima5");
    
  }else if (dato2 === "Tormenta") {
    document.getElementById("body-bg").classList.add("fondo_clima6");
  }else if (dato2 === "Nublado") {
    document.getElementById("body-bg").classList.add("fondo_clima8");
    
  }else if (dato2 === "Nevadas ligeras") {
    document.getElementById("body-bg").classList.add("fondo_clima7");
    
  }
};
