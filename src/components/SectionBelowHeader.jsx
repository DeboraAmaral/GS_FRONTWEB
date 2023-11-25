import React from 'react';
import '../components/SectionBelowHeader.scss'; 
import SETAD from '../SETADIREITA.svg';
import FOTO1 from '../IMG1.jpg';
import FOTO2 from '../IMG2.jpeg';
import FOTO3 from '../IMG3.jpg';
import FOTO4 from '../IMG4.jpeg';
import { useAuth } from '../AuthContext';

const SectionBelowHeader = ({ onShowLogin }) => {
  const { user } = useAuth();

  const handleEntrarAgoraClick = () => {
    onShowLogin();
  };

  return (
    <section className="section-below-header">
      <div className="text-container">
        <h1 style={{marginTop: '65px', marginBottom: '30px'}}>
          MedPlan é mais 
          <span style={{ color: '#00DC5D' }}> saúde </span>
          em sua vida
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        {!user && (
          <button className="green-button" onClick={handleEntrarAgoraClick}>
            <h6 style={{fontSize: '14px', position: 'relative', left: '18px'}}>Entrar agora</h6>
            <div className="arrow-box">
              <img src={SETAD} alt="Seta" style={{display: 'flex'}}/>
            </div>
          </button>
        )}
      </div>
      <div className="images-container">
        <img className="img1" src={FOTO3} alt="Imagem 1" />
        <img className="img2" src={FOTO2} alt="Imagem 2" />
        <img className="img3" src={FOTO1} alt="Imagem 3" />
        <img className="img4" src={FOTO4} alt="Imagem 4" />
      </div>
    </section>
  );
};

export default SectionBelowHeader;