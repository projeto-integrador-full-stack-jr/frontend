import './main.css';
import LandingPage from './pages/Index.jsx';
import PageLogin from './pages/login/AuthLayout.jsx';
import Settings from './pages/Settings.jsx';
import Mentoring from './pages/Mentoring.jsx';
import Overview from './pages/Overview.jsx';
import { Routes, Route } from 'react-router-dom';
import StepByStepForm from './components/StepByStepForm.jsx';
import { AuthProvider } from './contexts/auth/AuthProvider.jsx';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/auth" element={<PageLogin />} />
                    <Route path="/configuracoes" element={<Settings />} />
                    <Route path="/overview" element={<Overview />} />
                    <Route path="/criar-perfil" element={<StepByStepForm />} />
                    <Route path="/mentoria" element={<Mentoring />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}
export default App;
