import React from 'react';

const RemoveBookModal = ({ visibility, onClose, onRemove }) => {
  if (!visibility) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo semitransparente
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000, // Garante que o modal fique acima de outros elementos
    }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '5px',
        textAlign: 'center',
        width: '400px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Sombra para destaque
      }}>
        <h3>Remover Livro</h3>
        <input
          type="text"
          placeholder="Buscar livro..."
          style={{
            width: '90%',
            padding: '10px',
            marginBottom: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
          <button
            onClick={onClose}
            style={{
              padding: '10px 15px',
              fontSize: '14px',
              backgroundColor: '#6c757d',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Cancelar
          </button>
          <button
            onClick={onRemove}
            style={{
              padding: '10px 15px',
              fontSize: '14px',
              backgroundColor: '#dc3545',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Remover
          </button>
        </div>
      </div>
    </div>
  );
};

export default RemoveBookModal;