import { useEffect, useState } from 'react';
import userService from '../../services/userService';
import { useAuth } from '../../contexts/auth/useAuth';
import { Trash2, Loader2, Eye } from 'lucide-react';
import Header from '../../components/Header';
import { ToastContainer, toast } from 'react-toastify';

export default function UserManagement() {
    const { user } = useAuth();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [deleting, setDeleting] = useState(null);

    useEffect(() => {
        if (user?.acesso === 'ADMIN') {
            fetchUsers();
        }
    }, [user]);

    const fetchUsers = async () => {
        try {
            setLoading(true);
            const response = await userService.getAllUsers();

            setUsers(response);
        } catch (error) {
            console.error('Erro ao buscar usuários:', error);
            toast.success(`Erro ao buscar`);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (userId) => {
        try {
            setDeleting(userId);
            await userService.deleteUser(userId);
            setUsers((prev) => prev.filter((u) => u.id !== userId));
            toast.success('Usuário excluído com sucesso!');
        } catch (error) {
            console.error('Erro ao excluir usuário:', error);
            toast.success(`Erro ao excluír o usuário ${userId}`);
        } finally {
            setDeleting(null);
        }
    };

    if (user?.acesso !== 'ADMIN') {
        return (
            <div className="flex h-screen items-center justify-center">
                <p className="text-lg text-gray-600">
                    Acesso negado. Apenas administradores podem acessar esta página.
                </p>
            </div>
        );
    }

    return (
        <>
            <Header />
            <div className="mx-auto min-h-screen max-w-7xl p-8">
                <h1 className="my-10 text-center text-3xl font-bold text-gray-800">Gerenciamento de Usuários</h1>

                {loading ? (
                    <div className="flex justify-center">
                        <Loader2 className="h-6 w-6 animate-spin text-blue-600" />
                    </div>
                ) : (
                    <div className="overflow-x-auto rounded-lg border shadow">
                        <table className="min-w-full border-collapse text-left text-sm">
                            <thead className="bg-gray-100 text-gray-600">
                                <tr>
                                    <th className="px-6 py-3">ID Usuário</th>
                                    <th className="px-6 py-3">E-mail</th>
                                    <th className="px-6 py-3">Acesso</th>
                                    <th className="px-6 py-3 text-center">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.length > 0 ? (
                                    users.map((u) => (
                                        <tr key={u.id} className="border-t hover:bg-gray-50">
                                            <td className="px-6 py-3">{u.id}</td>
                                            <td className="px-6 py-3">{u.email}</td>
                                            <td className="px-6 py-3">
                                                <span
                                                    className={`rounded-full px-2 py-1 text-xs font-medium ${
                                                        u.acesso === 'ADMIN'
                                                            ? 'bg-blue-100 text-blue-700'
                                                            : 'bg-gray-100 text-gray-700'
                                                    }`}
                                                >
                                                    {u.acesso}
                                                </span>
                                            </td>
                                            <td className="space-x-1 px-6 py-3 text-center">
                                                <button className="hover:text-zinc-700disabled:cursor-not-allowed cursor-pointer rounded-md border border-zinc-300 px-3 py-1.5 text-xs font-medium text-zinc-500 transition-all hover:cursor-not-allowed hover:bg-zinc-200 disabled:opacity-50">
                                                    <Eye size={16} />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(u.id)}
                                                    disabled={deleting === u.id}
                                                    className="cursor-pointer rounded-md border border-red-500 px-3 py-1.5 text-xs font-medium text-red-500 transition-all hover:bg-red-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                                                >
                                                    {deleting === u.id ? (
                                                        <Loader2 className="h-4 w-4 animate-spin" />
                                                    ) : (
                                                        <Trash2 className="h-4 w-4" />
                                                    )}
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="px-6 py-6 text-center text-gray-500">
                                            Nenhum usuário encontrado.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
            <ToastContainer
                position="top-right"
                autoClose={1500}
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
}
