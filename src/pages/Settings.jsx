import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import ProfileMenu from '../components/ProfileMenu';
import InputField from '../components/InputField';
import Header from '../components/Header';
import avatar from '../assets/profile.jpg';
import Modal from '../components/Modal';
import Snackbar from '../components/Snackbar';
import { useAuth } from '../contexts/auth/useAuth';
import { toast, ToastContainer } from 'react-toastify';
import { UserServices } from '@services';
import { User2 } from 'lucide-react';

const Settings = () => {
    const { user, setUser, logout } = useAuth();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const notifyError = () => toast.error('');
    const notifySuccess = () => toast.success('');

    const handleUpdateEmail = async (e) => {
        e.preventDefault();
        if (!email) return alert('Digite um e-mail válido.');
        setLoading(true);

        try {
            const data = await UserServices.profileService.getProfile();
            toast.success('E-mail atualizado com sucesso!');
            setUser(data);
            if (data.token) {
                localStorage.setItem('token', data.token);
            }
        } catch (error) {
            console.error(error);
            alert('Erro ao atualizar e-mail. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };
    // function handleSubmit(event) {
    //     event.preventDefault(); // evita o refresh/reload

    //     if (!newEmail || !newPassword || !passwordConfirmed) {
    //         // se algum campo estiver vazio

    //         return (
    //             setMessage('Por favor, preencha todos os campos corretamente!'),
    //             setVariant('error')
    //         );
    //     }

    //     if (!/\S+@\S+\.\S+/.test(newEmail)) {
    //         // se o email não é válido
    //         return (
    //             setMessage('Por favor, insira um e-mail válido!'),
    //             setVariant('error')
    //         );
    //     }

    //     if (newPassword !== passwordConfirmed) {
    //         // se as senhas não são iguais
    //         return (
    //             setMessage('As senhas não coincidem!'),
    //             setVariant('error')
    //         );
    //     }

    //     setCurrentEmail(newEmail);
    //     setCurrentPassword(newPassword);

    //     setMessage('Perfil atualizado com sucesso!');
    //     setVariant('success');
    //     // aqui faria a chamada para o backend para atualizar os dados

    //     setNewEmail('');
    //     setNewPassword('');
    //     setPasswordConfirmed('');
    // }

    return (
        <>
            <Header />
            <div className="flex h-[90vh] w-full">
                <div className="h-full">
                    <ProfileMenu />
                </div>

                <main className="flex w-full flex-col items-center justify-center px-5">
                    <div className="flex max-w-md flex-col justify-start">
                        <h3 className="text-4xl font-extrabold text-[#3F3D56] lg:self-auto lg:text-5xl">
                            Configurações
                        </h3>

                        <div className="mt-20 flex w-full items-start justify-center gap-2">
                            <div className="rounded-md bg-blue-600 p-4">
                                <User2 size={32} className="text-zinc-100" />
                            </div>

                            <article className="flex w-full flex-col">
                                <p className="text-md text-zinc-950">Nome: {user?.nomeUsuario}</p>
                                <p className="text-md text-zinc-950">E-mail: {user?.email}</p>
                                <p className="text-xs text-zinc-400">Usuário Id: {user?.id}</p>
                            </article>
                        </div>

                        <form onSubmit={handleUpdateEmail} className="mt-12 w-full">
                            <InputField
                                label="E-mail"
                                placeholder="codificaedu@codifica.com"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <InputField
                                label="Senha"
                                type="password"
                                placeholder="*********************"
                                // value={newPassword}
                                // onChange={(e) => setNewPassword(e.target.value)}
                            />
                            <InputField
                                label="Confirmar senha"
                                type="password"
                                placeholder="*********************"
                                // value={passwordConfirmed}
                                // onChange={(e) =>
                                //     setPasswordConfirmed(e.target.value)
                                // }
                            />
                            <div className="mt-10 flex">
                                <Button
                                    label={'Atualizar dados'}
                                    variant="primary"
                                    onClick={handleUpdateEmail}
                                    disabled={loading}
                                    className="!bg-[#00C569] text-sm hover:!bg-[#00a455]"
                                />
                                <Button
                                    variant="ghost"
                                    label={'Excluir minha conta'}
                                    onClick={handleUpdateEmail}
                                    disabled={loading}
                                    className="text-sm text-red-500"
                                />
                            </div>
                        </form>
                        <div className="mt-8 flex items-baseline gap-10">
                            <Snackbar></Snackbar>

                            <Modal>{/* obs.: ver o pode ser feito aqui */}</Modal>
                        </div>
                    </div>
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
        </>
    );
};

export default Settings;
