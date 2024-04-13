import logo from './logo.svg';
import './App.css';
import freeCodecampLogo from './imagenes/logo-freecodecamp.png'
import Contador from './componentes/Contador.js';
import Boton from './componentes/Boton';
import './Boton.css';
import './Contador.css';

function App() {

const manejarClick = () => {
  console.log("click");
}

const reiniciarContador = () =>{
  console.log('reiniciar')
}

  return (
  <div className='app'>
    <div className='freecodecamp-logo-contenedor'>
      <img
      className='freecodecamp-logo'
      src={freeCodecampLogo}
      alt='logo-freecodecamp'
      />

    </div>
    
    <div className='contenedor-principal'>

    <Contador 
      numClicks='5'
      />

      <Boton 
      texto='click'
      esBotonDeClick={true}
      manejarClick={manejarClick}

      />
      <Boton 
            texto='Reiniciar'
            esBotonDeClick={false}
            manejarClick={reiniciarContador}
      />

    </div>
  </div>  
  );
}

export default App;
