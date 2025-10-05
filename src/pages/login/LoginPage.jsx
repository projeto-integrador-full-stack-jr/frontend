import React from 'react';
import InputField from '../../components/InputField';
import LogoGoogle from '../../assets/google.svg';
import Button from '../../components/Button';

const LoginPage = ({ onSwitchPage }) => {
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
                />
                <InputField
                    label="Senha"
                    type="password"
                    placeholder="••••••••"
                />
                <div className="mb-4 text-right">
                    <a
                        href="#"
                        className="text-sm font-semibold text-blue-600 hover:underline"
                    >
                        Esqueci minha senha
                    </a>
                </div>
                <div className="mt-6">
                    <Button
                        label="Acessar"
                        variant="primary"
                        className="w-full bg-gray-800 hover:bg-gray-700"
                    />
                </div>
            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
                Não possui uma conta?{' '}
                <button
                    onClick={() => onSwitchPage('register')}
                    className="cursor-pointer font-semibold text-blue-600 hover:underline"
                >
                    Criar conta
                </button>
            </p>
        </div>
    );
};

export default LoginPage;
