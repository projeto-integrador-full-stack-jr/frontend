import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import userService from '../../services/userService';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = ({ onSwitchPage }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();
    const notifyError = () => toast.error();
    const notifySuccess = () => toast.success();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { token } = await userService.getUser({ email, senha });

            localStorage.setItem('token', token);
            toast.success('Login efetuado com sucesso');
            navigate('/configuracoes');
        } catch (error) {
            if (email === '' || senha === '') {
                toast.error('Preencha todos os campos corretamente');
            } else if (error.response?.status === 403) {
                toast.error(
                    'Não foi possível acessar: e-mail não cadastrado ou senha incorreta.'
                );
            }
        }
    };

    return (
        <div className="flex w-full flex-col justify-between">
            <div className="mb-7 text-left">
                <h3 className="text-2xl font-bold text-gray-800">
                    Acesse sua conta
                </h3>
                <p className="mt-2 text-gray-500">
                    Entre e continue aproveitando nossos serviços.
                </p>
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
                <div className="mb-4 text-right">
                    <a
                        href="#"
                        className="text-sm font-semibold text-blue-600 hover:underline"
                    >
                        Esqueci minha senha
                    </a>
                </div>
                <Button
                    label={'Acessar'}
                    variant="primary"
                    className="flex w-full items-center justify-center bg-blue-600 text-center text-white hover:bg-gray-700"
                    type="submit"
                />
            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
                Não possui uma conta?{' '}
                <button
                    onClick={() => onSwitchPage('register')}
                    className="cursor-pointer font-semibold text-blue-600 hover:underline disabled:cursor-not-allowed"
                >
                    Criar conta
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
        </div>
    );
};

export default LoginPage;
