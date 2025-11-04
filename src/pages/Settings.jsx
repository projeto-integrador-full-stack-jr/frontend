import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { User2 } from 'lucide-react';
import { useAuth } from '../contexts/auth/useAuth';
import { UserServices } from '@services';
import Button from '../components/Button';
import ProfileMenu from '../components/ProfileMenu';
import InputField from '../components/InputField';
import Header from '../components/Header';
import Modal from '../components/Modal';
import Snackbar from '../components/Snackbar';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [variant, setVariant] = useState('');
    const { user, setUser, logout } = useAuth();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleUpdateEmail = async (e) => {
        e.preventDefault();

        if (!email || !senha || !confirmPassword) {
            toast.error('Preencha todos os campos.');
            return;
        }

        if (senha !== confirmPassword) {
            toast.error('As senhas não coincidem.');
            return;
        }

        setLoading(true);
        try {
            const data = await UserServices.userService.updateUser(email, senha);
            toast.success('E-mail atualizado com sucesso!');
            setUser(data);
            if (data.token) {
                localStorage.setItem('token', data.token);
            }
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        } catch (error) {
            console.error(error);

            if (error.response) {
                error.response.status === 409
                    ? toast.error('Este e-mail já pertence a outra conta.')
                    : toast.error('Erro ao atualizar e-mail. Tente novamente.');
            } else {
                // Caso o erro seja de rede ou o servidor não respondeu
                toast.error('Erro de conexão com o servidor. Verifique sua internet.');
            }
        } finally {
            setLoading(false);
        }
    };

    // const handleDeleteAccount = async (id) => {
    //     try {
    //         await UserServices.userService.deleteUser(id);
    //         toast.success('Conta excluída com sucesso!');
    //         logout();
    //     } catch (error) {
    //         console.error(error);
    //         toast.error('Erro ao excluir conta. Tente novamente.');
    //     }
    // };

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
                                placeholder="exemplo@dominio.com"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <InputField
                                label="Senha"
                                type="password"
                                placeholder="*********************"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                            <InputField
                                label="Confirmar senha"
                                type="password"
                                placeholder="*********************"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <div className="mt-10 flex gap-4">
                                <Button
                                    label="Atualizar dados"
                                    variant="primary"
                                    type="submit"
                                    disabled={loading}
                                    className="!bg-[#00C569] text-sm hover:!bg-[#00a455]"
                                />
                                {/* <Button
                                    variant="ghost"
                                    label="Excluir minha conta"
                                    onClick={handleDeleteAccount}
                                    className="text-sm text-red-500"
                                /> */}
                                <Modal>
                                    <button
                                        // onClick={handleDeleteAccount}
                                        type="button"
                                        className="cursor-pointer text-red-500 hover:text-red-700"
                                    >
                                        Deletar conta
                                    </button>
                                </Modal>
                            </div>
                        </form>

                        <div className="mt-8 flex items-baseline gap-10">
                            {/* <Snackbar message={message} variant={variant}>
                                <Button
                                    label="Atualizar perfil"
                                    variant="primary"
                                    type="submit"
                                    className="!bg-[#00C569] hover:!bg-[#00a455]"
                                />
                            </Snackbar> */}
                        </div>
                    </div>
                </main>

                <ToastContainer position="top-right" autoClose={3000} pauseOnHover />
            </div>
        </>
    );
};

export default Settings;
