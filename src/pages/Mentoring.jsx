import { useEffect, useState, useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LoadingScreen from '../components/Loading';
import { toast } from 'react-toastify';
import { UserServices } from '@services';
import { AuthContext } from '../contexts/auth/AuthProvider';
import { useResume } from '../contexts/resume/ResumeContext';
import { useNavigate } from 'react-router-dom';

const Mentoring = () => {
    const navigate = useNavigate();
    const { setResumeData } = useResume();
    const { refreshProfile } = useContext(AuthContext);

    const [lastResume, setLastResume] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchLastResume = async () => {
        setLoading(true);
        try {
            const profile = await refreshProfile();
            if (!profile) {
                setLoading(false);
                navigate('/criar-perfil');
            }

            const summariesData = await UserServices.summaryService.getSummaries();

            const last = summariesData.at(-1);

            setLastResume(last);
            setResumeData(last);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLastResume();
    }, []);

    if (loading) return <LoadingScreen />;

    return (
        <>
            <Header />
            <div className="conteudo-mentoria">
                {lastResume ? (
                    <div
                        className="prose prose-blue lg:prose-xl"
                        dangerouslySetInnerHTML={{ __html: lastResume.conteudo }}
                    />
                ) : (
                    <p>Nenhum resumo disponível.</p>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Mentoring;
