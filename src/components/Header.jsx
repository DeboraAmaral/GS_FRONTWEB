import React, { useState } from 'react';
import './Header.scss';
import Logo from '../LOGO2.svg';
import { useAuth } from '../AuthContext.js';
import UserOptionsPanel from '../UserOptionsPanel';
import DashboardModal from './DashboardModal.jsx';
import { Link } from 'react-router-dom';

const Header = ({ onShowCreateAccount, onShowLogin }) => {
  const { user, logout } = useAuth();
  const [showOptionsPanel, setShowOptionsPanel] = useState(false);
  const [showDashboardModal, setShowDashboardModal] = useState(false);

  const handleToggleOptionsPanel = () => {
    setShowOptionsPanel(!showOptionsPanel);
  };

  const handleCloseOptionsPanel = () => {
    setShowOptionsPanel(false);
  };

  const handleShowDashboardModal = () => {
    setShowDashboardModal(true);
  };

  const handleCloseDashboardModal = () => {
    setShowDashboardModal(false);
  };
  return (
    <header className="custom-header">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Logo" style={{ width: '200px', height: '59px', marginTop: '-10px' }} />
        </div>

        <div className="nav-links">
          <a href="#produtos">Produtos</a>
          <a href="#vantagens">Vantagens</a>
          <a href="#missao">Missão</a>
          <a href="#contato">Contato</a>
        </div>

        <div className="user-section">
          {user ? (
            <>
              <div className="user-info" onClick={handleToggleOptionsPanel}>
                <p style={{ fontFamily: 'Arial', fontWeight: 'bold', marginRight: '28px', marginTop: '20px' }}>{user.apelido}</p>
                <span style={{ fontSize: '12px', cursor: 'pointer', position: 'relative', fontWeight: 'bold', top: '-47px', left: '57px' }}>v</span>
              </div>
              {showOptionsPanel && <UserOptionsPanel onClose={handleCloseOptionsPanel} onShowDashboard={handleShowDashboardModal} />}
            </>
          ) : (
            <>
              <button onClick={onShowLogin} className="login-link">Login</button>
              <button onClick={onShowCreateAccount} className="btn-create-account">Criar conta</button>
            </>
          )}
        </div>
      </div>
      {showDashboardModal && <DashboardModal onClose={handleCloseDashboardModal} />}
    </header>
  );
};

export default Header;