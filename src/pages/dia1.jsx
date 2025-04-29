import React from 'react';
import DiaTreino from '../components/DiaTreino';

const Dia1 = () => {
  const dia = {
    dia: "Dia 1",
    tipo: "Push (Peito, Ombro, Tríceps)",
    exercicios: [
      { nome: "Supino reto com barra", series: "4x6-8", imagem: "/images/SupinoReto.jpg" },
      { nome: "Supino inclinado com halteres", series: "3x8-10", imagem: "/images/SupinoInclinado.jpg" },
      { nome: "Desenvolvimento militar com barra", series: "4x6-8", imagem: "/images/DesenvolvimentoMilitar.jpg" },
      { nome: "Elevação lateral", series: "3x12-15", imagem: "/images/ElevacaoLateral.jpg" },
      { nome: "Tríceps testa", series: "3x10-12", imagem: "/images/TricepsTesta.jpg" },
      { nome: "Tríceps corda na polia", series: "3x12-15", imagem: "/images/TricepsCorda.jpg" }
    ]
  };

  return (
    <div>
      <h1>{dia.dia}</h1>
      <h2>{dia.tipo}</h2>
      <DiaTreino dia={dia.dia} exercicios={dia.exercicios} />
    </div>
  );
};

export default Dia1;