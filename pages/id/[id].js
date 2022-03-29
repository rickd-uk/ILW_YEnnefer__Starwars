import { StarfieldLeft, StarfieldRight } from '../../styles'
import styled from 'styled-components'
import CharacterCard from '../../components/CharacterCard'

function Character({ character }) {
	return (
		<CharacterContainer>
			<StarfieldLeft />
			<CharacterCard character={character} />
			<StarfieldRight />
		</CharacterContainer>
	)
}

// EXECUTED ON SERVER
export async function getStaticProps(context) {
	const character = await fetch(`https://akabab.github.io/starwars-api/api/id/${context.params.id}`).then((res) => res.json())

	return {
		props: {
			character,
		},
	}
}

export async function getStaticPaths(context) {
	const characters = await fetch(`https://akabab.github.io/starwars-api/api/all.json`).then((res) => res.json())

	const paths = characters.map((character) => `/id/${character.id}.json`)

	console.log(paths)
	return {
		paths,
		fallback: false,
	}
}

const CharacterContainer = styled.div`
	padding: 40px;
	margin-top: 200px;
`

export default Character
