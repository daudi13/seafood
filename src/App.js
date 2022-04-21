/* eslint linebreak-style: ["error", "windows"] */
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DetailsPage from './components/Pages/DetailsPage';
import Homepage from './components/Pages/Homepage';
import store from './redux/configureStore';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/detailsPage" element={<DetailsPage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
