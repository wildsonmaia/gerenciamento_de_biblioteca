import React, { useState } from 'react';

const UpdateBookModal = ({ visibility, onClose, onUpdate, book }) => {
  const [formData, setFormData] = useState({
      id: book.id,
      title: book.title,
      code: book.code,
      author: book.author,
      year: book.year,
      disponibility: book.disponibility ? 'true' : 'false'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

    const handleSubmit = () => {
        let bookData = {
            ...formData,
            id: parseInt(formData.code, 10),
            year: parseInt(formData.year, 10), 
            disponibility: formData.disponibility.toLowerCase() === 'true',
        };

        onUpdate(bookData);
        onClose();
    };

  if (!visibility || !book) return null;

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
        <h3>Atualizar Informações do Livro</h3>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Título"
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
          value={formData.author}
          onChange={handleChange}
          placeholder="Autor"
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
          value={formData.year}
          onChange={handleChange}
          placeholder="Ano"
          style={{
            width: '90%',
            padding: '10px',
            marginBottom: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
        <button
            onClick={onClose}
            style={{
              padding: '10px 15px',
              fontSize: '14px',
              backgroundColor: '#dc3545',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Cancelar
          </button>
          <button
            onClick={handleSubmit}
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
            Salvar
          </button>          
        </div>
      </div>
    </div>
  );
};

export default UpdateBookModal;