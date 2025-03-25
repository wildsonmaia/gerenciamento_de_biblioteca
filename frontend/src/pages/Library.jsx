import React, { useEffect, useState } from 'react';
import axios from 'axios'
import BookCard from '../components/BookCard';
import AddBookModal from '../components/AddBookModal';
import RemoveBookModal from '../components/RemoveBookModal';
import LendBookModal from '../components/LendBookModal';
import UpdateBookModal from '../components/UpdateBookModal';

const Library = () => {

  const [books, setBooks] = useState([]);
  let [selectedBook, setSelectedBook] = useState(null);
  const [ showLendBookModal, setShowLendBookModal ] = useState(false)

  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [ showAddModal, setShowAddModal ] = useState(false)
  const [ showRemoveModal, setShowRemoveModal ] = useState(false)
  const [ showUpdateModal, setShowUpdateModal ] = useState(false);

  // Função Listar Livros
  async function listBooks() {
    try {
      const response = await axios.get('http://localhost:3000/livros');
      setBooks(response.data);
    } catch (error) {
      console.error('Erro ao buscar livros:', error);
    }
  }

  // Função Listar Livros ao Recarregar a Página
  useEffect(() => {   
    listBooks()
  }, [])

  // Filtrar os livros com base na barra de pesquisa e no seletor de filtro
  const filteredBooks = books.filter((book) => {
    const matchesSearch = searchTerm
      ? filter === 'all' || filter === 'title'
        ? book.title.toLowerCase().includes(searchTerm.toLowerCase())
        : filter === 'author'
          ? book.author.toLowerCase().includes(searchTerm.toLowerCase())
          : filter === 'year'
            ? book.year.toString().includes(searchTerm)
            : false
      : true;

    return matchesSearch;
  });

  // Função para adicionar um livro
  async function addBook(newBook){
    try {
      console.log(newBook)
      await axios.post('http://localhost:3000/livros', newBook);
      closeAddModal();
    } catch (error) {
      console.error('Erro ao adicionar livro:', error);
    }

    listBooks()    
  };

  // Função para deletar um livro
  async function removeBook(bookId){
    try {
      await axios.delete(`http://localhost:3000/livros/${bookId}`);
      closeRemoveModal();
    } catch (error) {
      console.error('Erro ao remover livro:', error);
    }
    listBooks()
  };

  // Função para atualizar um livro
  async function updateBook(updatedBook){
    try {
      await axios.put(`http://localhost:3000/livros/${updatedBook.id}`, updatedBook);
      closeUpdateModal();
      listBooks()

    } catch (error) {
      console.error('Erro ao atualizar livro:', error);
    }
  }

  // Função fechar modal de Cadastro de Livro
  function closeAddModal(){
    setShowAddModal(false)
  }

  // Função fechar modal de Remoção de Livro
  function closeRemoveModal(){
    setShowRemoveModal(false)
  }

  // Função fechar modal de Atualização de Informações do Livro
  function closeUpdateModal(){
    setShowUpdateModal(false)
  }

  // Função para emprestar livro
  async function lendBook(bookId){
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

  // Função para devolver livro
  async function returnBook(bookId){
    try {
      // Encontra o livro a ser devolvido
      const bookToReturn = books.find((book) => book.id === bookId);
      if (!bookToReturn || bookToReturn.disponibility) {
        alert('Este livro já está disponível.');
        return;
      }
  
      // Atualiza a disponibilidade do livro para "true"
      const updatedBook = { ...bookToReturn, disponibility: true };
      updateBook(updatedBook);
      alert(`O livro "${bookToReturn.title}" foi devolvido com sucesso.`);
    } catch (error) {
      console.error('Erro ao devolver livro:', error);
    }
  };

  return (
    <div style={{ padding: '20px',  }}>

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
          <option value="title">Título</option>
          <option value="author">Autor</option>
          <option value="year">Ano de publicação</option>
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
          onClick={() => setShowRemoveModal(true)}
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
            onReturn={() => returnBook(book.id)}
            onUpdate={() => {
              setSelectedBook(book)
              setShowUpdateModal(true)
            }}
          />
        ))}
      </div>

      {/* Modal Cadastrar Livro  */}
      {showAddModal && 
        <AddBookModal 
          visibility={showAddModal} 
          onClose={closeAddModal} 
          onAdd={addBook} 
          />
      }

      {/* Modal Deletar Livro  */}
      {showRemoveModal && 
        <RemoveBookModal 
        visibility={showRemoveModal} 
        onClose={closeRemoveModal} 
        onRemove={removeBook}
        books={books} 
        />
      }

      {/* Modal Atualizar Livro  */}
      {showUpdateModal && 
        <UpdateBookModal
          visibility={showUpdateModal} 
          onClose={closeUpdateModal} 
          onUpdate={updateBook}
          book={selectedBook}
        />
      }

      {/* Modal Emprestar Livro  */}
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