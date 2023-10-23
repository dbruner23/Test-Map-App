import React from 'react';
import { Provider } from 'react-redux';
import store from './services/Store'
import MapComponent from './Views/MapComponent';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ColorSelector from './Components/ColorSelector';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <ColorSelector />
        <MapComponent />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
