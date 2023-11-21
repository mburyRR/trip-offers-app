import { ChakraBaseProvider } from '@chakra-ui/react';
import App from '@pages/App';
import { defaultTheme } from '@theme/defaultTheme';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { registerSW } from 'virtual:pwa-register';

import { TripsProvider } from './store/TripsContext';

const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm('New content available. Reload?')) {
      updateSW(true);
    }
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ChakraBaseProvider theme={defaultTheme}>
      <TripsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TripsProvider>
    </ChakraBaseProvider>
  </StrictMode>,
);
