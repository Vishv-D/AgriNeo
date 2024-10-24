import React from 'react';
import './App.css';
import Header from './components/Header';
import Marketplace from './components/Marketplace';
import About from './pages/About';

function App() {
    return (
        <div className="App">
            <Header />
            <Marketplace />
            <About />
        </div>
    );
}

export default App;
