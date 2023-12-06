import { Button } from '@/components/common';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: white;
    min-height: 100vh;
    margin: 0;
    color: black;
    font-family: 'Caveat', cursive;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>App</h1>
      <Button>
        <h1>Test loren impsum</h1>
      </Button>
    </>
  )
}

export default App
