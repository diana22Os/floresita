import React from 'react';
import { Link } from 'react-router-dom';


const PharmacyComponent = () => {
  return (
    
    <div>
      <Link to={`/editar/`}></Link>
      <div className='capa3' ></div>

      <h2>Contactos</h2>
      <h3>Florecitas esta a su disposición para realizar algun pedido</h3>
      <h3>puede ponerse en contacto al siguiente número.</h3>
    </div>
  );
};

export default PharmacyComponent;