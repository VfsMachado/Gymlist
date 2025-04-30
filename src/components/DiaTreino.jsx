import React, { useState, useEffect } from 'react';
import { FiCheckCircle, FiClock } from 'react-icons/fi';

const DiaTreino = ({ exercicios }) => {
  const [prValues, setPrValues] = useState({});

  // Carregar os PRs armazenados no localStorage
  useEffect(() => {
    const savedPrValues = JSON.parse(localStorage.getItem('prValues')) || {};
    setPrValues(savedPrValues);
  }, []);

  // Função para salvar o PR no localStorage
  const handlePrChange = (exercicioIndex, event) => {
    const newPr = event.target.value;
    const newPrValues = { ...prValues, [exercicioIndex]: newPr };
    setPrValues(newPrValues);
    localStorage.setItem('prValues', JSON.stringify(newPrValues));  // Salva os PRs no localStorage
  };

  return (
    <div className="treino-container">
      <div className="exercicio-list">
        {exercicios.map((exercicio, index) => (
          <div key={index} className="exercicio-card">
            <div className="exercicio-header">
              <h3>{exercicio.nome}</h3>
              <span className="series">{exercicio.series}</span>
            </div>
            {exercicio.imagem && (
              <div className="exercicio-image">
                <img src={exercicio.imagem} alt={exercicio.nome} />
              </div>
            )}
            <div className="exercicio-actions">
              <button className="action-button complete">
                <FiCheckCircle /> Concluir
              </button>
              
              {/* Input para PR */}
              <div className="pr-input-container">
                <label htmlFor={`pr-${index}`} className="pr-label">Seu PR:</label>
                <input 
                  type="number" 
                  id={`pr-${index}`} 
                  name={`pr-${index}`} 
                  value={prValues[index] || ''}  // Exibe o PR salvo ou vazio
                  onChange={(event) => handlePrChange(index, event)}  // Atualiza o PR
                  placeholder="Ex: 100 kg" 
                  className="pr-input"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiaTreino;
