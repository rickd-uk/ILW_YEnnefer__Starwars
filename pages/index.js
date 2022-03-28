import styled from 'styled-components'
import Head from 'next/head'

export default function Characters({ characters }) {
	return (
		<>
			<head>
				<title>Starwars Characters | Starwars.com</title>
			</head>
			<HomeScreenContainer>
				{/* <StarfieldLeft /> */}
				<CharactersContainer>
					{console.log(characters)}
					{/* {characters.filter()} */}
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
