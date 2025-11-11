import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LoadingScreen from '../components/Loading';
import { UserServices } from '@services';
import { AuthContext } from '../contexts/auth/AuthProvider';
import { useResume } from '../contexts/resume/ResumeContext';

const Mentoring = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { setResumeData } = useResume();
    const { refreshProfile } = useContext(AuthContext);

    const [resume, setResume] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchResume = async () => {
        setLoading(true);
        try {
            const profile = await refreshProfile();

            if (!profile) {
                setLoading(false);
                return navigate('/criar-perfil');
            }

            let summary;

            if (id) {
                summary = await UserServices.summaryService.getSummary(id);
            } else {
                const summaries = await UserServices.summaryService.getSummaries();
                summary = summaries.at(-1);
            }

            setResume(summary);
            setResumeData(summary);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchResume();
    }, [id]);

    if (loading) return <LoadingScreen text={'Carregando resumo...'} />;

    return (
        <>
            <Header />
            <div className="conteudo-mentoria">
                {resume ? (
                    <div
                        className="prose prose-blue lg:prose-xl"
                        dangerouslySetInnerHTML={{ __html: resume.conteudo }}
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
