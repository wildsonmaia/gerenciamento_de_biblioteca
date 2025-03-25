import React from 'react';
import { useNavigate } from "react-router"

const Home = () => {

  const navigate = useNavigate()

  return (
    <div>   
      {/* Conteúdo Principal */}
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Bem-vindo à Biblioteca</h1>
        <p>Explore nosso acervo e descubra um mundo de conhecimento e aventuras.</p>
        <button 
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
          onClick={() => navigate('/acervo')}
        >
          Explorar Livros
        </button>        
      </div>
    </div>
  );
};

export default Home;