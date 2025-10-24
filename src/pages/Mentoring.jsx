import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { CalendarDays, BriefcaseBusiness, CircleUserRound } from 'lucide-react';
import LoadingScreen from '../components/Loading';
import { useResume } from '../contexts/resume/ResumeContext';
import { UserServices } from '@services';
const Mentoring = () => {
    const [profile, setProfile] = useState(null);
    const { resumeData, setResumeData } = useResume();

    useEffect(() => {
        async function createResume() {
            try {
                const data = await UserServices.summaryService.createSummary();
                localStorage.getItem('userProfile');
                localStorage.getItem('token');
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
