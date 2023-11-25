import React from 'react';
import './VantagensSection.scss'; 
import SETTINGS from '../SETTINGS.svg';
import DASH from '../DASH.svg';
import LIGHT from '../LIGHT.svg';
import EMOJI from '../EMOJI.svg';

const VantagensSection = () => {
  return (
    <section id='vantagens'>
    <div className="vantagens-section">
      <div className="text-container">
        <div className="category">VANTAGENS</div>
        <div className="title">Nossas vantagens</div>
      </div>

      <div className="content">
        <div className="item">
          <div className="square">
            <img src={EMOJI} alt="Vantagem 1" />
          </div>
          <p>
            <strong>Agilidade e Praticidade</strong><br />
            Agende facilmente consultas médicas com apenas alguns cliques, proporcionando conveniência e organização para sua agenda de saúde. 
          </p>
        </div>

        <div className="item">
          <div className="square">
            <img src={SETTINGS} alt="Vantagem 2" />
          </div>
          <p>
            <strong>Controle de Rotina</strong><br />
            Registre e monitore os medicamentos que você está tomando, estabelecendo um controle eficaz sobre sua rotina de medicamentos.
          </p>
        </div>

        <div className="item">
          <div className="square">
            <img src={DASH} alt="Vantagem 3" />
          </div>
          <p>
            <strong>Serviços integrados</strong><br />
            Fique por dentro de suas consultas, exames e medicamentos por meio de lembretes personalizados, garantindo que você nunca perca um compromisso importante.
          </p>
        </div>

        <div className="item">
          <div className="square">
            <img src={LIGHT} alt="Vantagem 4" />
          </div>
          <p>
            <strong>Perfil de Saúde Pessoal</strong><br />
            Crie um perfil detalhado que inclua informações sobre alergias, condições médicas pré-existentes, histórico familiar e estilo de vida. Isso ajuda os profissionais de saúde a entenderem melhor o paciente.
          </p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default VantagensSection;