import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    
    <nav>
            <div className='capa2'></div>
      <div className='nav'>
    <div className='compraFlor'>
          <Link to="/agregar">Compra Flores</Link>
        <br />
        </div>
        <div className='ventaFlor'>  
          <Link to="/productos">Venta Flores</Link>
        </div>
        <div className='contactos'>
          <Link to="/editar"> Contactos </Link>
        </div> 
      </div>
      <div><br />
      <h3>Bienvenido a florecitas, donde puede concontrar cualquier tipo de flor, 
      para el evento o situacion que lo requiera.</h3>
      <br />
      </div>
    </nav>

  );
}

export default Navigation;
