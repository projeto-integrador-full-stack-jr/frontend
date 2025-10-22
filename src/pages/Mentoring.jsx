import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import resumeService from '../services/resumeService';
import { CalendarDays, BriefcaseBusiness, CircleUserRound } from 'lucide-react';
import LoadingScreen from '../components/Loading';
import { useResume } from '../contexts/resume/ResumeContext';

const Mentoring = () => {
    const [profile, setProfile] = useState(null);
    const { resumeData, setResumeData } = useResume();

    useEffect(() => {
        async function createResume() {
            try {
                const data = await resumeService.createResume();
                localStorage.getItem('userProfile');
                setProfile(data);
                setResumeData(data);
            } catch (error) {
                console.error(error);
            }
        }
        createResume();
    }, []);
    return (
        <>
            <Header />

            <div className="conteudo-mentoria">
                {profile ? (
                    <>
                        <div
                            className="prose prose-blue lg:prose-xl"
                            dangerouslySetInnerHTML={{ __html: profile?.conteudo }}
                        />
                    </>
                ) : (
                    <LoadingScreen />
                )}
            </div>
            <Footer />
        </>
    );
};

export default Mentoring;
