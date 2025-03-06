import React from 'react';
import './App.css';
import CardBinder from './components/CardBinder';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="app-container">
        <CardBinder />
      </main>
    </div>
  );
}

export default App;
