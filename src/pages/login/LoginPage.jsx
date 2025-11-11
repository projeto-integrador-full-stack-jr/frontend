import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import LogoGoogle from '../../assets/google.svg';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import { AuthContext } from '../../contexts/auth/AuthProvider';
import useAuth from '../../services/auth/authService';
import { UserServices, AdminServices } from '@services';

const LoginPage = ({ onSwitchPage }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();
    const notifyError = () => toast.error();
    const notifySuccess = () => toast.success();
    const { user, setUser } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !senha) {
            toast.error('Preencha todos os campos corretamente');
            return;
        }

        try {
            const { token } = await useAuth.loginUser({ email, senha });
            localStorage.setItem('token', token);

            const response = await UserServices.userService.getUser();
            setUser(response);

            toast.success('Login efetuado com sucesso');

            const routeAfterLogin = response.acesso === 'ADMIN' ? '/admin' : '/mentoria';

            setTimeout(() => {
                navigate(routeAfterLogin);
            }, 2000);
        } catch (error) {
            if (error.response?.status === 403) {
                toast.error('E-mail não cadastrado ou senha incorreta.');
            } else {
                toast.error('Erro ao fazer login. Tente novamente.');
            }
        }
    };

    return (
        <div className="flex w-full flex-col justify-between">
            <div className="mb-7 text-left">
                <h3 className="text-2xl font-bold text-gray-800">Acesse sua conta</h3>
                <p className="mt-2 text-gray-500">Entre e continue aproveitando nossos serviços.</p>
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
                <div className="mb-4 text-right">
                    <a href="#" className="text-sm font-semibold text-blue-600 hover:underline">
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
