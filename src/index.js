import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { GlobalStyle } from 'components/GlobalStyle';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    green: '#ADDFAD',
    red: '#A0522D',
  },

  radii: {
    sm: '4px',
    md: '8px',
    lg: '12px',
  },

  spacing: value => `${value * 2}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
