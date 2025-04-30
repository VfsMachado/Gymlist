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
import { FiMenu, FiX, FiCheck, FiTrash2, FiPlus } from 'react-icons/fi';

const App = () => {
  const [treinosData, setTreinosData] = useState(treinos);
  const [menuAberto, setMenuAberto] = useState(false);
  const [activeDay, setActiveDay] = useState(null);

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

  const handleDayClick = (index) => {
    setActiveDay(index);
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

        {/* Botão de menu mobile */}
        <button onClick={toggleMenu} className="menu-toggle-button">
          {menuAberto ? <FiX className="icon" /> : <FiMenu className="icon" />}
        </button>

        {/* Conteúdo Principal */}
        <main className={`conteudo ${menuAberto ? 'conteudo-com-menu' : ''}`}>
          {/* Cabeçalho */}
          <header className="workout-header">
            <h1 className="workout-title">Treino</h1>
            <h2 className="workout-subtitle">Acabado Municipal</h2>
          </header>

          {/* Seção de Opções de Treino */}
          <section className="workout-options">
            <h3>Escolha seu treino:</h3>
            <div className="options-grid">
              <Link to="/treino/1">
                <button className="option-button">Traitoral, Especialista (VRT)</button>
              </Link>
              <Link to="/treino/2">
                <button className="option-button">Smart FT+CD</button>
              </Link>
              <Link to="/treino/3">
                <button className="option-button">Agenciamer</button>
              </Link>
              <Link to="/treino/4">
                <button className="option-button">Smart FT+CD</button>
              </Link>
            </div>
          </section>

          {/* Navegação entre Dias */}
          <nav className="nav-treinos">
            {treinosData.map((dia, index) => (
              <div 
                className={`treino-card ${activeDay === index ? 'active' : ''}`} 
                key={index}
                onClick={() => handleDayClick(index)}
              >
                <Link to={`/dia${index + 1}`}>
                  <button className="day-button">
                    <span className="day-number">Dia {index + 1}</span>
                    <span className="day-focus">{dia.foco}</span>
                  </button>
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
