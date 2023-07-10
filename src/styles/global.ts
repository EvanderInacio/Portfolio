import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

html.normal-scroll {
  scroll-behavior: auto;
}

body {
  background: ${props => props.theme.background};
  color: ${props => props.theme.textPrimary};
  font-family: 'Poppins', sans-serif;
}

ul {
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
}

::-webkit-scrollbar{
  width: 0.5rem;
  background-color: ${props => props.theme.backgroundSecond};
}
::-webkit-scrollbar-thumb{
  border-radius: 0.5rem;
  background-color: ${props => props.theme.secondColor};
}
::-webkit-scrollbar-thumb:hover{
  background-color: ${props => props.theme.hoverSecond};
}
`
