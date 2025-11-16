import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Bot, CalendarClock, BriefcaseBusiness, CircleUserRound, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useResume } from '../contexts/resume/ResumeContext';
import { UserServices } from '@services';
import { ToastContainer, toast } from 'react-toastify';
import LoadingScreen from '../components/Loading';

const Overview = () => {
    const [profile, setProfile] = useState(null);
    const { resumeData, setResumeData } = useResume();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        async function loadProfile() {
            try {
                const data = await UserServices.profileService.getProfile();
                setProfile(data);
            } catch (error) {
                console.error(error);
            }
        }
        loadProfile();
    }, []);

    const createResume = async () => {
        setLoading(true);
        try {
            const data = await UserServices.summaryService.createSummary();
            setResumeData(data);
            toast.success('Resumo gerado com sucesso!');
            navigate('/meu-resumo');
            return data;
        } catch (error) {
            console.error('Erro ao gerar resumo:', error);
            toast.error('Falha ao gerar resumo');
        }
    };

    if (loading) {
        return <LoadingScreen text={'Aguarde, estamos criando sua mentoria'} />;
    }

    return (
        <div className="flex min-h-screen flex-col justify-between">
            <Header />
            <main className="flex-1">
                <section className="relative">
                    <article className="p-4">
                        <div className="mx-auto -mt-4 flex h-full w-full max-w-4xl flex-col gap-8 rounded-b-4xl bg-[#F4F7F9] p-6 text-[#6D7895] lg:p-10">
                            <div className="flex justify-between pt-20">
                                <div className="flex flex-col">
                                    <div className="flex items-center justify-center">
                                        <CircleUserRound className="mr-2 text-blue-600" />
                                        <p className="text-xl font-bold text-[#2D3139]"> {profile?.nomeUsuario}</p>
                                    </div>
                                    <div className="flex items-center justify-items-start">
                                        <BriefcaseBusiness size={16} className="mr-2 text-blue-600" />
                                        <p className="mr-1 font-bold">Carreira: </p>
                                        <p className="">{profile?.carreira}</p>
                                    </div>
                                </div>

                                <div className="flex flex-col items-start">
                                    <div className="flex items-center justify-center text-center">
                                        <CalendarClock size={16} className="mr-2 text-blue-600" />
                                        <p className="text-sm break-words text-zinc-900">{profile?.experiencia}</p>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <Target size={16} className="mr-2 text-blue-600" />
                                        <p className="text-sm text-zinc-900">{profile?.cargo}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t-1 py-10">
                                <p className="block">{profile?.objetivoPrincipal}</p>
                            </div>

                            <div className="mb-6 w-full flex-col-reverse items-center rounded-lg bg-gray-100 p-1">
                                <button
                                    type="button"
                                    className="w-full cursor-pointer rounded-md py-2.5 text-center text-sm font-semibold transition-colors"
                                >
                                    Voltar
                                </button>

                                <button
                                    onClick={async () => {
                                        await createResume();
                                    }}
                                    type="button"
                                    className="flex w-full cursor-pointer items-center justify-center rounded-md bg-blue-600 py-2.5 text-center text-sm font-semibold text-zinc-100 transition-colors"
                                >
                                    Gerar mentoria com IA <Bot size={24} className="ml-2" />
                                </button>
                            </div>
                        </div>
                    </article>
                </section>
            </main>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default Overview;
