import './main.css';
import LandingPage from './pages/Index.jsx';
import PageLogin from './pages/login/AuthLayout.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<PageLogin />} />
    </Routes>
  );
}

export default App;
