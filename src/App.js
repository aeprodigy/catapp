import './App.css';
import CatsModel from './Components/CatsModel';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="bg-black">
      <Navbar/>
      <Hero/>
      <CatsModel/>
      <Footer/>
    </div>
  );
}

export default App;
