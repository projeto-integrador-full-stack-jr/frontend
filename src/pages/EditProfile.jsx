import React, { useState } from 'react';
import Header from '../components/Header';
import ProfileMenu from '../components/ProfileMenu';
import Button from '../components/Button';
import Snackbar from '../components/Snackbar';
import InputField from '../components/InputField';
import Modal from '../components/Modal';
import LayoutPage from '../layouts/LayoutPage';
import { Bot } from 'lucide-react';

const styleLabel = 'mb-[2px] block text-sm font-md text-gray-700';
const temposExperiencia = ['0-3 anos', '3-5 anos', '5-10 anos', '+10 anos'];

const EditProfile = () => {
    const [profileData, setProfileData] = useState({
        nomePerfil: '',
        nomeCompleto: '',
        cargo: '',
        objetivo: '',
        experiencia: '',
    });

    const [message, setMessage] = useState('');
    const [variant, setVariant] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData((prev) => ({ ...prev, [name]: value }));
    };

    const handleExperienciaClick = (tempo) => {
        setProfileData((prev) => ({ ...prev, experiencia: tempo }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !profileData.nomePerfil ||
            !profileData.nomeCompleto ||
            !profileData.cargo ||
            !profileData.objetivo ||
            !profileData.experiencia
        ) {
            setMessage('Por favor, preencha todos os campos antes de salvar!');
            setVariant('error');
            return;
        }

        console.log('Dados do perfil:', profileData);
        setMessage('Perfil profissional atualizado com sucesso!');
        setVariant('success');
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
                    <form onSubmit={handleSubmit} className="mt-10 flex w-full flex-col">
                        {/* Nome do perfil */}
                        <div className="">
                            <label className={styleLabel}>Nome do perfil</label>
                            <InputField
                                name="nomePerfil"
                                value={profileData.nomePerfil}
                                onChange={handleChange}
                                placeholder="Codifica Edu"
                            />
                        </div>

                        {/* Nome e Sobrenome */}
                        <div className="">
                            <label className={styleLabel}>Carreira</label>
                            <InputField
                                name="nomeCompleto"
                                value={profileData.carreira}
                                onChange={handleChange}
                                placeholder="ex: Tecnologia, Saúde, Logística..."
                            />
                        </div>

                        {/* Cargo atual */}
                        <div className="">
                            <label className={styleLabel}>Cargo atual</label>
                            <InputField
                                name="cargo"
                                value={profileData.cargo}
                                onChange={handleChange}
                                placeholder="ex: Desenvolvedor Full Stack Júnior"
                            />
                        </div>

                        {/* Objetivo profissional */}
                        <div className=" ">
                            <label className={styleLabel}>Objetivo profissional</label>
                            <textarea
                                name="objetivo"
                                value={profileData.objetivo}
                                onChange={handleChange}
                                placeholder="Descreva brevemente seu objetivo profissional..."
                                className="min-h-[150px] w-full rounded-md border border-gray-300 p-3 text-[14px] text-zinc-400 transition focus:ring-2 focus:ring-blue-500 focus:outline-none focus:placeholder:text-gray-200"
                            />
                        </div>

                        {/* Botões de tempo de experiência */}
                        <div className="">
                            <label className={styleLabel}>Tempo de experiência</label>
                            <div className="flex flex-wrap gap-3">
                                {temposExperiencia.map((tempo) => (
                                    <Button
                                        label={tempo}
                                        key={tempo}
                                        variant="ghost"
                                        type="button"
                                        onClick={() => handleExperienciaClick(tempo)}
                                        className={`rounded-md border border-zinc-300 px-4 py-2 text-lg text-zinc-500 transition ${
                                            profileData.experiencia === tempo
                                                ? 'font-sm bg-blue-600 !text-zinc-100'
                                                : { styleLabel }
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="mt-10 flex items-center justify-start gap-3">
                            <Button
                                label="Salvar perfil"
                                variant="primary"
                                type="submit"
                                className="rounded-md !bg-[#00C569] hover:!bg-[#00a455]"
                            />
                            <Button
                                className="flex items-center justify-between hover:cursor-not-allowed"
                                label={
                                    <>
                                        Gerar nova mentoria
                                        <Bot size={24} className="ml-2" />
                                    </>
                                }
                            />
                        </div>
                        {/* Botão de salvar perfil */}
                        {/* <Snackbar message={message} variant={variant}></Snackbar> */}

                        {/* <Modal /> */}
                    </form>
                </div>
            </div>
        </LayoutPage>
    );
};

export default EditProfile;
