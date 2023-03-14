import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function CharacterDetails() {
  const params = useParams();
  const [characterDetails, setCharacterDetails] = useState();
  useEffect(
    () => {
      axios.get(`https://rickandmortyapi.com/api/character/${params.id}`)
        .then(res => {
          console.log(res.data);
          setCharacterDetails(res.data)
        })
        .catch(err => console.log(err))
      // remove arrach below
    }, []
  )
  return (
    <main>
      <div className="details-container">
        <img src={characterDetails?.image} alt={characterDetails?.name} />
        <div className="char-info">
          <h3>{characterDetails?.name}</h3>
          <ul>
            <li>{characterDetails?.gender}</li>
            <li>{characterDetails?.species}</li>
            <li>{characterDetails?.status}</li>
          </ul>
        </div>
      </div>
    </main>
  )
}

export default CharacterDetails;