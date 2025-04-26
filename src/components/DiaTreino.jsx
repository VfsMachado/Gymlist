import React, { useState } from 'react';

const DiaTreino = ({ dia, exercicios }) => {
  const [exerciciosData, setExerciciosData] = useState(exercicios);

  const toggleFeito = (index) => {
    const novosExercicios = [...exerciciosData];
    novosExercicios[index].feito = !novosExercicios[index].feito;
    setExerciciosData(novosExercicios);
  };

  return (
    <div className="dia-treino">
      <h2>{dia}</h2>
      {exerciciosData.map((exercicio, index) => (
        <div className="card" key={index}>
          <img
            src={exercicio.imagem} // Usando o link da imagem que você passou no arquivo treinos.js
            alt={exercicio.nome}
            className="imagem-exercicio"
          />
          <div className="info">
            <p>{exercicio.nome}</p>
            <p>{exercicio.series}</p>
            <input
              type="checkbox"
              checked={exercicio.feito}
              onChange={() => toggleFeito(index)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DiaTreino;
