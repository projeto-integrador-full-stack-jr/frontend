import React from 'react';
import InputField from '../../components/InputField';
import onSwitchPage from '../login/AuthLayout';
import Button from '../../components/Button';
import LogoGoogle from '../../assets/google.svg';
import { useState } from 'react';
import userService from '../../services/userService';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {
    const notifyError = () => toast.error('');
    const notifySuccess = () => toast.success('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await userService.createUser({ email, senha });
            toast.success('Conta criada com sucesso');
            navigate('/criar-perfil');
        } catch (error) {
            console.error(error);
            setMessage('Erro ao criar usuário.');
        }
    };
    return (
        <>
            <div className="mb-7 text-left">
                <h1 className="text-3xl font-bold text-gray-800">
                    Crie sua conta
                </h1>
                <p className="mt-2 text-gray-500">
                    Crie sua conta para aproveitar o melhor da mentorIA.
                </p>
            </div>

            <button className="flex w-full cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 font-semibold text-gray-700 transition-colors hover:bg-gray-50">
                <img
                    src={LogoGoogle}
                    alt="Google logo"
                    width={20}
                    className="mr-2"
                />
                Entrar com Google
            </button>
            <div className="my-6 flex items-center">
                <hr className="flex-grow border-t border-gray-200" />
                <span className="mx-4 text-xs font-medium text-gray-400">
                    OU
                </span>
                <hr className="flex-grow border-t border-gray-200" />
            </div>

            <form>
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
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                />
                <div className="mt-6">
                    <Button
                        label="Criar conta"
                        variant="primary"
                        className="flex w-full items-center justify-center bg-blue-600 text-center text-white hover:bg-gray-700"
                        onClick={handleSubmit}
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
        </>
    );
};

export default RegisterPage;
