import React, { useState } from 'react';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import LogoGoogle from '../../assets/google.svg';
import userService from '../../services/userService';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../contexts/auth/AuthProvider';
import { useContext } from 'react';

const RegisterPage = ({ onSwitchPage }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const navigate = useNavigate();
    const { setUser } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (senha !== confirmarSenha) {
            toast.error('As senhas não coincidem');
            return;
        }

        try {
            await userService.createUser({ email, senha });
            toast.success('Conta criada com sucesso!');

            const loginResponse = await userService.getUser({ email, senha });
            localStorage.setItem('token', loginResponse.token);
            localStorage.setItem('user', JSON.stringify(loginResponse.user));
            const response = await userService.getMe();
            setUser(response);

            setTimeout(() => {
                navigate('/criar-perfil');
            }, 2000);
        } catch (error) {
            console.error(error);
            toast.error(error?.response?.data?.message || 'Erro ao criar conta. Tente novamente.');
        }
    };

    return (
        <>
            <div className="mb-7 text-left">
                <h1 className="text-3xl font-bold text-gray-800">Crie sua conta</h1>
                <p className="mt-2 text-gray-500">Crie sua conta para aproveitar o melhor da mentorIA.</p>
            </div>

            <button className="flex w-full cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 font-semibold text-gray-700 transition-colors hover:bg-gray-50">
                <img src={LogoGoogle} alt="Google logo" width={20} className="mr-2" />
                Entrar com Google
            </button>

            <div className="my-6 flex items-center">
                <hr className="flex-grow border-t border-gray-200" />
                <span className="mx-4 text-xs font-medium text-gray-400">OU</span>
                <hr className="flex-grow border-t border-gray-200" />
            </div>

            <form onSubmit={handleSubmit}>
                <InputField
                    label="E-mail"
                    type="email"
                    placeholder="seu.email@exemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <InputField
                    label="Senha"
                    type="password"
                    placeholder="••••••••"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                />
                <InputField
                    label="Confirmar senha"
                    type="password"
                    placeholder="••••••••"
                    value={confirmarSenha}
                    onChange={(e) => setConfirmarSenha(e.target.value)}
                    required
                />

                <div className="mt-6">
                    <Button
                        label="Criar conta"
                        variant="primary"
                        className="flex w-full items-center justify-center bg-blue-600 text-center text-white hover:bg-gray-700"
                        type="submit"
                    />
                </div>
            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
                Já possui uma conta?{' '}
                <button
                    onClick={() => onSwitchPage('login')}
                    className="cursor-pointer font-semibold text-blue-600 hover:underline"
                >
                    Fazer login
                </button>
            </p>

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
        </>
    );
};

export default RegisterPage;
