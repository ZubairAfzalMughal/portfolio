import React from 'react';
import NavBar from './components/navbar';
import Header from './components/header';
import Particles from 'react-particles-js';
function App() {

    return (
        <div>
            <Particles className="particles"/>
            <NavBar />
            <Header />
        </div>
    );
}

export default App;