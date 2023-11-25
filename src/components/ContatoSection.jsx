import React from 'react';
import './ContatoSection.scss'; 

const ContatoSection = () => {
  return (
    <section id='contato'>
    <div className="contato-section">
      <div className="square-container">
        <div className="text-container">
          <div className="title">Ainda com dúvidas?</div>
          <p>Caso tenha ficado com alguma dúvida sobre a gente, entre em contato pelo botão ao lado!</p>
        </div>
        <button className="contato-button">Contato</button>
      </div>
    </div>
    </section>
  );
};

export default ContatoSection;