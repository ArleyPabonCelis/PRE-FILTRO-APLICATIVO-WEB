import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
/* import 'semantic-ui-css/semantic.min.css'; */
import './App.css';
import logo from './img/logo.png'


// Componentes
import Inicio from './components/Inicio.jsx';
import Usuarios from './components/Usuarios.jsx';
import Equipos from './components/Equipos.jsx';
import Implementos from './components/Implementos.jsx';
import Soportes from './components/Soportes.jsx';
import Talleres from './components/Talleres.jsx';


function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navegacion">
          <div className='loguito'>
            <img src={logo} alt="logo" className='logo'></img>
            <p>ByteSaversCampus</p>
          </div>
          <div className="navbar">
            <Link className='btn-nav' to="/">Inicio</Link>
            <Link className='btn-nav'  to="/usuarios">Usuarios</Link>
            <Link className='btn-nav' to="/equipos">Equipos</Link>
            <Link className='btn-nav' to="/implementos">Implementos</Link>
            <Link className='btn-nav' to="/talleres">Talleres</Link>
            <Link className='btn-nav' to="/soportes">Soportes</Link>
          </div>
        </nav>
      </div>
      <div>
          <Routes>
            <Route path="/" exact element={<Inicio/>} />
            <Route path="/usuarios" element={<Usuarios/>} />
            <Route path="/equipos" element={<Equipos/>} />
            <Route path="/implementos" element={<Implementos/>} />
            <Route path="/talleres" element={<Talleres/>} />
            <Route path="/soportes" element={<Soportes/>} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;


