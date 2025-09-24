import './main.css';
import LandingPage from './pages';
import PageLogin from './pages/login/AuthLayout.jsx';
import Profile from './pages/Profile.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<PageLogin />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
