import "./Home.css";
import axios from "axios";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Home() {
  const [characters, setCharacters] = useState([]);
  useEffect(
    () => {
      axios.get("https://rickandmortyapi.com/api/character")
        .then(res => {
          // console.log(res.data.results);
          setCharacters(res.data.results);
        })
        .catch(err => console.log(err))
    }, []
  )
  return (
    <main className="home-container">
      <h2>Home</h2>

      {
        characters.map(item => (

          <div key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3> 
            {/* use backtick when using variables in a string    */}
            <Link to={`/details/${item.id}`}>See Details</Link>       
          </div>
        ))
      }
    </main>
  );
}

export default Home;

// SHORT TUTORIAL ON REACT HOOKS
// https://www.w3schools.com/react/react_hooks.asp


// SHORT TUTORIAL ON useEffect HOOK
// https://www.w3schools.com/react/react_useeffect.asp


// SHORT TUTORIAL ON useState HOOK
// https://www.w3schools.com/react/react_usestate.asp


// SHORT TUTORIAL ON map() FUNCTION
// https://www.w3schools.com/react/react_es6_array_methods.asp#:~:text=The%20.map()%20method%20allows,be%20used%20to%20generate%20lists.