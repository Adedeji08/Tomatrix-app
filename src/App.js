import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import AboutUs from './views/AboutUs';
import Contact from './views/Contact';
import Home from './views/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="contactus" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
