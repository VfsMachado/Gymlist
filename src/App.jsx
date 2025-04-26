import React, { useState } from 'react';
import './App.css';
import MenuLateral from './components/MenuLateral.jsx';
import DiaTreino from './components/DiaTreino';
import treinos from './data/treinos'; // <-- aqui você importa

const App = () => {
  const [treinosData, setTreinosData] = useState(treinos); // <-- usa o importado

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

  return (
    <div className="App">
      <MenuLateral
        marcarTodosComoFeitos={marcarTodosComoFeitos}
        deletarTarefas={deletarTarefas}
      />
      <div className="treinos-container">
        {treinosData.map((dia, index) => (
          <DiaTreino key={index} dia={dia.dia} exercicios={dia.exercicios} />
        ))}
      </div>
    </div>
  );
};

export default App;
