import React from 'react';
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{
      lineHeight: '1.6',
      color: '#333',
      padding: '20px',
    }}>
      <div style={{
        textAlign: 'center',
        padding: '40px 20px',
        backgroundColor: '#007BFF',
        color: '#fff',
        borderRadius: '10px',
        marginBottom: '30px',
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Bem-vindo à Biblioteca CFT</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
          Explore nosso acervo e descubra um mundo de conhecimento e aventuras.
        </p>
        <button
          style={{
            padding: '15px 30px',
            fontSize: '1.2rem',
            backgroundColor: '#0056b3',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onClick={() => navigate('/acervo')}
          onMouseOver={(e) => e.target.style.backgroundColor = '#003d80'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#0056b3'}
        >
          Explorar Livros
        </button>
      </div>

      <div style={{
        marginBottom: '30px',
        padding: '20px',
        backgroundColor: '#e9ecef',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        lineHeight: '1.8',
      }}>
        <h2 style={{ color: '#007BFF', fontSize: '2rem', marginBottom: '15px' }}>Busca Rápida e Eficiente</h2>
        <ul style={{ listStyleType: 'none', paddingLeft: '20px', fontSize: '1.1rem' }}>
          <li>Barra de pesquisa visível para facilitar a busca por livros ou autores.</li>
          <li>Filtros de pesquisa (por título, autor, ano, disponibilidade, etc.) para facilitar a navegação.</li>
        </ul>

        <h2 style={{ color: '#007BFF', fontSize: '2rem', marginBottom: '15px' }}>Ações</h2>
        <ul style={{ listStyleType: 'none', paddingLeft: '20px', fontSize: '1.1rem' }}>
          <li>Cadastro de livros.</li>
          <li>Atualização de informações.</li>
          <li>Busca por livros com barra de pesquisa e filtros.</li>
          <li>Remoção de livro do acervo.</li>
          <li>Empréstimo e devolução.</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;