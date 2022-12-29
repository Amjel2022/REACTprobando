import {Routes, Route} from 'react-router-dom';

import './App.css';
import CardWrapper from './componentes/CardWrapper';

import Home from './paginas/Home';
import Nosotros from './paginas/Nosotros';
import Layout from './paginas/Layout';
//import Navegacion from './componentes/Navegacion';

function App() {
  return (
    <div className="App">
      {/* <Navegacion /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="nosotros" element={<Nosotros/>} />
        </Route>
      </Routes>
      
      <CardWrapper 
        titulo ={'Ofertas'}
      />
    </div>
  );
}

export default App;


