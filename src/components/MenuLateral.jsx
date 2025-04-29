import React, { useState } from 'react';
import { FiCheckCircle, FiTrash2, FiLogOut, FiX, FiMenu } from 'react-icons/fi';

const MenuLateral = ({ marcarTodosComoFeitos, deletarTarefas, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([
    { 
      id: 1, 
      text: 'Marcar todas como concluídas', 
      icon: <FiCheckCircle className="icon" />,
      action: marcarTodosComoFeitos 
    },
    { 
      id: 2, 
      text: 'Deletar todas as tarefas', 
      icon: <FiTrash2 className="icon" />,
      action: deletarTarefas 
    },
    { 
      id: 3, 
      text: 'Sair', 
      icon: <FiLogOut className="icon" />,
      action: onLogout 
    }
  ]);

  const handleAction = (item) => {
    item.action();
    setIsOpen(false);
  };

  return (
    <div className="menu-container">
      <button 
        className="menu-toggle-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FiMenu className="icon" /> Menu
      </button>

      {isOpen && (
        <div className="menu-lateral">
          <div className="menu-header">
            <h3>Menu</h3>
            <button 
              className="close-menu-button"
              onClick={() => setIsOpen(false)}
            >
              <FiX className="icon" />
            </button>
          </div>

          <div className="menu-items">
            {menuItems.map((item) => (
              <div 
                key={item.id} 
                className="menu-item"
                onClick={() => handleAction(item)}
              >
                {item.icon}
                <span className="menu-text">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="menu-days">
            <h4>Dias de Treino</h4>
            <div className="day-item">Dia 3</div>
            <div className="day-item">Dia 4</div>
            <div className="day-item">Dia 5</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuLateral;