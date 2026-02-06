import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import GlobalStyle from './style/global';
import { ThemeProvider } from 'styled-components';
import theme from './style/them';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router}/>
      </ThemeProvider>
      
    </>
  );
}

export default App;
