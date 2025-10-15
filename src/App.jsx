import './main.css';
import LandingPage from './pages';
import PageLogin from './pages/login/AuthLayout.jsx';
import Settings from './pages/Settings.jsx';
import Overview from './pages/Overview.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<PageLogin />} />
      <Route path="/profile" element={<Settings />} />
      <Route path="/overview" element={<Overview />} />
    </Routes>
  );
}

export default App;
