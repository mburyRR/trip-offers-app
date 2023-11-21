import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import Homepage from './Homepage';
import TripPage from './TripPage';

const App: FC = () => {
  return (
    <Box bg="grey.background" maxW="100vw" minH="100vh">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/trip/:id" element={<TripPage />} />
      </Routes>
    </Box>
  );
};

export default App;
