import { useState } from 'react';
import Header from './Header';
import { Flame } from 'lucide-react';
import profileService from '../services/profileService';
import resumeService from '../services/resumeService';
import { Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const styleLabel = 'mb-4 block text-center text-2xl font-light text-zinc-500';
const styleInput =
    'w-full rounded-lg border border-zinc-300 px-4 py-3 placeholder:text-sm placeholder:font-light placeholder:text-zinc-400 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:placeholder:text-zinc-300';

export default function StepByStepForm() {
    const notifyError = () => toast.error();
    const notifySuccess = () => toast.success();

    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        nomeUsuario: '',
        cargo: '',
        experiencia: '',
        objetivoPrincipal: '',
    });

    const totalSteps = 4;

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleNext = () => {
        if (currentStep < totalSteps) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep((prev) => prev - 1);
        }
    };
    const createProfile = async () => {
        try {
            const response = await profileService.updateProfile(formData);
            toast.success('Perfil criado com sucesso');
            console.log(formData);
            localStorage.setItem('userProfile', JSON.stringify(response));
            setTimeout(() => {
                navigate('/overview');
            }, 2000);
            return response.data;
        } catch (error) {
            console.error('Erro ao carregar perfil:', error);
            return null;
        }
    };

    const getStepContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div className="space-y-2">
                        <label className={styleLabel}>Para começarmos, como você gostaria de ser chamado(a)?</label>
                        <input
                            type="text"
                            value={formData.nomeUsuario}
                            onChange={(e) => handleInputChange('nomeUsuario', e.target.value)}
                            placeholder="Codifica Edu"
                            className={styleInput}
                        />
                    </div>
                );
            case 2:
                return (
                    <div className="space-y-2">
                        <label className={styleLabel}>Qual o seu cargo atual ?</label>
                        <input
                            type="text"
                            placeholder="Desenvolvedor Full Stack Júnior"
                            className={styleInput}
                            value={formData.cargo}
                            onChange={(e) => handleInputChange('cargo', e.target.value)}
                        />
                    </div>
                );
            case 3:
                return (
                    <div className="space-y-4">
                        <label className={styleLabel}>Quanto tempo de experiência você tem?</label>
                        <div className="flex justify-center gap-4 text-center">
                            {['0-3 anos', '3-5 anos', '5-10 anos', '+10 anos'].map((option) => (
                                <button
                                    key={option}
                                    onClick={() => handleInputChange('experiencia', option)}
                                    className={`cursor-pointer rounded-lg border-1 px-6 py-2 text-sm font-normal transition-all ${
                                        formData.experiencia === option
                                            ? 'border-blue-600 bg-blue-500 text-zinc-50'
                                            : 'border-blue-500 bg-white text-blue-500 hover:border-blue-400'
                                    }`}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div className="space-y-2">
                        <label className={styleLabel}>Qual o seu objetivo profissional? Onde deseja chegar?</label>
                        <textarea
                            value={formData.objetivoPrincipal}
                            onChange={(e) => handleInputChange('objetivoPrincipal', e.target.value)}
                            placeholder="Diga mais sobre seus objetivos profissionais..."
                            className="min-h-[200px] w-full rounded bg-zinc-50 p-4 placeholder:text-sm placeholder:font-light placeholder:text-zinc-400 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:placeholder:text-zinc-300"
                        />
                    </div>
                );
            default:
                return null;
        }
    };

    const progressPercentage = (currentStep / totalSteps) * 100;

    return (
        <div className="min-h-screen">
            <div className="absolute w-full">
                <Header />
            </div>
            <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
                <div className="w-full max-w-2xl">
                    <div className="mb-6 rounded-lg bg-white p-8 shadow-sm">
                        <div className="mb-8">{getStepContent()}</div>

                        <div className="flex gap-4 sm:flex">
                            <button
                                onClick={handleBack}
                                disabled={currentStep === 1}
                                className="cursor-pointer rounded-lg bg-blue-50 px-6 py-3 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                Voltar
                            </button>

                            {currentStep < totalSteps ? (
                                <button
                                    onClick={handleNext}
                                    className="flex-1 cursor-pointer rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                                >
                                    Próxima pergunta
                                </button>
                            ) : (
                                <button
                                    onClick={createProfile}
                                    className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
                                >
                                    <Flame className="h-5 w-5" />
                                    Ver resumo
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 min-w-full border px-5 py-5">
                        <div className="relative mx-auto mb-4 max-w-2xl text-center">
                            <span className="font-medium text-blue-600">
                                Etapa {currentStep} de {totalSteps}
                            </span>
                        </div>

                        <div className="relative mx-auto h-2 w-full max-w-2xl overflow-hidden rounded-full bg-gray-200">
                            <div
                                className="h-full bg-blue-600 transition-all duration-300 ease-out"
                                style={{ width: `${progressPercentage}%` }}
                            />
                        </div>
                    </div>
                </div>
            </div>
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
}
