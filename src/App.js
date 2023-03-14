import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import CharacterDetails from './pages/CharacterDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/details/:id" element={<CharacterDetails />} />
        </Route>
      </Routes>    
    </BrowserRouter>
  );
}

export default App;


// REACT ROUTER
// https://www.w3schools.com/react/react_router.asp


// AXIOS
// https://www.freecodecamp.org/news/how-to-use-axios-with-react/