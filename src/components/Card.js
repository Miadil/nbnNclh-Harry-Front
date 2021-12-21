import { Link } from "react-router-dom"

import "./Card.css"

const Card = ({ name, image, id }) => {
	const idCharacter = `/characters/${id}`
	return (
		<div>
			<Link to={idCharacter}>
				<p>{name}</p>
				<img className="CardImg" src={image} alt={name} />
			</Link>
		</div>
	)
}
export default Card
