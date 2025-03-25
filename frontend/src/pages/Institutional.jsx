import React from 'react';

const Institutional = () => {
  return (
    <div style={{
      padding: '40px',
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.8',
      backgroundColor: '#f9f9f9',
      color: '#333',
      textAlign: 'center'
    }}>
      <h1 style={{
        textAlign: 'center',
        color: '#007BFF',
        marginBottom: '20px',
        fontSize: '2.5rem',
      }}>
        Sobre a Biblioteca CFT
      </h1>
      <p style={{
        textAlign: 'center',
        fontSize: '1.2rem',
        marginBottom: '30px',
      }}>
        Bem-vindo à nossa biblioteca! Nosso objetivo é promover o acesso ao conhecimento e à cultura,
        oferecendo um espaço acolhedor para leitura, estudo e pesquisa.
      </p>
      <h2 style={{
        color: '#007BFF',
        fontSize: '2rem',
        marginBottom: '15px',
      }}>
        Nossa Missão
      </h2>
      <p style={{
        fontSize: '1.1rem',
        marginBottom: '30px',
      }}>
        Facilitar o acesso à informação e incentivar o hábito da leitura, contribuindo para o
        desenvolvimento educacional e cultural da comunidade.
      </p>
      <h2 style={{
        color: '#007BFF',
        fontSize: '2rem',
        marginBottom: '15px',
      }}>
        Nossos Valores
      </h2>
      <ul style={{
        listStyleType: 'disc',
        paddingLeft: '20px',
        fontSize: '1.1rem',
        marginBottom: '30px',
        listStyle: 'none'
      }}>
        <li>Inclusão e acessibilidade</li>
        <li>Respeito à diversidade</li>
        <li>Promoção do conhecimento</li>
        <li>Inovação e tecnologia</li>
      </ul>
      <h2 style={{
        color: '#007BFF',
        fontSize: '2rem',
        marginBottom: '15px',
      }}>
        Contato
      </h2>
      <p style={{
        fontSize: '1.1rem',
        marginBottom: '15px',
      }}>
        Caso tenha dúvidas ou sugestões, entre em contato conosco:
      </p>
      <ul style={{
        listStyleType: 'none',
        paddingLeft: '0',
        fontSize: '1.1rem',
      }}>
        <li style={{ marginBottom: '10px' }}>
          <strong>Email:</strong> institucional@bibliotecacft.com
        </li>
        <li style={{ marginBottom: '10px' }}>
          <strong>Telefone:</strong> (85) 9998765-5678
        </li>
        <li>
          <strong>Endereço:</strong> Avenida Desembargador Moreira, 1301 - Aldeota, Fortaleza, CE
        </li>
      </ul>
    </div>
  );
};

export default Institutional;