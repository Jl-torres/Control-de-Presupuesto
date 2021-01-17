import React, {useState} from 'react';
import Error from '../error/error'
import './formulario.css';
import shortid from 'shortid'
import PropTypes from 'prop-types';

const Formulario = ({guardarGasto,guardarCrearGasto}) => {

    const[nombre, guardarNombre]=useState('');
    const[cantidad, guardarCantidad]=useState(0);
    const [error, guardarError]=useState(false);

//Agregar Gasto
   const agregarGasto = e=> {
       e.preventDefault();
//Validar
   if(cantidad < 1 || isNaN(cantidad) || nombre.trim()=== ''){
    guardarError(true);
    return;
    }    

    guardarError(false)
//Construir Gasto
  const gasto = {
      nombre,
      cantidad,
      id: shortid.generate()
  }
  
//pasar el gasto al componente principal
guardarGasto(gasto);
guardarCrearGasto(true);

//resetear formulario
guardarNombre('');
guardarCantidad(0);

   }

    return (
        <form 
        className="formulario"
        onSubmit={agregarGasto}>
           <h2>Agrega tus Gastos</h2>
        { error ?
        <Error mensaje="Ambos campos son obligatorios o Presupuesto incorrecto"/>
        :null }
           <div className="campo">
            <label>Nombre Gasto</label>
            <input
            type="text"
            className="u-full-width"
            placeholder="Ej. Alimentos"
            value={nombre}
            onChange={e=> guardarNombre(e.target.value)}/>

           <label>Cantidad</label>
            <input
            type="number"
            className="u-full-width"
            placeholder="$"
            value={cantidad}
            onChange={e=> guardarCantidad(parseInt(e.target.value))}
            />

          <input 
          type="submit"
          className="button-primary u-full-width"
          value="Agregar Gasto"
          />  


            </div> 
        </form>
    );
};

Formulario.propTypes = {
    guardarGasto:PropTypes.func.isRequired,
    guardarCrearGasto:PropTypes.func.isRequired
};

export default Formulario;