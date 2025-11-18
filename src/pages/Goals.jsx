import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Plus, PencilLine, Calendar, Loader, PlusIcon, Trash } from 'lucide-react';
import Header from '../components/Header';
import ProfileMenu from '../components/Sidebar';
import Button from '../components/Button';
import { UserServices } from '@services';
import { ToastContainer, toast } from 'react-toastify';

// MUI Modal imports
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import LayoutPage from '../layouts/LayoutPage';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {
        xs: '90%',
        sm: 500,
        md: 750,
    },
    p: { xs: 3, sm: 4, md: 6 },
    bgcolor: '#FFFF',
    borderRadius: '16px',
    border: '2px solid #D9D9D9',
};

const Goals = () => {
    const [goals, setGoals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [openModal, setOpenModal] = useState(false);

    const [newGoal, setNewGoal] = useState({
        titulo: '',
        prazo: '',
        statusMeta: '',
    });

    const [editingGoal, setEditingGoal] = useState(null);

    const handleOpenModal = () => setOpenModal(true);

    const handleCloseModal = () => {
        setOpenModal(false);
        setEditingGoal(null);
        setNewGoal({ titulo: '', prazo: '', statusMeta: 'PENDENTE' });
    };

    const handleCreateGoal = async (e) => {
        e.preventDefault();
        if (newGoal.title === '' || newGoal.deadline === '' || newGoal.statusMeta === '') {
            toast.error('Preencha todos os campos antes de salvar a meta.');
        }
        try {
            const goals = await UserServices.goalService.createGoal(newGoal);
            setGoals((prevGoals) => [...prevGoals, goals]);
            setNewGoal({ title: '', deadline: '', statusMeta: '' });
            toast.success('Meta criada com sucesso!');
            handleCloseModal();
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.message);
        } finally {
        }
    };

    const handleEditGoal = async (e) => {
        e.preventDefault();
        try {
            const updated = await UserServices.goalService.updateGoal(editingGoal.metaId, newGoal);

            setGoals((prev) => prev.map((g) => (g.metaId === editingGoal.metaId ? updated : g)));

            toast.success('Meta atualizada com sucesso!');
            handleCloseModal();
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.message || 'Erro ao atualizar meta.');
        }
    };

    const fetchGoals = async () => {
        try {
            const goals = await UserServices.goalService.getGoals();
            setGoals(goals);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const deleteGoal = async (metaId) => {
        setLoading(true);
        try {
            await UserServices.goalService.deleteGoal(metaId);
            setGoals((prev) => prev.filter((goal) => goal.metaId !== metaId));
            toast.success('Meta excluída com sucesso');
        } catch (error) {
            console.error('Erro ao excluir meta:', error);
            toast.error('Erro ao excluir meta');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchGoals();
    }, []);

    return (
        <LayoutPage>
            <div className="flex h-screen w-full">
                <div className="overflow min-h-screen flex-1 p-6 py-30">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-6 flex flex-col items-start justify-between space-y-10 md:flex-row">
                            <div>
                                <h1 className="mb-4 text-3xl font-extrabold text-zinc-600 sm:mb-0">Suas metas</h1>
                                <p className="text-md font-light text-zinc-400">
                                    Acompanhe suas metas, veja o progresso e mantenha-se organizado
                                </p>
                            </div>
                            <Button
                                label={'Crie uma nova meta'}
                                variant="secondary"
                                icon={<Plus />}
                                onClick={handleOpenModal}
                                className={goals.length === 0 ? 'hidden' : ''}
                            />
                        </div>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {!goals || goals.length === 0 ? (
                                <div className="col-span-full flex flex-col items-center justify-center py-20 text-center text-gray-500">
                                    <p className="text-lg font-medium">Você ainda não criou nenhuma meta.</p>
                                    <p className="mb-6 text-sm">Comece agora e acompanhe seu progresso!</p>
                                    <Button
                                        label="Crie sua primeira meta"
                                        variant="secondary"
                                        icon={<Plus />}
                                        onClick={handleOpenModal}
                                    />
                                </div>
                            ) : (
                                goals.map((goal) => (
                                    <div
                                        key={goal.id}
                                        className="flex flex-col rounded-lg border bg-white p-5 shadow transition-shadow duration-200 hover:shadow-lg"
                                    >
                                        <div className="mb-4 flex items-start justify-between">
                                            <h2 className="text-xl font-bold text-zinc-900">{goal.titulo}</h2>
                                        </div>

                                        <div className="space-y-1 pb-2">
                                            <div className="flex items-center justify-start gap-1">
                                                <Loader size={12} />
                                                <p className="text-sm text-gray-900">
                                                    Status:{' '}
                                                    <span
                                                        className={clsx(
                                                            'ml-1 rounded-full border-1 px-3 py-[2px] text-sm font-medium',
                                                            {
                                                                CONCLUIDO:
                                                                    'border-green-50 bg-green-200 text-[#04364A]',
                                                                EM_ANDAMENTO:
                                                                    'border-[#F25912] bg-[#FFECDB] text-[#F25912]',
                                                                PENDENTE:
                                                                    'border-[#CB0404] bg-[#FFE6E1] text-[#CB0404]',
                                                            }[goal.statusMeta] || 'bg-red-200'
                                                        )}
                                                    >
                                                        {{
                                                            CONCLUIDO: 'Concluída',
                                                            EM_ANDAMENTO: 'Em andamento',
                                                            PENDENTE: 'Pendente',
                                                        }[goal.statusMeta] || 'Pendente'}
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="flex items-center justify-start gap-1">
                                                <Calendar size={12} />
                                                <p className="text-sm text-gray-500">Prazo: {goal.prazo}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between gap-2 border-t pt-2">
                                            <Button
                                                variant="secondary"
                                                icon={<PencilLine size={14} />}
                                                title="Editar"
                                                label={'Editar'}
                                                onClick={() => {
                                                    setEditingGoal(goal);
                                                    setNewGoal({
                                                        titulo: goal.titulo,
                                                        prazo: goal.prazo,
                                                        statusMeta: goal.statusMeta,
                                                    });
                                                    setOpenModal(true);
                                                }}
                                                className="flex w-full items-center justify-center bg-blue-50 font-semibold text-blue-600 hover:bg-blue-100"
                                            />

                                            <Button
                                                variant="secondary"
                                                icon={<Trash size={14} />}
                                                title="Excluir"
                                                label={'Excluir'}
                                                onClick={() => deleteGoal(goal.metaId)}
                                                className="flex w-full items-center justify-center bg-red-50 font-semibold text-red-600 hover:bg-red-100"
                                            />
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                open={openModal}
                onClose={handleCloseModal}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        sx: { backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)' },
                    },
                }}
            >
                <Fade in={openModal}>
                    <Box sx={style} className="">
                        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                            {editingGoal ? 'Editar Meta' : 'Criar Nova Meta'}
                        </Typography>

                        <form className="flex flex-col gap-3">
                            <input
                                type="text"
                                placeholder="Título da meta"
                                value={newGoal.titulo}
                                onChange={(e) => setNewGoal({ ...newGoal, titulo: e.target.value })}
                                className="rounded border p-2"
                                required
                            />
                            <input
                                type="date"
                                value={newGoal.prazo?.split('T')[0] || ''}
                                onChange={(e) =>
                                    setNewGoal({
                                        ...newGoal,
                                        prazo: e.target.value + 'T23:59:59Z',
                                    })
                                }
                                className="rounded border p-2"
                                required
                            />
                            <select
                                value={newGoal.statusMeta}
                                onChange={(e) => setNewGoal({ ...newGoal, statusMeta: e.target.value })}
                                className="rounded border p-2"
                            >
                                <option value="PENDENTE">Pendente</option>
                                <option value="EM_ANDAMENTO">Em andamento</option>
                            </select>

                            <div className="mt-4 flex justify-end gap-2">
                                <Button label={'Cancelar'} onClick={handleCloseModal} variant="outline" />

                                <Button
                                    label={editingGoal ? 'Salvar alterações' : 'Criar meta'}
                                    onClick={editingGoal ? handleEditGoal : handleCreateGoal}
                                />
                            </div>
                        </form>
                    </Box>
                </Fade>
            </Modal>

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
        </LayoutPage>
    );
};

export default Goals;
