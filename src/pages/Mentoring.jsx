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
    const [isLoadingSummaries, setIsLoadingSummaries] = useState(false);

    const fetchResume = async () => {
        setIsLoadingSummaries(true);
        try {
            const profile = await refreshProfile();

            if (!profile) {
                setIsLoadingSummaries(false);
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
            setIsLoadingSummaries(false);
        }
    };

    useEffect(() => {
        fetchResume();
    }, [id]);

    return (
        <>
            <Header />
            {isLoadingSummaries ? (
                <div className="flex min-h-screen w-full items-center justify-center">
                    <LoadingScreen text={'Buscando resumo...'} />
                </div>
            ) : (
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
            )}
        </>
    );
};

export default Mentoring;
