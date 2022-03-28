import styled from 'styled-components'

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

export { Button }
