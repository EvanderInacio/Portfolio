import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --background: #121216;
  --text-primary: #d6d6dc;
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
  text-decoration: none;
}
`

export default GlobalStyle


