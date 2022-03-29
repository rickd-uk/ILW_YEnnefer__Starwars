import Head from 'next/head'
import { useState, useEffect } from 'react'
import Character from '../components/Character'

import { HomeScreenContainer, StarfieldLeft, StarfieldRight, CharactersContainer, Button } from '../styles'

const CHARACTERS_DATA_URL = `https://akabab.github.io/starwars-api/api/all.json`

export default function Characters({ characters }) {
	const CHARACTERS_TO_DISPLAY = 12
	const [value, setValue] = useState(CHARACTERS_TO_DISPLAY)

	let mounted = false
	useEffect(() => {
		mounted = true
	}, [])

	const handleShowMore = () => {
		setValue(value + CHARACTERS_TO_DISPLAY)
	}

	return (
		<>
			<Head>
				<title>Starwars Characters | Starwars.com</title>
				<link rel='icon' type='image/x-icon' href='favicon.ico' />
			</Head>
			<HomeScreenContainer>
				<StarfieldLeft />
				<CharactersContainer>
					{characters
						.filter((c) => c.id !== 28 && c.id != 77)
						// use filter to exclude characters with no images
						.map((character, index) => index < value && <Character character={character} key={character.id} />)}
				</CharactersContainer>
				{value < characters.length && (
					<Button onClick={handleShowMore} n>
						SHOW MORE
					</Button>
				)}
				<StarfieldRight />
			</HomeScreenContainer>
		</>
	)
}

export async function getStaticProps() {
	const characters = await fetch(CHARACTERS_DATA_URL).then((res) => res.json())

	return {
		props: {
			characters,
		},
	}
}
