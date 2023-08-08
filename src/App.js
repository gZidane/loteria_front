import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabla from './components/tabla'

function App() {

  const [tablas, setTablas] = useState([]);

  const getDatosTablas = (numeroTablas) =>
  {
    fetch("http://localhost:4000/cartas/generarTablas?numeroTablas=" + numeroTablas)
      .then(response =>
      {
        return response.json()
        .then(data =>
          {
            setTablas(data);
          })
      })   
  }

  /*useEffect(() =>
  {
    getDatosTablas(5);
  }, []);*/

  const handleBtnGenerar = () =>
  {
    let cantidadTablas = parseInt(document.getElementById("inputCantidadTablas").value);

    let btnGenerar = document.getElementById('btnGenerar');

    btnGenerar.setAttribute('disabled', true);

    // getDatosTablas(cantidadTablas);
  }

  
  return (
    <div className="App">

      { tablas.length <= 0 ?
      
      
        <div className='formContenedor'>
          <p>¿Cuántas personas van a jugar lotería?</p>
          <input id="inputCantidadTablas" type="text" />
          <button id='btnGenerar' onClick={handleBtnGenerar}>Generar</button>
        </div> : null }

      <div className='tablasContenedor'>
        { tablas.length > 0 ?
        tablas.map((tabla) =>
        {
          return(
            <Tabla cartas={tabla.cartas} key={tabla.tabla}></Tabla>
          )
        }) : null }
      </div>
    </div>
  );
}

export default App;
