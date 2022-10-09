import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --background: #121216;
  --text: #d6d6dc;
}

body {
  background: var(--background);
  color: var(--text);
}
`

export default GlobalStyle


