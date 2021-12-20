import { useState, useEffect } from "react"
import Card from "../components/Card"

import "./Characters.css"
const Characters = () => {
	const [characters, setCharacters] = useState([])

	useEffect(() => {
		const getData = () => {
			fetch("https://harrypotterapi20.herokuapp.com/characters")
				.then((res) => res.json())
				.then((res) => console.log(res) || setCharacters(res))
		}
		getData()
	}, [])

	return (
		<div>
			Characters !
			<div className="GaleryCharacters">
				{characters.map((character) => (
					<Card
						key={character.id}
						id={character.id}
						name={character.name}
						image={character.image}
					/>
				))}
			</div>
		</div>
	)
}
export default Characters
