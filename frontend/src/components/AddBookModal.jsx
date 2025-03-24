import React, { useState } from 'react';

const AddBookModal = ({ visibility, onClose, onAdd }) => {

  // Recebe os valores dos inputs (campos do formulário)
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    code: '',
    author: '',
    year: '',
    disponibility: '',
  });

  // Permite alterar os valores dos inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Passa os dados formatados para a função ADICIONAR LIVRO (na Library)
  const handleAdd = () => {
    let bookData = ''

    if (formData.author == '' || formData.code == '' || formData.disponibility == '' || formData.title == '' || formData.year == '') {
      console.log('dados inválidos')
    } else {
      bookData = {
        ...formData, 
        id: parseInt(formData.code, 10) ,
        year: parseInt(formData.year, 10), // Converte o ano para número
        disponibility: formData.disponibility.toLowerCase() === 'true', // Converte disponibilidade para booleano
      };

      onAdd(bookData)
      onClose()
    }
  };

  if (!visibility) return null;

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
        <h3>Adicionar Novo Livro</h3>
        <input
          type="text"
          name="title"
          placeholder="Título"
          value={formData.title}
          onChange={handleChange}
          style={{
            width: '90%',
            padding: '10px',
            marginBottom: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
        <input
          type="text"
          name="code"
          placeholder="Código"
          value={formData.code}
          onChange={handleChange}
          style={{
            width: '90%',
            padding: '10px',
            marginBottom: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
        <input
          type="text"
          name="author"
          placeholder="Autor"
          value={formData.author}
          onChange={handleChange}
          style={{
            width: '90%',
            padding: '10px',
            marginBottom: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
        <input
          type="number"
          name="year"
          placeholder="Ano"
          value={formData.year}
          onChange={handleChange}
          style={{
            width: '90%',
            padding: '10px',
            marginBottom: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
        <select
          name="disponibility"
          value={formData.disponibility}
          onChange={handleChange}
          style={{
            width: '90%',
            padding: '10px',
            marginBottom: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        >
          <option value="">Selecione a disponibilidade</option>
          <option value="true">Disponível</option>
          <option value="false">Indisponível</option>
        </select>
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
            onClick={handleAdd}
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
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBookModal;