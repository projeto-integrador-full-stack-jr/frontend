import { useState } from 'react';
import LoginPage from './LoginPage.jsx';
import RegisterPage from './RegisterPage';
import Tabs from '../../components/Tabs';
import Header from '../../components/Header';
import Logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import video from '../../assets/videos/video.mp4';

const AuthLayout = () => {
    const [currentPage, setCurrentPage] = useState('login');

    return (
        <main className="flex min-h-screen font-sans">
            <div className="hidden min-h-screen bg-blue-600 lg:block lg:w-1/2">
                <video
                    className="absolute inset-0 min-h-screen object-cover lg:block lg:w-1/2"
                    src={video}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>

            <div className="flex flex-1 flex-col items-center justify-between lg:w-1/2">
                <div className="flex w-full items-center justify-center border-b border-gray-200">
                    <div className="w-full max-w-md">
                        <Header className={'border-0'} />
                    </div>
                </div>
                <div className="w-full max-w-md px-5">
                    <Tabs
                        currentPage={currentPage}
                        label1={'Login'}
                        label2={'Criar uma conta'}
                        variant={'primary'}
                        onSwitchPage={setCurrentPage}
                    />
                    {currentPage === 'login' ? (
                        <LoginPage onSwitchPage={setCurrentPage} />
                    ) : (
                        <RegisterPage onSwitchPage={setCurrentPage} />
                    )}
                </div>
                <div>
                    <p className="pb-2 text-sm text-zinc-400">© 2025 mentorIA. Todos os direitos reservados.</p>
                </div>
            </div>
        </main>
    );
};

export default AuthLayout;
