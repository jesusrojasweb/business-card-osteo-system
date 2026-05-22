import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import './App.css';
import BusinessCard from './components/BusinessCard/BusinessCard';

const LUISA_DATA = {
  name: 'LUISA VARELA',
  title: 'Directora Ejecutiva',
  phone: '0424-9594187',
  phoneClean: '4249594187',
  instagram: '@osteosystems_vzla',
  instagramUrl: 'osteosystems_vzla',
  address: <>Multicentro Profesional<br/>Bicentenario, Mezzanina, Ofic 7</>,
  mapLink: 'https://maps.app.goo.gl/dFamM9dV6UuSDJCQ6'
};

const MICHELLE_DATA = {
  name: 'MICHELLE RIBEIRO',
  title: 'Representante de Ventas',
  phone: '0424-9550139',
  phoneClean: '4249550139',
  instagram: '@osteosystems_vzla',
  instagramUrl: 'osteosystems_vzla',
  address: <>Multicentro Profesional<br/>Bicentenario, Mezzanina, Ofic 7</>,
  mapLink: 'https://maps.app.goo.gl/dFamM9dV6UuSDJCQ6'
};

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/luisa" element={<BusinessCard data={LUISA_DATA} />} />
          <Route path="/michelle" element={<BusinessCard data={MICHELLE_DATA} />} />
          <Route path="*" element={<Navigate to="/luisa" replace />} />
        </Routes>
      </main>
      <Analytics />
    </Router>
  );
}

export default App;
