import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Home } from '@/components/pages';

const GlobalStyle = createGlobalStyle`
  body {
    background: white;
    min-height: 100vh;
    margin: 0;
    color: black;
    font-family: 'Caveat', cursive;
  }
`;

const theme = {
  primaryColor: '#f84904',
  secondaryColor: '#fdd54f',
  tertiaryColor: '#47597e',
  font: 'Open Sans'
}

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <br />
    </ThemeProvider>
  )
}

export default App
