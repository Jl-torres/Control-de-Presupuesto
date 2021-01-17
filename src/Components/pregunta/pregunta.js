import React, {Fragment, useState} from 'react';
import Error from '../error/error'
import PropTypes from 'prop-types';

const Pregunta = ({
guardarPresupuesto, 
guardarRestante, 
ocultarPregunta}) => {

//State
  const [cantidad, guardarCantidad]=useState(0);

  const [error, guardarError]=useState(false)

//Presupuesto
   const definirPresupuesto= e=> {
       guardarCantidad(parseInt(e.target.value, 10))
   }

//Submit
    const agregarPresupuesto= e => {
       e.preventDefault();

//Validacion   
    if(cantidad < 1 || isNaN(cantidad)){
        guardarError(true);
        return;
        }  
       
 //Validacion Correcta
    guardarError(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    ocultarPregunta(false);            
    }  

    
    return (
        <Fragment>
          
         <h2>Coloca tu presupuesto</h2>
         {error ? <Error mensaje="El Presupuesto es Incorrecto"/> :null}
         <form onSubmit={agregarPresupuesto}>
             <input
             type="number"
             className="u-full-width"
             placeholder="Coloca tu Presupuesto"
             onChange={definirPresupuesto}/>

             <input
             type="submit"
             className="button-primary u-full-width"
             value="Definir Presupuesto"/>

         </form>
          
        </Fragment>
    );
};

Pregunta.propTypes = {
    guardarPresupuesto:PropTypes.func.isRequired,
    guardarRestante:PropTypes.func.isRequired,
    guardarPregunta:PropTypes.func
};

export default Pregunta;