import { Link } from "react-router-dom";

const CharacterCard = (props) => {
    return (
        <div className="character-card">
            <img src={props.character.image} alt={props.character.name} />
            <p>{props.character.name}</p>
            <Link to={`/details/${props.character.id}`}>See Details</Link>
        </div>
    )
};

export default CharacterCard;