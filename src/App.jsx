import './main.css';
import LandingPage from './pages/Index.jsx';
import PageLogin from './pages/login/AuthLayout.jsx';
import Settings from './pages/Settings.jsx';
import Mentoring from './pages/Mentoring.jsx';
import Overview from './pages/Overview.jsx';
import Goals from './pages/Goals.jsx';
import ResumePages from './pages/SummarysPage.jsx';
import EditProfile from './pages/EditProfile.jsx';
import NotesPage from './pages/NotesPage.jsx';
import UserManagement from './pages/Admin/admin.jsx';
import { Routes, Route } from 'react-router-dom';
import StepByStepForm from './components/StepByStepForm.jsx';
import { AuthProvider } from './contexts/auth/AuthProvider.jsx';
import { ResumeProvider } from './contexts/resume/ResumeContext.jsx';
import { BrowserRouter } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute.jsx';
import PublicRoute from './routes/PublicRoute.jsx';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initGA, trackPageView } from './services/analytics';

function App() {
    const location = useLocation();

    useEffect(() => {
        initGA();
    }, []);

    useEffect(() => {
        trackPageView(location.pathname + location.search);
    }, [location.pathname, location.search]);
    return (
        <AuthProvider>
            <ResumeProvider>
                <Routes>
                    {/* --->>> ROTAS PÚBLICA @ACESSO NULL <<<---  */}
                    <Route element={<PublicRoute />}>
                        <Route path="/auth" element={<PageLogin />} />
                        <Route path="/" element={<LandingPage />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Route>

                    {/* --->>> ROTAS PRIVADA @ACESSO USER <<<---  */}
                    <Route element={<PrivateRoute roles={['USER']} />}>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/mentoria" element={<Mentoring />} />
                        <Route path="/mentoria/:id" element={<Mentoring />} />
                        <Route path="/configuracoes" element={<Settings />} />
                        <Route path="/criar-perfil" element={<StepByStepForm />} />
                        <Route path="/meu-perfil" element={<Overview />} />
                        <Route path="/metas" element={<Goals />} />
                        <Route path="/resumos" element={<ResumePages />} />
                        <Route path="/editar-perfil" element={<EditProfile />} />
                        <Route path="/notas" element={<NotesPage />} />
                    </Route>

                    {/* --->>> ROTAS PRIVADA @ACESSO ADMIN <<<---  */}
                    <Route element={<PrivateRoute roles={['ADMIN']} />}>
                        <Route path="/admin" element={<UserManagement />} />
                    </Route>
                </Routes>
            </ResumeProvider>
        </AuthProvider>
    );
}
export default App;
