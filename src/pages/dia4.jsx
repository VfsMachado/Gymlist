import React from 'react';
import DiaTreino from '../components/DiaTreino';

const Dia4 = () => {
  const dia = {
    dia: "Dia 4",
    tipo: "Upper (Corpo superior geral)",
    exercicios: [
      { nome: "Supino reto halteres", series: "3x10-12", imagem: "/images/SupinoRetoHalteres.jpg" },
      { nome: "Pull down (ou barra)", series: "3x10-12", imagem: "/images/PullDown.jpg" },
      { nome: "Crucifixo máquina", series: "3x12-15", imagem: "/images/CrucifixoMaquina.jpg" },
      { nome: "Remada unilateral", series: "3x10-12", imagem: "/images/RemadaUnilateral.jpg" },
      { nome: "Elevação frontal", series: "3x15", imagem: "/images/ElevacaoFrontal.jpg" },
      { nome: "Tríceps francês + Rosca direta", series: "3x12", imagem: "/images/TricepsFrancesRoscaDireta.jpg" }
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

export default Dia4;
