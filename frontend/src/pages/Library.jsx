import React, { useState } from 'react';
import BookCard from '../components/BookCard';
import AddBookModal from '../components/AddBookModal';
import RemoveBookModal from '../components/RemoveBookModal';

const Library = () => {
  const [books, setBooks] = useState([
    { id: 1, code: 'B001', title: 'O Senhor dos Anéis', author: 'J.R.R. Tolkien', year: 1954, category: 'Fantasia', disponibility: true },
    { id: 2, code: 'B002', title: '1984', author: 'George Orwell', year: 1949, category: 'Ficção Científica', disponibility: false },
    { id: 3, code: 'B003', title: 'Dom Casmurro', author: 'Machado de Assis', year: 1899, category: 'Clássico', disponibility: true },
    { id: 4, code: 'B004', title: 'Harry Potter', author: 'J.K. Rowling', year: 1997, category: 'Fantasia', disponibility: false },
    { id: 5, code: 'B005', title: 'A Revolução dos Bichos', author: 'George Orwell', year: 1945, category: 'Ficção Científica', disponibility: true },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [ showAddModal, setShowAddModal ] = useState(false)
  const [ showRemoveModal, setShowRemoveModal ] = useState(false)

  // Função para adicionar um novo livro
  const addBook = () => {
    const newBook = {
      id: books.length + 1,
      code: `B00${books.length + 1}`,
      title: 'Novo Livro',
      author: 'Autor Desconhecido',
      year: new Date().getFullYear(),
      category: 'Fantasia',
      disponibility: true,
    };
    setBooks([...books, newBook]);
    closeAddModal()
  };

  // Função para remover o último livro
  const removeLastBook = () => {
    if (books.length > 0) {
      setBooks(books.slice(0, -1));
    }
  };

  // Filtrar os livros com base na barra de pesquisa e no seletor de filtro
  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || book.category === filter;
    return matchesSearch && matchesFilter;
  });

  function closeAddModal(){
    setShowAddModal(false)
  }

  function closeRemoveModal(){
    setShowRemoveModal(false)
  }

  function removeBook(){
    removeLastBook()
    closeRemoveModal()
  }

  return (
    <div style={{ padding: '20px' }}>
      {/* Barra de Pesquisa */}
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <input
          type="text"
          placeholder="Pesquisar livros..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            flex: 1,
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
        {/* Seletor de Filtro */}
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        >
          <option value="all">Todos</option>
          <option value="Fantasia">Fantasia</option>
          <option value="Ficção Científica">Ficção Científica</option>
          <option value="Clássico">Clássico</option>
        </select>
      </div>

      {/* Botões de Adicionar e Remover */}
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <button
          onClick={() => setShowAddModal(!showAddModal)}
          style={{
            padding: '10px 15px',
            fontSize: '16px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Adicionar Livro
        </button>
        <button
          onClick={() => setShowRemoveModal(!showRemoveModal)}
          style={{
            padding: '10px 15px',
            fontSize: '16px',
            backgroundColor: '#dc3545',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Remover Livro
        </button>
      </div>

      {/* Lista de Livros */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '20px',
      }}>
        {filteredBooks.map((book) => (
          <BookCard
            key={book.id}
            book={book}
          />
        ))}
      </div>
      {showAddModal && 
        <AddBookModal 
          visibility={showAddModal} 
          onClose={closeAddModal} 
          onAdd={addBook} 
          />
      }
      {showRemoveModal && 
        <RemoveBookModal 
          visibility={showRemoveModal} 
          onClose={closeRemoveModal} 
          onRemove={removeBook} 
        />
      }
    </div>
  );
};

export default Library;