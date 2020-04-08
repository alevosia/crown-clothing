import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html,
	body {
		height: auto;
		min-height: 100%;
	}

	body {
		font-family: 'Open Sans Condensed', sans-serif;
		padding: 20px 40px;
		margin: 0 auto;
        overflow-x: hidden;
        
        @media screen and (max-width: 768px) {
            padding: 10px;
        }
        
        @media screen and (max-width: 425px) {
            padding: 0;
	    }
	}

	a {
		color: black;
		text-decoration: none;
    }
`
