import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar/>
      <main style={{ flexGrow: 1 }}>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default MainLayout;
