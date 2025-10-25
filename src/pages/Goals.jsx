import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Plus, PencilLine, Calendar, Loader, PlusIcon, Trash } from 'lucide-react';
import Header from '../components/Header';
import ProfileMenu from '../components/ProfileMenu';
import Button from '../components/Button';
import { UserServices } from '@services';

// MUI Modal imports
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';

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

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => {
        setOpenModal(false);
        setNewGoal({ title: '', deadline: '', status: 'PENDENTE' });
    };

    const handleSaveGoal = async () => {
        if (!newGoal.title || !newGoal.deadline) return;

        setGoals((prev) => [...prev, { ...newGoal, id: prev.length + 1 }]);
        handleCloseModal();
    };

    const handleCreateGoal = async () => {
        try {
            const goals = await UserServices.goalService.createGoal(newGoal);
            console.log('Passou aqui');
        } catch (error) {
            console.error(error);
        } finally {
        }
    };

    // Buscar as metas do usuário
    const fetchGoals = async () => {
        try {
            const goals = await UserServices.goalService.getGoals();
            console.log(goals);
            console.log(goals);

            setGoals(goals);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    // Excluir meta do usuário
    const deleteGoal = async (metaId) => {
        setLoading(true);
        try {
            await UserServices.goalService.deleteGoal(metaId);
            setGoals((prev) => prev.filter((goal) => goal.metaId !== metaId));
        } catch (error) {
            console.error('Erro ao excluir meta:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchGoals();
    }, []);

    return (
        <>
            <Header />
            <div className="flex h-screen w-full">
                <ProfileMenu />

                <main className="overflow min-h-screen flex-1 p-6 py-30">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-6 flex flex-col items-start justify-between space-y-10 md:flex-row">
                            <div>
                                <h1 className="mb-4 text-3xl font-extrabold text-[#3F3D56] sm:mb-0">Suas metas</h1>
                                <p className="text-md font-light text-zinc-400">
                                    Acompanhe suas metas, veja o progresso e mantenha-se organizado
                                </p>
                            </div>
                            <Button
                                label={'Crie uma nova meta'}
                                variant="secondary"
                                icon={<Plus />}
                                onClick={handleOpenModal}
                                className={!goals ? 'hidden' : ''}
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
                                                            'ml-1 rounded-full border-2 px-3 py-[2px] text-sm font-medium',
                                                            {
                                                                CONCLUIDO: 'border-cyan-300 bg-green-200',
                                                                EM_ANDAMENTO: 'border-b-orange-600 bg-yellow-200',
                                                                PENDENTE: 'border-red-100 bg-red-50 text-red-600',
                                                            }[goal.statusMeta] || 'bg-red-200'
                                                        )}
                                                    >
                                                        {{
                                                            CONCLUIDA: 'Concluída',
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
                                                onClick={handleOpenModal}
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
                </main>
            </div>

            {/* Modal MUI */}
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
                            Criar Nova Meta
                        </Typography>

                        <form className="flex flex-col gap-3">
                            <input
                                type="text"
                                placeholder="Título da meta"
                                value={newGoal.title}
                                onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
                                className="rounded border p-2"
                                required
                            />
                            <input
                                type="date"
                                value={newGoal.deadline}
                                onChange={(e) => setNewGoal({ ...newGoal, deadline: e.target.value })}
                                className="rounded border p-2"
                                required
                            />
                            <select
                                value={newGoal.status}
                                onChange={(e) => setNewGoal({ ...newGoal, status: e.target.value })}
                                className="rounded border p-2"
                            >
                                <option value="PENDENTE">Pendente</option>
                                <option value="EM_ANDAMENTO">Em andamento</option>
                                <option value="CONCLUIDA">Concluída</option>
                            </select>

                            <div className="mt-4 flex justify-end gap-2">
                                <Button label={'Cancelar'} onClick={handleCloseModal} variant="outline" />
                                <Button label={'Criar meta'} onClick={handleCreateGoal} />
                            </div>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </>
    );
};

export default Goals;
