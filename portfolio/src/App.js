import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import AboutData from "./Components/About/AboutData";
import Skills from "./Components/About/Skills";
import SocialMedia from "./Components/About/SocialMedia";
import NotFound from "./Components/NotFound";
import Footer from "./Components/Footer";

import {Fragment} from 'react';
import {Routes , Route} from 'react-router-dom';


function App() {
  return (
    <Fragment>
      <Header/>
      <Hero/>
      <About/>
      <Routes>
        <Route exact path="/" element={<AboutData/>}/>
        <Route path="/about" element={<AboutData/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/social-media" element={<SocialMedia/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Projects/>
      <Contact/>
      <Footer/>
    </Fragment>
  );
}

export default App;
