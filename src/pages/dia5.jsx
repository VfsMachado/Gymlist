import React from 'react';
import DiaTreino from '../components/DiaTreino';

const Dia5 = () => {
  const dia = {
    dia: "Dia 5",
    tipo: "Lower (Foco em mobilidade e posterior)",
    exercicios: [
      { nome: "Avanço com halteres", series: "3x12 (cada perna)", imagem: "/images/AvancoComHalteres.jpg" },
      { nome: "Agachamento búlgaro", series: "3x10-12", imagem: "/images/AgachamentoBulgaro.jpg" },
      { nome: "Stiff com halteres", series: "3x12-15", imagem: "/images/StiffComHalteres.jpg" },
      { nome: "Cadeira abdutora", series: "3x15-20", imagem: "/images/CadeiraAbdutora.jpg" },
      { nome: "Panturrilha no leg", series: "4x20", imagem: "/images/PanturrilhaNoLeg.jpg" },
      { nome: "Prancha", series: "3x30-60s", imagem: "/images/Prancha.jpg" }
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

export default Dia5;
