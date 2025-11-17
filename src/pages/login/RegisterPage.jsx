import React, { useState } from 'react';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import Snackbar from '../../components/Snackbar';
import LogoGoogle from '../../assets/google.svg';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../contexts/auth/AuthProvider';
import { useContext } from 'react';
import useAuth from '../../services/auth/authService.js';
import { UserServices } from '@services';
import LoadingScreen from '../../components/Loading.jsx';

const RegisterPage = ({ onSwitchPage }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const navigate = useNavigate();
    const { setUser } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        if (confirmarSenha != senha) {
            toast.error('As senhas não coincidem');
            console.log('senhas nao são iguais ');
        }
        try {
            setLoading(true);
            console.log('careregando');
            await useAuth.createUser({ email, senha });
            toast.success('🎉 Conta criada com sucesso!');
            const loginResponse = await useAuth.loginUser({ email, senha });
            localStorage.setItem('token', loginResponse.token);

            const userData = await UserServices.userService.getUser();
            localStorage.setItem('user', JSON.stringify(userData));
            setUser(userData);

            setTimeout(() => {
                navigate('/criar-perfil');
            }, 1000);
        } catch (error) {
            console.error(error);
            toast.error(error?.response?.data?.message || 'Erro ao criar conta. Tente novamente.');
            setLoading(false);
        }
    };

    const isFormValid =
        email.trim() !== '' && senha.trim() !== '' && confirmarSenha.trim() !== '' && senha === confirmarSenha;

    return (
        <>
            <div className="mb-7 text-left">
                <h1 className="text-3xl font-bold text-gray-800">Crie sua conta</h1>
                <p className="mt-2 text-gray-500">Crie sua conta para aproveitar o melhor da mentorIA.</p>
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
                    {loading ? (
                        <LoadingScreen />
                    ) : (
                        <Button
                            label={loading ? 'Criando sua conta' : 'Criar conta'}
                            variant={!loading ? 'ghost' : 'primary'}
                            disabled={!isFormValid}
                            className={`flex w-full justify-center py-2 font-semibold text-white ${isFormValid ? 'bg-blue-600' : 'bg-gray-200 !text-gray-600 hover:bg-gray-200'} `}
                            type="submit"
                        />
                    )}
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
