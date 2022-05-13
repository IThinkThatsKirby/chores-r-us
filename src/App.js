import './App.css';
import { Routes, Route } from 'react-router-dom';
import ViewChores from './Pages/ViewChores.js';
import EditChores from './Pages/EditChores';
import Landing from './Pages/Landing.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import NavBar from './Components/NavBar';
import Rewards from './Pages/Rewards';

function App() {
  const darkTheme = createTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#aa69ff',
        contrastText: '#000000',
      },
      secondary: {
        main: '#f50057',
      },
      error: {
        main: '#ff0000',
      },
      text: {
        primary: 'rgba(255,255,255,0.69)',
      },
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Manage%20Chores" element={<EditChores />} />
          <Route path="/View%20Chores" element={<ViewChores />} />
          <Route path="/Rewards" element={<Rewards />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}
export default App;
