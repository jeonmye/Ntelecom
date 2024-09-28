import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme, mixins } from './style/theme';
import GlobalStyle from './style/GlobalStyle';
import router from './routes/Router';

const container = document.getElementById('app');
const root = ReactDOMClient.createRoot(container);

if (container.hasChildNodes()) {
  ReactDOMClient.hydrateRoot(
    container,
    <React.StrictMode>
      <ThemeProvider theme={{ ...theme, ...mixins }}>
        <GlobalStyle />
        <HelmetProvider>
          <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
        </HelmetProvider>
      </ThemeProvider>
    </React.StrictMode>,
  );
} else {
  root.render(
    <React.StrictMode>
      <ThemeProvider theme={{ ...theme, ...mixins }}>
        <GlobalStyle />
        <HelmetProvider>
          <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
        </HelmetProvider>
      </ThemeProvider>
    </React.StrictMode>,
  );
}
