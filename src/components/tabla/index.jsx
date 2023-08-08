import React from 'react';
import './tabla.css';

function Tabla({cartas})
{
    return(
        <div className='tablaContenedor'>
            { cartas != null ? cartas.map((carta) =>
            {
                return(
                    <img src={carta.img} />
                )
            }) : null }
        </div>
    )
}

export default Tabla;