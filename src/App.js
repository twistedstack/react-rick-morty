import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import CharacterDetails from './pages/CharacterDetails/CharacterDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/details/:id" element={<CharacterDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// SETUP REACT ROUTER
// https://www.w3schools.com/react/react_router.asp