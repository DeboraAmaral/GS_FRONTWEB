import React from 'react';
import './Footer.scss'; 
import Logo from '../LOGO2.svg'; 
import Rede1 from '../Social1.svg';
import Rede2 from '../Social2.svg';
import Rede3 from '../Social3.svg';
import Rede4 from '../Social4.svg';


const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="center">
        <a href="#">Política de Privacidade</a>
        <a href="#">Termos de Uso</a>
        <a href="#">Trabalhe Conosco</a>
      </div>
      <div className="right">
        <img src={Rede1} alt="Logo 1" />
        <img src={Rede2} alt="Logo 2" />
        <img src={Rede3} alt="Logo 3" />
        <img src={Rede4} alt="Logo 4" />
      </div>
    </div>
  );
};

export default Footer;