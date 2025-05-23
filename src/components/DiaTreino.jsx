// components/DiaTreino.js
import React from 'react';
import { FiCheckCircle, FiClock } from 'react-icons/fi';

const DiaTreino = ({ exercicios }) => {
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
              <div className="pr-input-container">
              <label htmlFor="pr" className="pr-label">Seu PR:</label>
              <input 
                type="number" 
                id="pr" 
                name="pr" 
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