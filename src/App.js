import './App.css';
import Header from './components/Header';
import AboutUs from './views/AboutUs';
import Home from './views/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutus" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
