import React, { useState } from 'react';
import './CreateAccountModal.scss';
import Logo from '../Logo2.png';
import GoogleLogo from '../GOOGLE.svg';
import FacebookLogo from '../FACEBOOK.svg';
import FUNDOC from '../Fundo7.jpg';

const CreateAccountModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    nickname: '',
    email: '',
    password: '',
    confirmPassword: '',
    allergies: '',  
    medications: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await fetch('http://localhost:3001/create-account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log('Resultado do servidor:', result);

      onClose();
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }
  };

  return (
    <div className="create-account-modal">
      <img className="background-image" src={FUNDOC} alt="Background" />
      <div className="content">
        <img className="logo" src={Logo} alt="Logo" />
        <div className="form-container">
          <div className="form-header">
            <h2>Criar conta</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
            />


            <label htmlFor="nickname">Apelido</label>
            <input
              type="text"
              id="nickname"
              value={formData.nickname}
              onChange={handleChange}
            />
            <label htmlFor="allergies">Alergias (opcional)</label>
            <input
              type="text"
              id="allergies"
              value={formData.allergies}
              onChange={handleChange}
            />

            <label htmlFor="medications">Medicamentos (opcional)</label>
            <input
              type="text"
              id="medications"
              value={formData.medications}
              onChange={handleChange}
            />

            <label htmlFor="email">Endereço de Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />

            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
            />

            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <input
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />

            <div className="button-container">
              <button className="google-button">
                <img src={GoogleLogo} alt="Google Logo" />
              </button>
              <button className="facebook-button">
                <img src={FacebookLogo} alt="Facebook Logo" />
              </button>
              <button type="submit" className="continue-button">
                Continuar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountModal;