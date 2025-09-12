import './main.css';
import LandingPage from './pages';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/inicio" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
