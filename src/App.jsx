import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SectionBelowHeader from './components/SectionBelowHeader';
import ProductSection from './components/ProductSection';
import VantagensSection from './components/VantagensSection';
import MissaoSection from './components/MissaoSection';
import ContatoSection from './components/ContatoSection';
import Footer from './components/Footer';
import CreateAccountModal from './components/CreateAccountModal';
import LoginSection from './components/LoginSection';
import { AuthProvider } from './AuthContext';
import { useState } from 'react';


function App() {
  const [showCreateAccountModal, setShowCreateAccountModal] = useState(false);
  const [showLoginSection, setShowLoginSection] = useState(false);

  const handleShowCreateAccount = () => {
    setShowCreateAccountModal(true);
    setShowLoginSection(false); 
  };

  const handleShowLogin = () => {
    setShowLoginSection(true);
    setShowCreateAccountModal(false); 
  };

  const handleCloseModals = () => {
    setShowCreateAccountModal(false);
    setShowLoginSection(false);
  };

  return (
    <Router>
      <AuthProvider>
      <div className="App">
        <Header 
          onShowCreateAccount={handleShowCreateAccount} 
          onShowLogin={handleShowLogin} 
        />

        {showCreateAccountModal && <CreateAccountModal onClose={handleCloseModals} />}
        {showLoginSection && <LoginSection onClose={handleCloseModals} />}

        <Routes>
          <Route path="/" element={<SectionBelowHeader onShowLogin={() => setShowLoginSection(true)} />} />
          <Route path="/#produtos" element={<ProductSection />} />
          <Route path="/#vantagens" element={<VantagensSection />} />
          <Route path="/#missao" element={<MissaoSection />} />
          <Route path="/#contato" element={<ContatoSection />} />
        </Routes>

        <ProductSection />
        <VantagensSection />
        <MissaoSection />
        <ContatoSection />
        <Footer />
      </div>
      </AuthProvider>
    </Router>
  );
}

export default App;