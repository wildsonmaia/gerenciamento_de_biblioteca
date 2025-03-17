import React from 'react';

const LendBookModal = ({ visibility, onClose, onLend, book }) => {
  if (!visibility || !book) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '5px',
        textAlign: 'center',
        width: '400px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}>
        <h3>Emprestar Livro</h3>
        <p><strong>Título:</strong> {book.title}</p>
        <p><strong>Autor:</strong> {book.author}</p>
        <p><strong>Código:</strong> {book.code}</p>
        <p><strong>Ano:</strong> {book.year}</p>
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
            onClick={() => onLend(book.id)}
            style={{
              padding: '10px 15px',
              fontSize: '14px',
              backgroundColor: '#28a745',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Confirmar Empréstimo
          </button>
        </div>
      </div>
    </div>
  );
};

export default LendBookModal;