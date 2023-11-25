import React from 'react';
import './ProductSection.scss';
import SOLAR from '../cell.png';

const ProductSection = () => {
  return (
    <section id='produtos'>
    <div className="product-section">
      <div className="container">
        <div className="content">
          <div className="image-container">
            <img src={SOLAR} alt="Produto" />
          </div>

          <div className="text-container">
            <div className="category">PRODUTOS</div>
            <div className="title">Nossos produtos</div>
            <p>
            Seu bem-estar está em primeiro lugar, e é por isso que apresentamos uma solução completa para cuidar da sua saúde de maneira eficiente e conveniente. Com MedPlan, simplificamos o processo de agendamento de consultas e oferecemos um perfil de saúde pessoal abrangente para manter você no controle da sua jornada de cuidados de saúde.
            </p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default ProductSection;