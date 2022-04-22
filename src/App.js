import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DetailsPage from './components/Pages/DetailsPage';
import Homepage from './components/Pages/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/detailsPage" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
