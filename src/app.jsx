import React from 'react';
import NavBar from './components/navbar';
import Header from './components/header';
import Particles from 'react-particles-js';
import Services from './components/services';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
function App() {

    return (
        <div>
            <Particles className="particles"/>
            <NavBar />
            <Header />
            <Services />
            <About />
            <Contact />
            <Footer />
        {/* <div className="shadow-lg p-3 mb-5 bg-white rounded">Larger shadow</div> */}
        </div>
    );
}

export default App;