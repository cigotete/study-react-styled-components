import { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Home } from '@/components/pages';
import LightTheme from '@/themes/light';
import DarkTheme from '@/themes/dark';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.theme.bodyBackgroundColor};
    min-height: 100vh;
    margin: 0;
    color: ${props => props.theme.bodyFontColor};
    font-family: 'Caveat', cursive;
  }
`;

function App() {
  const [theme, setTheme] = useState(LightTheme);

  return (
    <ThemeProvider theme={
      {...theme, setTheme: () => {
        setTheme(theme => theme.id === 'light' ? DarkTheme : LightTheme);
      }}
    }>
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
