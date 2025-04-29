import React from 'react';
import DiaTreino from '../components/DiaTreino';

const Dia2 = () => {
  const dia = {
    dia: "Dia 2",
    tipo: "Pull (Costas, Bíceps, Posterior de ombro)",
    exercicios: [
      { nome: "Barra fixa (ou puxada na frente)", series: "4x6-8", imagem: "/images/Barrafixa.jpg" },
      { nome: "Remada curvada", series: "4x8-10", imagem: "/images/RemadaCurvada.jpg" },
      { nome: "Puxada unilateral (ou remada baixa)", series: "3x10-12", imagem: "/images/PuxadaUnilateral.jpg" },
      { nome: "Face pull", series: "3x12-15", imagem: "/images/FacePull.jpg" },
      { nome: "Rosca direta", series: "3x10-12", imagem: "/images/RoscaDireta.jpg" },
      { nome: "Rosca martelo", series: "3x12-15", imagem: "/images/RoscaMartelo.jpg" }
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

export default Dia2;
