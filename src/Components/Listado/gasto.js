import React from 'react';
import './gasto.css';
import PropTypes from 'prop-types';

const Gasto = ({gasto}) => {
    return (
        <div className="contenedor-gasto">
            <li className="gastos">
            <div className="contenedor2">
            <div><p>{gasto.nombre}</p></div>
            <div><p><span className="gasto">$ {gasto.cantidad} </span></p></div>
            </div>
            </li>
        </div>
    );
};

Gasto.propTypes = {
    gastos: PropTypes.object.isRequired
};

export default Gasto;