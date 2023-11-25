import React from 'react';
import './MissaoSection.scss';
import Doutor from '../Doutor.svg'

const MissaoSection = () => {
  return (
    <section id='missao'>
      <div className="missao-section">
        <div className="background-image"></div>
        <div className="text-container">
          <div className="category">MISSÃO</div>
          <div className="title">Nossa missão</div>
          <p>
            Na MedPlan, nossa missão é simples, mas profundamente significativa: capacitamos indivíduos a tomarem as rédeas de sua saúde, oferecendo uma plataforma abrangente e acessível para agendamento de consultas e gestão de saúde pessoal.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissaoSection;