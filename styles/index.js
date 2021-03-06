import styled from 'styled-components'

const HomeScreenContainer = styled.div``

const Starfield = styled.div`
	position: fixed;
	width: 200px;
	top: 0;
	background-repeat: repeat-y;
`
// EXTENDING STYLES
const StarfieldLeft = styled(Starfield)`
	left: 0;
	height: 1700px;
	background-position: left center;
	background-size: 100% auto;
	background-image: url('https://static-mh.content.disney.io/starwars/assets/background/bg_starsL-fd4661a3ccea.jpg');
`
const StarfieldRight = styled(Starfield)`
	right: 0;
	height: 1700px;
	background-position: right center;
	background-size: auto 100%;
	background-image: url('https://static-mh.content.disney.io/starwars/assets/background/bg_starsR-655c85e404d4.jpg');
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

export { HomeScreenContainer, StarfieldLeft, StarfieldRight, CharactersContainer, Button }
