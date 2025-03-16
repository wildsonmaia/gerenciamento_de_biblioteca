import React, { useEffect, useState } from 'react';
import BookCard from '../components/BookCard';
import AddBookModal from '../components/AddBookModal';
import RemoveBookModal from '../components/RemoveBookModal';
import axios from 'axios'

const Library = () => {
  const [books, setBooks] = useState([]);  

  const listBooks = async () => {
    try {
      const response = await axios.get('http://localhost:3000/livros')
      setBooks(response.data)
    } catch (error) {
      console.error('Erro ao buscar livros:', error)
    }
  }

  useEffect(() => {   
    listBooks()
  }, [])

  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [ showAddModal, setShowAddModal ] = useState(false)
  const [ showRemoveModal, setShowRemoveModal ] = useState(false)

  // Função para adicionar um novo livro
  const addBook = async (newBook) => {
    try {
      const response = await axios.post('http://localhost:3000/livros', newBook);
      setBooks([...books, response.data]);
      closeAddModal();
    } catch (error) {
      console.error('Erro ao adicionar livro:', error);
    }

    listBooks()
  };

  // Função para remover o último livro
  const removeLastBook = () => {
    if (books.length > 0) {
      setBooks(books.slice(0, -1));
    }
  };

  // Filtrar os livros com base na barra de pesquisa e no seletor de filtro
  const filteredBooks = books.filter((book) => {
    return book
    /* const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || book.category === filter;
    return matchesSearch && matchesFilter; */
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
        {
        filteredBooks.map((book, index) => (
          <BookCard
            key={index}
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