import './main.css';
import LandingPage from './pages';
import PageLogin from './pages/login/AuthLayout.jsx';
import Settings from './pages/Settings.jsx';
import { Routes, Route } from 'react-router-dom';
import './services/api.js';
import './services/userService.js';
import './services/goalService.js';
import './services/noteService.js';
import './services/profileService.js';
import './services/resumeService.js';

function App() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth" element={<PageLogin />} />
            <Route path="/profile" element={<Settings />} />
        </Routes>
    );
}

export default App;
