import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.text}; 
  --webkit-font-smoothing: antialiased;
}

/* 1rem => 16px São medidas relativas */
body,
input,
textarea,
button {
  font: 400 1rem Roboto, sans-serif;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
}
`
