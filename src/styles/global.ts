import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
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

:root {
  --background: #121216;
  --background-second: #121016;
  --first-color:  #00d9ff;
  --second-color: #5252e0;
  --text-primary: #d6d6dc;
  --text-secondary: #a9a9a9;
  --hover-color: rgb(0, 217, 255, 0.7);
  --hover-second-color: rgb(80, 82, 224, 0.7);;
  --white: #f6f2f2;
  --border-color: #0c0b0e;
  --border-second-color: #1e1e25;
}

body {
  background: var(--background);
  color: var(--text-primary);
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
  background-color: var(--border-second-color);
}
::-webkit-scrollbar-thumb{
  border-radius: 0.5rem;
  background-color: var(--second-color);
}
::-webkit-scrollbar-thumb:hover{
  background-color: var(--first-color);
}
`
