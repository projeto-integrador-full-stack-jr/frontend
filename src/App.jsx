import './main.css';
import LandingPage from './pages/Index.jsx';
import PageLogin from './pages/login/AuthLayout.jsx';
import Settings from './pages/Settings.jsx';
import Mentoring from './pages/Mentoring.jsx';
import Overview from './pages/Overview.jsx';
import Goals from './pages/Goals.jsx';
import UserManagement from './pages/Admin/admin.jsx';
import { Routes, Route } from 'react-router-dom';
import StepByStepForm from './components/StepByStepForm.jsx';
import { AuthProvider } from './contexts/auth/AuthProvider.jsx';
import { ResumeProvider } from './contexts/resume/ResumeContext.jsx';
import { BrowserRouter } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute.jsx';
import PublicRoute from './routes/PublicRoute.jsx';
import { Navigate } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
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
                            <Route path="/configuracoes" element={<Settings />} />
                            <Route path="/criar-perfil" element={<StepByStepForm />} />
                            <Route path="/overview" element={<Overview />} />
                            <Route path="/metas" element={<Goals />} />
                        </Route>

                        {/* --->>> ROTAS PRIVADA @ACESSO ADMIN <<<---  */}
                        <Route element={<PrivateRoute roles={['ADMIN']} />}>
                            <Route path="/admin" element={<UserManagement />} />
                        </Route>
                    </Routes>
                </ResumeProvider>
            </AuthProvider>
        </BrowserRouter>
    );
}
export default App;
