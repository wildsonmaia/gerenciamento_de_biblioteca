import React, { useState } from 'react';

const RemoveBookModal = ({ visibility, onClose, onRemove, books }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all'); // Estado para o filtro

  // Filtra os livros com base no termo de pesquisa e no filtro selecionado
  const filteredBooks = books.filter((book) => {
    const matchesSearch = searchTerm
      ? filter === 'all' || filter === 'title'
        ? book.title.toLowerCase().includes(searchTerm.toLowerCase())
        : filter === 'author'
        ? book.author.toLowerCase().includes(searchTerm.toLowerCase())
        : filter === 'year'
        ? book.year.toString().includes(searchTerm)
        : filter === 'code'
        ? book.code.toLowerCase().includes(searchTerm.toLowerCase())
        : false
      : true;

    return matchesSearch;
  });

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
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '90%',
            padding: '10px',
            marginBottom: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{
            width: '90%',
            padding: '10px',
            marginBottom: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        >
          <option value="all">Todos</option>
          <option value="title">Título</option>
          <option value="author">Autor</option>
          <option value="year">Ano</option>
          <option value="code">Código</option>
        </select>
        <div style={{
          height: '150px',
          overflowY: 'auto',
          marginBottom: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          padding: '10px',
        }}>
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book, index) => (
              <div
                key={book.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '5px',
                  padding: '5px',
                  borderBottom: '1px solid #eee',
                }}
              >
                <span>{book.title}</span>
                <button
                  onClick={() => onRemove(book.id)}
                  style={{
                    padding: '5px 10px',
                    fontSize: '12px',
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
            ))
          ) : (
            <p style={{ color: '#888' }}>Nenhum livro encontrado.</p>
          )}
        </div>
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
      </div>
    </div>
  );
};

export default RemoveBookModal;