import React from 'react';
import MapComponent from './Views/MapComponent';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MapComponent />
      <Footer />
    </div>
  );
}

export default App;
