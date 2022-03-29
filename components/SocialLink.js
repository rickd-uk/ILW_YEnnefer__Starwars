import styled from 'styled-components'

export const SocialLink = ({ image }) => {
	return (
		<Link href='https://starwars.com' image={image}>
			<span />
		</Link>
	)
}

const Link = styled.a`
	transition: background-color 350ms;

	:hover > span {
		background-color: #ccc;
	}

	> span {
		display: block;
		background-color: #999;
		height: 21px;
		width: 21px;
		mask: ${(props) => props.image && `url(${props.image}) no-repeat 50% 50%`};

		transition: background-color 350ms;
	}
`
