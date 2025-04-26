import React, { useState } from 'react';
import './App.css';
import MenuLateral from './components/MenuLateral.jsx';
import DiaTreino from './components/DiaTreino';

const App = () => {
  // Define os treinos por dia
  const treinos = [
    {
      dia: "Dia 1 - Push",
      exercicios: [
        { nome: "Supino reto com barra", imagem: "supino.jpg", feito: false },
        { nome: "Supino inclinado com halteres", imagem: "supino_inclinado.jpg", feito: false },
        { nome: "Desenvolvimento militar com barra", imagem: "desenvolvimento_militar.jpg", feito: false },
        { nome: "Elevação lateral", imagem: "elevacao_lateral.jpg", feito: false },
        { nome: "Tríceps testa", imagem: "triceps_testa.jpg", feito: false },
        { nome: "Tríceps corda na polia", imagem: "triceps_corda.jpg", feito: false }
      ]
    },
    {
      dia: "Dia 2 - Pull",
      exercicios: [
        { nome: "Barra fixa", imagem: "barra_fixa.jpg", feito: false },
        { nome: "Remada curvada", imagem: "remada_curvada.jpg", feito: false },
        { nome: "Puxada unilateral", imagem: "puxada_unilateral.jpg", feito: false },
        { nome: "Face pull", imagem: "face_pull.jpg", feito: false },
        { nome: "Rosca direta", imagem: "rosca_direta.jpg", feito: false },
        { nome: "Rosca martelo", imagem: "rosca_martelo.jpg", feito: false }
      ]
    },
    // Adicionar os outros dias aqui (Legs, Upper, Lower)
  ];

  const [treinosData, setTreinosData] = useState(treinos);

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
