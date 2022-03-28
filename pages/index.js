import styled from 'styled-components'
import Head from 'next/head'
import { useState } from 'react'

export default function Characters({ characters }) {
	const CHARACTERS_TO_DISPLAY = 12
	const [value, setValue] = useState(CHARACTERS_TO_DISPLAY)

	const handleShowMore = () => {
		setValue(value + CHARACTERS_TO_DISPLAY)
	}

	return (
		<>
			<head>
				<title>Starwars Characters | Starwars.com</title>
			</head>
			<HomeScreenContainer>
				{/* <StarfieldLeft /> */}
				<CharactersContainer>
					{characters
						.filter((c) => c.id !== 28 && c.id != 77)
						// use filter to exclude characters with no images
						.map((character, index) => index < value && <Character character={character} key={character.id} />)}
				</CharactersContainer>
				{/* <StarfieldRight /> */}
			</HomeScreenContainer>
		</>
	)
}

export async function getStaticProps(context) {
	const characters = await fetch(`https://akabab.github.io/starwars-api/api/all.json`).then((res) => res.json())

	return {
		props: {
			characters,
		},
	}
}

const HomeScreenContainer = styled.div``
const StarfieldLeft = styled.div``
const StarfieldRight = styled.div``
const CharactersContainer = styled.div``
const Character = styled.div``
