import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css'; 
import './DashboardModal.scss';
import X from '../x.png';
import { useAuth } from '../AuthContext';

const DashboardModal = ({ onClose }) => {
  const { user } = useAuth();
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    console.log('User:', user);
  }, [user]); 

  const handleAgendarConsulta = () => {
    setShowCalendar(true);
  };

  const handleCalendarClose = () => {
    setShowCalendar(false);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="dashboard-modal-overlay" onClick={onClose}>
      <div className="dashboard-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <img src={X} alt="Fechar" className="close-icon" onClick={onClose} />
        </div>
        <div className="modal-content">
          <div className="center-content">
            <h1>Seus Dados</h1>
            <div>
              <p>Nome: {user?.nome}</p>
              <p>Email: {user?.email}</p>
              <p>Alergias: {user?.alergias || 'N/A'}</p>
              <p>Medicamentos: {user?.medicamentos || 'N/A'}</p>
              <button
                style={{
                  backgroundColor: '#00dc5d',
                  width: '139px',
                  height: '46px',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  position: 'relative',
                  left: '500px',
                  top: '-220px'
                }}
                onClick={handleAgendarConsulta}
              >
                Agendar Consulta
              </button>
            </div>
          </div>
        </div>
      </div>
      {showCalendar && (
        <div className="calendar-overlay" onClick={handleCalendarClose}>
          <div className="calendar-container" onClick={(e) => e.stopPropagation()} style={{position: 'relative', left: '-500px'}}>
            <Calendar onChange={handleDateChange} value={selectedDate} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardModal;