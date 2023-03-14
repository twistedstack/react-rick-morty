import axios from 'axios';
import { useEffect, useState } from 'react';
// import CharacterCard from '../components/CharacterCard';
import { Link } from "react-router-dom";

const Home = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(
        () => {

            axios.get("https://rickandmortyapi.com/api/character")
                .then(res => {
                    //console.log(res.data.results);
                    setCharacters(res.data.results);
                })
                .catch(err => console.log(err))

        }, []
    )


    return (

        <main>
            <h1>Home Page</h1>
            {
                characters.map(item => (
                    <div key={item.id}> 
                        <p>{item.name} </p>
                        <Link to={`/details/${item.id}`}>See Details</Link>
                    </div>
                    // <CharacterCard key={item.id} character={item} />
                ))
            }
        </main>
    )
};

export default Home;

// SHORT TUTORIAL ON REACT HOOKS
// https://www.w3schools.com/react/react_hooks.asp


// SHORT TUTORIAL ON useEffect HOOK
// https://www.w3schools.com/react/react_useeffect.asp


// SHORT TUTORIAL ON useState HOOK
// https://www.w3schools.com/react/react_usestate.asp

// SHORT TUTORIAL ON map() FUNCTION
// https://www.w3schools.com/react/react_es6_array_methods.asp#:~:text=The%20.map()%20method%20allows,be%20used%20to%20generate%20lists.