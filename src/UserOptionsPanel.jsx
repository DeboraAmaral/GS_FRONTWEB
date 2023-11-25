import React from 'react';
import { useAuth } from './AuthContext';

const UserOptionsPanel = ({ onClose, onShowDashboard }) => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    onClose();
  };

  return (
    <div className="user-options-panel">
      <div className="arrow-up"></div>
      <button style={{ backgroundColor: '#FFF', border: '0px', marginLeft: '8px' }} onClick={handleLogout}>
        Sair
      </button>
      <button style={{ backgroundColor: '#FFF', border: '0px', marginLeft: '8px' }} onClick={onShowDashboard}>
        Dashboard
      </button>
    </div>
  );
};

export default UserOptionsPanel;