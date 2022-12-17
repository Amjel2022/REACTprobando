// import logo from './logo.svg';
import Title from './componentes/Title';
import Mascota from './componentes/Mascota';
import Card from './componentes/Card';
import './App.css';

function App() {
  const numeros = [45, 78, 12, 787, 341];

  return (
    <div className="App">
{/* Siempre desde una función .map este presente es NECESARIO UN "return". Las llaves no tienen el return implícito, por eso ponemos () */}
      {numeros.map(numero => (
        <p>El número es: {numero}</p>
      ))}
      
      <Title 
      titulo={'Hola, cómo va?@&'}
      subtitulo={"Este es el subtítulo del Title"}
      />
      
      <Card />
      <Mascota />
      {/* Los componentes nativos del REACT son como los de HTML, para diferenciar escribo las etiquetas que quiero declarar en mayúsculas.  */}
      <header className="App-header">
        
        <img src="images/perritoTierno1.jpg" alt="Perrito" />
        
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


