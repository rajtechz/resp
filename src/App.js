import logo from './logo.svg';
import './App.css';
import { Box } from '@mantine/core';


import Gallery from './component/gallery/Gallery';
import Contact from './component/contact/Contact';
import HelpSection from './component/HelpSection';
import Register from './component/Register';
import Navmenu from './nav/Navmenu';
import About from './component/about/About';
import Home from './component/home/Home';
import Services from './component/services/Services';

function App() {

  return (
    <>
    
        <Navmenu />
        <Home />
        <About />
        <Services/>
        <Gallery />

        <Contact />
        {/* <Register/> */}
      

    </>
  );
}

export default App;
