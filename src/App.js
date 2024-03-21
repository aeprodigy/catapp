import './App.css';
import { EmblaCarousel } from './Components/Carousel';
import CatsModel from './Components/CatsModel';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Gallery from './Components/Gallery';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <CatsModel/>
      <Gallery/>
      <EmblaCarousel/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
