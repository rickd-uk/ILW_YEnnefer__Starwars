import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const GlobalStyle = createGlobalStyle`
   * {
		 margin: 0;

		 .disable-select {
 user-select: none; /* supported by Chrome and Opera */
 -webkit-user-select: none; /* Safari */
 -khtml-user-select: none; /* Konqueror HTML */
 -moz-user-select: none; /* Firefox */
 -ms-user-select: none; /* Internet Explorer/Edge */
}
		}
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

		background-color: #151515;
  font-family: "DINNextW01-Regular", -apple-system, BlinkMacSystemFont, Segoe UI,
    Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
`
export default function App({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</>
	)
}
