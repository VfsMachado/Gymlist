import React, { useState } from 'react';
import './App.css';
import MenuLateral from './components/MenuLateral.jsx';
import { Routes, Route, Link } from 'react-router-dom';
import Dia1 from './pages/dia1';
import Dia2 from './pages/dia2';
import Dia3 from './pages/dia3';
import Dia4 from './pages/dia4';
import Dia5 from './pages/dia5';
import treinos from './data/treinos';
import { FiMenu, FiX } from 'react-icons/fi';

const App = () => {
  const [treinosData, setTreinosData] = useState(treinos);
  const [menuAberto, setMenuAberto] = useState(false);

  const marcarTodosComoFeitos = () => {
    const novosTreinos = treinosData.map(dia => ({
      ...dia,
      exercicios: dia.exercicios.map(exercicio => ({
        ...exercicio,
        feito: true
      }))
    }));
    setTreinosData(novosTreinos);
  };

  const deletarTarefas = () => {
    setTreinosData([]);
  };

  const toggleMenu = () => {
    setMenuAberto(prev => !prev);
  };

  return (
    <div className={`App ${menuAberto ? 'menu-aberto' : ''}`}>
      <div className="layout">
        {/* Menu Lateral */}
        <MenuLateral
          marcarTodosComoFeitos={marcarTodosComoFeitos}
          deletarTarefas={deletarTarefas}
          isOpen={menuAberto}
          setIsOpen={setMenuAberto}
        />

        {/* Botão único que abre/fecha o menu */}
        <button onClick={toggleMenu} className="menu-toggle-button">
          {menuAberto ? <FiX className="icon" /> : <FiMenu className="icon" />}
        </button>

        {/* Conteúdo principal */}
        <main className={`conteudo ${menuAberto ? 'conteudo-com-menu' : ''}`}>
          <nav className="nav-treinos">
            {treinosData.map((dia, index) => (
              <div className="treino-card" key={index}>
                <Link to={`/dia${index + 1}`}>
                  <button>{`Dia ${index + 1}`}</button>
                </Link>
              </div>
            ))}
          </nav>

          {/* Rotas */}
          <Routes>
            <Route path="/dia1" element={<Dia1 />} />
            <Route path="/dia2" element={<Dia2 />} />
            <Route path="/dia3" element={<Dia3 />} />
            <Route path="/dia4" element={<Dia4 />} />
            <Route path="/dia5" element={<Dia5 />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
