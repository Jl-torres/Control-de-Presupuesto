import React, {useState, useEffect} from 'react'
import Pregunta from './pregunta/pregunta'
import Formulario from './Formulario/formulario'
import Listado from './Listado/Listado'
import ControlPresupuesto from './ControlPresupuesto/ControlPresupuesto'
import './App.css';

function App() {
  //State
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarPregunta, ocultarPregunta] = useState(true);
  const [gastos, guardarGastos]=useState([]);
  const [gasto, guardarGasto]=useState({});
  const [creargasto, guardarCrearGasto]=useState(false);


//Actualizar restante
    useEffect(() => {
      if(creargasto){
        guardarGastos([
        ...gastos,
        gasto
        ]);
        //restar del presupuesto

        const presupuestoRestante= restante - gasto.cantidad
        guardarRestante(presupuestoRestante)

        //resetear
        guardarCrearGasto(false);
      }
   }, [gasto, creargasto,gastos, restante]) ;   
//Gastos Nuevos
 
  return (
    <div className="App">
      <h1>Gasto Semanal</h1>
      
      <div className="contenido-principal contenido">
        {mostrarPregunta ? 
      (<Pregunta
      guardarPresupuesto={guardarPresupuesto}
      guardarRestante={guardarRestante}
      ocultarPregunta={ocultarPregunta}/>) 
     
      :

     ( <div className="row">
         <div className="one-half column">
        <Formulario
        guardarGasto={guardarGasto}
        guardarCrearGasto={guardarCrearGasto}/>
         </div>
        <div className="one-half column">
          <Listado
          gastos={gastos}/>
          <ControlPresupuesto
          presupuesto={presupuesto}
          restante={restante}/>
        </div>
       </div>
        )       
     }
        </div>
         </div>
      
  );
}

export default App;
