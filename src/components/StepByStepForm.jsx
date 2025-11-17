import { useState } from 'react';
import Header from './Header';
import { UserStar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { UserServices } from '@services';
import LoadingScreen from './Loading';

const styleLabel = 'mb-4 font-outfit block text-center text-2xl font-light text-zinc-950';
const styleInput =
    'w-full rounded-lg border border-zinc-300 px-4 py-3 placeholder:text-sm placeholder:font-light placeholder:text-zinc-400 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:placeholder:text-zinc-300 text-zinc-500 text-sm';

export default function StepByStepForm() {
    const navigate = useNavigate();

    const [currentStep, setCurrentStep] = useState(1);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        nomeUsuario: '',
        cargo: '',
        experiencia: '',
        carreira: '',
        objetivoPrincipal: '',
    });

    const totalSteps = 6;

    const notifyError = (msg) => toast.error(msg);

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const validateStep = () => {
        switch (currentStep) {
            case 2:
                if (!formData.nomeUsuario.trim()) {
                    notifyError('Por favor, informe como deseja ser chamado.');
                    return false;
                }
                break;

            case 3:
                if (!formData.cargo.trim()) {
                    notifyError('Por favor, informe seu cargo atual.');
                    return false;
                }
                break;

            case 4:
                if (!formData.experiencia.trim()) {
                    notifyError('Selecione sua experiência profissional.');
                    return false;
                }
                break;

            case 5:
                if (!formData.carreira.trim()) {
                    notifyError('Selecione sua área de carreira.');
                    return false;
                }
                break;

            case 6:
                if (!formData.objetivoPrincipal.trim()) {
                    notifyError('Conte mais sobre seus objetivos profissionais.');
                    return false;
                }
                break;
        }
        return true;
    };

    const handleNext = () => {
        if (currentStep > 1 && !validateStep()) return;

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
            setLoading(true);
            const response = await UserServices.profileService.updateProfile(formData);
            localStorage.setItem('userProfile', JSON.stringify(response));

            setTimeout(() => navigate('/overview'), 1500);
            return response.data;
        } catch (error) {
            notifyError('Erro ao criar perfil');
            console.error('Erro ao carregar perfil:', error);
            return null;
            setLoading(false);
        }
    };

    const getStepContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div className="space-y-4 text-center">
                        <h1 className="font-elms text-3xl font-bold text-blue-700">Bem-Vindo ao mentorIA</h1>
                        <p className="font-montserrat text-sm text-zinc-500">
                            Para personalizar o seu plano de carreira, <br />
                            precisamos entender melhor o seu momento atual.
                        </p>
                        <p className="font-montserrat text-sm text-zinc-500">
                            Responda algumas perguntas rápidas e seguimos juntos nessa jornada!
                        </p>
                    </div>
                );

            case 2:
                return (
                    <div className="space-y-2">
                        <label className={styleLabel}>Como você gostaria de ser chamado(a)?</label>
                        <input
                            type="text"
                            value={formData.nomeUsuario}
                            onChange={(e) => handleInputChange('nomeUsuario', e.target.value)}
                            placeholder="Ex: Codifica Edu"
                            className={styleInput}
                        />
                    </div>
                );

            case 3:
                return (
                    <div className="space-y-2">
                        <label className={styleLabel}>Qual o seu cargo atual?</label>
                        <input
                            type="text"
                            placeholder="Ex: Desenvolvedor Full Stack Júnior"
                            className={styleInput}
                            value={formData.cargo}
                            onChange={(e) => handleInputChange('cargo', e.target.value)}
                        />
                    </div>
                );

            case 4:
                return (
                    <div className="space-y-4">
                        <label className={styleLabel}>Quanto tempo de experiência você tem?</label>
                        <div className="flex justify-center gap-4 text-center">
                            {['0-3 anos', '3-5 anos', '5-10 anos', '+10 anos'].map((option) => (
                                <button
                                    key={option}
                                    onClick={() => handleInputChange('experiencia', option)}
                                    className={`cursor-pointer rounded-lg border px-6 py-2 text-sm font-normal transition-all ${
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
            case 5:
                return (
                    <div className="space-y-2">
                        <label className={styleLabel}>Qual área de carreira você deseja seguir?</label>

                        <input
                            type="text"
                            value={formData.carreira}
                            onChange={(e) => handleInputChange('carreira', e.target.value)}
                            placeholder="Ex: Front-end, Back-end, UI/UX, Mobile..."
                            className={styleInput}
                        />
                    </div>
                );

            case 6:
                return (
                    <div className="space-y-2">
                        <label className={styleLabel}>Qual o seu objetivo profissional?</label>
                        <textarea
                            value={formData.objetivoPrincipal}
                            onChange={(e) => handleInputChange('objetivoPrincipal', e.target.value)}
                            placeholder="Fale um pouco sobre onde deseja chegar..."
                            className="min-h-[200px] w-full rounded-md border bg-zinc-50 p-4 text-sm text-zinc-500 placeholder:text-sm placeholder:font-light placeholder:text-zinc-400 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:placeholder:text-zinc-300"
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

            <div className="flex min-h-screen items-center justify-center p-4">
                <div className="w-full max-w-2xl">
                    {loading ? (
                        <LoadingScreen />
                    ) : (
                        <div className="mb-6 rounded-lg p-8">
                            <div className="mb-8">{getStepContent()}</div>

                            <div className="flex gap-4 sm:flex">
                                <button
                                    onClick={handleBack}
                                    disabled={currentStep === 1}
                                    className={
                                        currentStep === 1
                                            ? 'hidden'
                                            : 'cursor-pointer rounded-lg bg-blue-50 px-6 py-3 text-sm font-medium text-blue-600 hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-50'
                                    }
                                >
                                    Voltar
                                </button>

                                {currentStep < totalSteps ? (
                                    <button
                                        onClick={handleNext}
                                        className="flex-1 cursor-pointer rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700"
                                    >
                                        {currentStep === 1 ? 'Iniciar questionário' : 'Próxima pergunta'}
                                    </button>
                                ) : (
                                    <button
                                        onClick={createProfile}
                                        className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
                                    >
                                        <UserStar className="h-5 w-5" />
                                        Veja seu perfil
                                    </button>
                                )}
                            </div>
                        </div>
                    )}

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
