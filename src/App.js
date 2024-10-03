import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CifradoCesar from './componentes/CifradoCesar';
import CifradoEscitala from './componentes/CifradoEscitala';
import CifradoAES from './componentes/CifradoAES';
import CifradoDiffieHellman from './componentes/CifradoDiffieHellman';
import CifradoHashRipemd from './componentes/CifradoHashRipemd';
import { ToastContainer } from 'react-toastify'; // Asegúrate de importar ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Asegúrate de importar los estilos de Toastify

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Aplicación de Cifrados</h1>

        {/* Menú de navegación */}
        <div className="navbar">
          <Link to="/cesar">Cifrado César</Link>
          <Link to="/escitala">Cifrado Escítala</Link>
          <Link to="/aes">Cifrado AES</Link>
          <Link to="/diffie-hellman">Diffie-Hellman</Link>
          <Link to="/ripemd">RIPEMD-160</Link>
        </div>

        {/* Rutas para los componentes */}
        <Routes>
          <Route path="/cesar" element={<CifradoCesar />} />
          <Route path="/escitala" element={<CifradoEscitala />} />
          <Route path="/aes" element={<CifradoAES />} />
          <Route path="/diffie-hellman" element={<CifradoDiffieHellman />} />
          <Route path="/ripemd" element={<CifradoHashRipemd />} />
        </Routes>

        <ToastContainer /> {/* Asegúrate de incluir esto */}
      </div>
    </Router>
  );
}

export default App;
