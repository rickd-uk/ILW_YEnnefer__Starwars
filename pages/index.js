import styled from 'styled-components'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import Character from '../components/Character'

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
				<link rel='shortcut icon' href='data:image/x-icon;,' type='image/x-icon' />
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
const Button = styled.button``
