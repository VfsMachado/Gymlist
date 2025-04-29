import React from 'react';
import DiaTreino from '../components/DiaTreino'; // Componente para exibir os exercícios
import treinos from '../data/treinos'; // Dados dos treinos

const Dia1 = () => {
  const dia1 = treinos[0]; // Pega os dados do Dia 1
  return (
    <div>
      <h1>{`Treino do ${dia1.dia}`}</h1>
      <DiaTreino dia={dia1.dia} exercicios={dia1.exercicios} />
    </div>
  );
};

export default Dia1;