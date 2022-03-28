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

const StarField = styled.div`
	position: fixed;
	width: 200px;
	top: 0;
	background-repeat: repeat-y;
`
// EXTENDING STYLES
const StarfieldLeft = styled(StarField)`
	left: 0;
	height: 1700px;
	background-position: left center;
	background-size: 100% auto;
	background-image: url(https://static-mh.content.disney.io/starwars/assets/background/bg_starsL-fd4661a3ccea.jpg);
`
const StarfieldRight = styled(StarField)`
	right: 0;
	height: 1700px;
	background-position: right center;
	background-size: auto 100%;
	background-image: url(https://static-mh.content.disney.io/starwars/assets/background/bg_starsR-655c85e404d4.jpg);
`

const CharactersContainer = styled.div`
	display: flex;
	margin-top: 200px;
	padding: 30px;
	justify-content: center;
	gap: 25px;
	flex-wrap: wrap;
	background-color: #151515;
	color: white;
`
const Button = styled.button`
	color: #aaa;
	background-color: transparent;
	border: none;
	font-family: inherit;
	margin-left: auto;
	margin-right: auto;
	margin-top: 20px;
	margin-bottom: 40px;
	font-size: 18.4px;
	display: block;
	transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

	:hover {
		color: #fff;
		cursor: pointer;
	}
	:hover::after {
		border-bottom-color: #fff;
		width: 100%;
	}

	::after {
		content: '';
		display: block;
		width: 40%;
		margin: 0 auto;
		opacity: 0.9;
		border-bottom: 1px solid transparent;

		/* Transitions */
		-webkit-transition: border-color 200ms, width 250ms;
		-moz-transition: border-color 200ms, width 250ms;
		transition: border-color 200ms, width 250ms;
	}
`
