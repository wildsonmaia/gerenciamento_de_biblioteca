import React from 'react';

const BookCard = ({ book, onBorrow, onReturn, onUpdate }) => {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '15px',
        textAlign: 'center',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h3 style={{ margin: '10px 0' }}>{book.title}</h3>
      <div style={{ textAlign: 'left', padding: 5, backgroundColor: '#f8f5f5' }}>
        <p><strong>Código:</strong> {book.code}</p>
        <p><strong>Autor:</strong> {book.author}</p>
        <p><strong>Ano:</strong> {book.year}</p>
        <p><strong>Disponível:</strong> {book.disponibility ? 'Sim' : 'Não'}</p>
      </div>

      {/* Botões de Emprestar e Devolver */}
      <div style={{ marginTop: '10px' }}>
        {book.disponibility ? (
          <button
            onClick={onBorrow}
            style={{
              width: '100%',
              padding: '10px 15px',
              fontSize: '14px',
              backgroundColor: '#28a745',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginRight: '10px',
            }}
          >
            Emprestar
          </button>
        ) : (
          <button
            onClick={() => onReturn(book.id)}
            style={{
              width: '100%',
              padding: '10px 15px',
              fontSize: '14px',
              backgroundColor: '#dc3545',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Devolver
          </button>
        )}
        <button
          onClick={() => onUpdate(book.id, book)} // Chama a função de atualização
          style={{
            width: '100%',
            padding: '10px 15px',
            marginTop: '10px',
            fontSize: '14px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Atualizar Informações
        </button>
      </div>
    </div>
  );
};

export default BookCard;