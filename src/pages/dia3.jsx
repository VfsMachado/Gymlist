import React from 'react';
import DiaTreino from '../components/DiaTreino';

const Dia3 = () => {
  const dia = {
    dia: "Dia 3",
    tipo: "Legs (Pernas completas)",
    exercicios: [
      { nome: "Agachamento livre", series: "4x6-8", imagem: "/images/AgachamentoLivre.jpg" },
      { nome: "Leg press", series: "4x10-12", imagem: "/images/LegPress.jpg" },
      { nome: "Cadeira extensora", series: "3x12-15", imagem: "/images/CadeiraExtensora.jpg" },
      { nome: "Mesa flexora", series: "3x12-15", imagem: "/images/MesaFlexora.jpg" },
      { nome: "Stiff", series: "3x10-12", imagem: "/images/Stiff.jpg" },
      { nome: "Elevação de panturrilha", series: "4x15-20", imagem: "/images/ElevacaoPanturrilha.jpg" }
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

export default Dia3;
