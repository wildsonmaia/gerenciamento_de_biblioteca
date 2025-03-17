import React, { useEffect, useState } from 'react';
import BookCard from '../components/BookCard';
import AddBookModal from '../components/AddBookModal';
import RemoveBookModal from '../components/RemoveBookModal';
import axios from 'axios'
import LendBookModal from '../components/LendBookModal';

const Library = () => {
  const [books, setBooks] = useState([]);
  let [selectedBook, setSelectedBook] = useState(null);
  const [ showLendBookModal, setShowLendBookModal ] = useState(false)

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

  const removeBook = async (bookId) => {
    try {
      await axios.delete(`http://localhost:3000/livros/${bookId}`);
      setBooks(books.filter((book) => book.id !== bookId)); // Remove o livro do estado local
      closeRemoveModal();
    } catch (error) {
      console.error('Erro ao remover livro:', error);
    }
    listBooks()
  };

  const lendBook = async (bookId) => {
    try {
      // Encontra o livro a ser emprestado
      const bookToLend = books.find((book) => book.id === bookId);
      if (!bookToLend || !bookToLend.disponibility) {
        alert('Este livro não está disponível para empréstimo.');
        return;
      }
  
      // Atualiza a disponibilidade do livro para "false"
      const updatedBook = { ...bookToLend, disponibility: false };
      await axios.put(`http://localhost:3000/livros/${bookId}`, updatedBook);
  
      // Atualiza o estado local com o livro atualizado
      setBooks(books.map((book) => (book.id === bookId ? updatedBook : book)));
      /* alert(`O livro "${bookToLend.title}" foi emprestado com sucesso.`); */
    } catch (error) {
      console.error('Erro ao emprestar livro:', error);
    }
  };

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
            onBorrow={() => {
              setSelectedBook(book); // Define o livro selecionado
        setShowLendBookModal(true);
            }}
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
        books={books} 
        />
      }
      {showLendBookModal && (
        <LendBookModal
          visibility={showLendBookModal}
          onClose={() => setShowLendBookModal(false)}
          onLend={(bookId) => {
            lendBook(bookId); // Função para emprestar o livro
            setShowLendBookModal(false); // Fecha o modal após o empréstimo
          }}
          book={selectedBook} // Passa o livro selecionado para o modal
        />
      )}
    </div>
  );
};

export default Library;