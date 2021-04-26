import React from 'react';
import Modal from './Modal';
import Sidebar from './Sidebar';
import './index.css';
import Home from './Home';
import { AppProvider } from './context';
function App() {
  return (
    <AppProvider>
    <div className='kk'>
      <Home />
      <Modal />
      <Sidebar />
      </div>
    </AppProvider>

  );
}

export default App;
