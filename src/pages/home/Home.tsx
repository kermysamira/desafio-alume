import { useNavigate } from 'react-router-dom';
import Form from '../../components/Forms';
import React from 'react';
import './home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (data: any) => {
    navigate('/success', { state: { data } });
  };

  return (
    <main className="main">
      <div className="container">
        <div className="image-section">
          <img
            className="image"
            src="https://github.com/kermysamira/desafio-alume/blob/main/rocket-illustration.jpg?raw=true"
            alt=""
          />
        </div>
        <div className="form-section">
          <h1 className="form-title">
            Bem-vindo à Agência de Viagens Espaciais
          </h1>
          <Form onSubmit={handleFormSubmit} />
        </div>
      </div>
    </main>
  );
};

export default Home;
