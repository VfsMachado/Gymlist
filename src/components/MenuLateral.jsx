import React from 'react';

const MenuLateral = ({ marcarTodosComoFeitos, deletarTarefas }) => {
  return (
    <div className="menu-lateral">
      <button onClick={marcarTodosComoFeitos}>Marcar todas as tarefas como concluídas</button>
      <button onClick={deletarTarefas}>Deletar tarefas</button>
      <button>Sair</button>
    </div>
  );
};

export default MenuLateral;
