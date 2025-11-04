import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import ProfileMenu from '../components/ProfileMenu';
import Button from '../components/Button';
import Snackbar from '../components/Snackbar';
import InputField from '../components/InputField';
import Modal from '../components/Modal';
import LayoutPage from '../layouts/LayoutPage';
import { Bot } from 'lucide-react';
import { UserServices } from '@services';
import { useAuth } from '../contexts/auth/useAuth';
import { ToastContainer, toast } from 'react-toastify';

const styleLabel = 'mb-[2px] block text-sm font-md text-gray-700';
const temposExperiencia = ['0-3 anos', '3-5 anos', '5-10 anos', '+10 anos'];

const EditProfile = () => {
    // const [profile, setProfile] = useState(true);
    // const { user, setUser, logout } = useAuth();

    // useEffect(() => {
    //     async function loadProfile() {
    //         try {
    //             const data = await UserServices.profileService.getProfile();
    //             console.log(data);
    //             setProfile(data);
    //             setUser(true);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }
    //     loadProfile();
    // }, []);

    const [formData, setFormData] = useState({
        nomeUsuario: '',
        carreira: '',
        cargo: '',
        objetivoPrincipal: '',
        experiencia: '',
    });

    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [variant, setVariant] = useState('');
    const [showSnackbar, setShowSnackbar] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleExperienciaClick = (tempo) => {
        setFormData((prev) => ({ ...prev, experiencia: tempo }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { nomeUsuario, carreira, cargo, objetivoPrincipal, experiencia } = formData;

        if (!nomeUsuario || !carreira || !cargo || !objetivoPrincipal || !experiencia) {
            toast.error('Preencha todos os campos antes de salvar!');
            console.log(formData);
            return;
        }

        try {
            setLoading(true);
            console.log('Atualizando perfil...');
            await UserServices.profileService.updateProfile(formData);

            console.log('Dados do perfil:', formData);
            toast.success('Perfil profissional atualizado com sucesso!');
        } catch (error) {
            console.error('Erro ao atualizar perfil:', error);
            toast.error('Erro ao atualizar perfil. Tente novamente.');
        } finally {
            setShowSnackbar(true);
            setLoading(false);
        }
    };

    const handleCloseSnackbar = () => {
        setShowSnackbar(false);
    };

    return (
        <LayoutPage>
            <div className="flex w-full items-center justify-center py-20">
                <div className="flex max-w-[520px] flex-col">
                    {/* Título */}
                    <h1 className="text-[32px] leading-[40px] font-bold whitespace-nowrap text-[#5A6379]">
                        Editar perfil profissional
                    </h1>
                    {/* Formulário */}
                    <form onSubmit={handleSubmit} className="mt-10 flex w-full flex-col space-y-1">
                        <InputField
                            label="Nome de perfil"
                            name="nomeUsuario"
                            value={formData.nomeUsuario}
                            onChange={handleChange}
                            placeholder="Codifica Edu"
                        />

                        <InputField
                            name="carreira"
                            label="Carreira"
                            value={formData.carreira}
                            onChange={handleChange}
                            placeholder="ex: Tecnologia, Saúde, Logística..."
                        />

                        <InputField
                            label="Cargo atual"
                            name="cargo"
                            value={formData.cargo}
                            onChange={handleChange}
                            placeholder="ex: Desenvolvedor Full Stack Júnior"
                        />

                        <div>
                            <label className={styleLabel}>Objetivo profissional</label>
                            <textarea
                                name="objetivoPrincipal"
                                value={formData.objetivoPrincipal}
                                onChange={handleChange}
                                placeholder="Descreva brevemente seu objetivo profissional..."
                                className="min-h-[150px] w-full rounded-md border border-gray-300 p-3 text-[14px] text-zinc-600 transition focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        <div className="mb-10">
                            <label className={styleLabel}>Tempo de experiência</label>
                            <div className="flex flex-wrap gap-3">
                                {temposExperiencia.map((tempo) => (
                                    <Button
                                        key={tempo}
                                        label={tempo}
                                        type="button"
                                        variant="ghost"
                                        onClick={() => handleExperienciaClick(tempo)}
                                        className={`rounded-md border border-zinc-300 px-4 py-2 text-lg text-zinc-500 transition ${
                                            formData.experiencia === tempo
                                                ? 'bg-blue-600 !text-zinc-100'
                                                : 'hover:bg-gray-100'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center justify-start gap-3">
                            <Button
                                label={loading ? 'Salvando...' : 'Salvar perfil'}
                                disabled={loading}
                                variant="primary"
                                type="submit"
                                className="rounded-md !bg-[#00C569] hover:!bg-[#00a455]"
                            />
                            <Button
                                iconPosition="right"
                                type="button"
                                className="flex items-center justify-between hover:cursor-not-allowed"
                                icon={<Bot size={24} className="ml-2" />}
                                label="Novo resumo"
                            />
                        </div>
                    </form>
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
        </LayoutPage>
    );
};

export default EditProfile;
