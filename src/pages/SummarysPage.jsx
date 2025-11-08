import { useEffect, useState } from 'react';
import Layout from '../layouts/LayoutPage';
import { UserServices } from '@services';
import Button from '../components/Button';
import { Trash } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const ResumePages = () => {
    const [resumes, setResumes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState();
    const navigate = useNavigate();

    const fetchResumes = async () => {
        try {
            const data = await UserServices.summaryService.getSummaries();
            setResumes(data || []);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const deleteResume = async (resumeId) => {
        setLoading(true);
        try {
            await UserServices.summaryService.deleteSummary(resumeId);

            setResumes((prev) => prev.filter((resume) => resume.id !== resumeId));
            toast.success('Resumo excluído com sucesso!');
        } catch (error) {
            console.error('Erro ao excluir resumo:', error);
            toast.error('Erro ao excluir resumo');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
            console.log(parsedUser.email);
            parsedUser.perfilId === 1 ? navigate('/criar-perfil') : console.log(parsedUser.perfilId);
        }

        fetchResumes();
    }, []);

    if (loading) {
        return (
            <Layout>
                <div className="flex h-full items-center justify-center">
                    <p className="text-gray-500">Carregando...</p>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="flex w-full flex-col py-20">
                <h1 className="mb-4 text-3xl font-extrabold text-zinc-600">Seus resumos</h1>
                <p className="text-md mb-10 font-light text-zinc-400">
                    Veja todos os seus resumos criados até o momento
                </p>

                {resumes.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {resumes.map((resume) => (
                            <div
                                key={resume.id}
                                className="rounded-xl border border-zinc-100 bg-white p-5 shadow transition hover:shadow-lg"
                            >
                                <h2 className="mb-2 text-lg font-semibold text-zinc-700">
                                    {resume.titulo || 'Sem título'}
                                </h2>

                                <div
                                    className="prose prose-blue line-clamp-3 text-sm text-zinc-600"
                                    dangerouslySetInnerHTML={{
                                        __html: resume.conteudo || '<p>Sem conteúdo</p>',
                                    }}
                                />

                                <div className="mt-4 flex items-center justify-between gap-4 text-sm">
                                    <Button
                                        variant="primary"
                                        title="Ver mais do resumo"
                                        label={'Ver mais'}
                                        className="flex w-full items-center justify-center font-semibold text-zinc-50 hover:bg-blue-700"
                                    />
                                    <Button
                                        variant="secondary"
                                        icon={<Trash size={14} />}
                                        title={`Excluir ${resume.titulo}`}
                                        label={'Excluir'}
                                        onClick={() => deleteResume(resume.resumoId)}
                                        className="flex w-full items-center justify-center bg-red-50 font-semibold text-red-600 hover:bg-red-100"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center">
                        <p className="mb-4 text-lg font-medium">Você ainda não criou nenhum resumo</p>
                        <Button
                            label={!user?.perfilId ? 'Crie um perfil para ter um resumo' : 'Crie seu resumo'}
                            variant="primary"
                            onClick={() => (!user?.perfilId ? navigate('/criar-perfil') : navigate('/overview'))}
                        />
                    </div>
                )}
            </div>
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
        </Layout>
    );
};

export default ResumePages;
