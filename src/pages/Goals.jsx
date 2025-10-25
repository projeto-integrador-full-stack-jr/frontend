import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Plus, PencilLine } from 'lucide-react';
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
    const [newGoal, setNewGoal] = useState({
        titulo: '',
        prazo: '',
        statusMeta: '',
    });

    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => {
        setOpenModal(false);
        setNewGoal({ title: '', deadline: '', status: 'PENDENTE' });
    };

    // const handleSaveGoal = async () => {
    //     if (!newGoal.title || !newGoal.deadline) return; // validação simples

    //     setGoals((prev) => [...prev, { ...newGoal, id: prev.length + 1 }]);
    //     handleCloseModal();
    // };

    const handleCreateGoal = async () => {
        try {
            const goals = await UserServices.goalService.createGoal(newGoal);
            console.log('Passou aqui');
        } catch (error) {
            console.error(error);
        } finally {
        }
    };

    const fetchGoals = async () => {
        try {
            const goals = await UserServices.goalService.getGoals();
            console.log(goals);
            setGoals(goals);
        } catch (error) {
            console.error(error);
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

                <main className="flex-1 overflow-y-auto p-6">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-6 flex flex-col items-start justify-between space-y-10">
                            <div>
                                <h1 className="mb-4 text-3xl font-extrabold text-[#3F3D56] sm:mb-0">Suas metas</h1>
                                <h5>Acompanhe suas metas, veja o progresso e mantenha-se organizado</h5>
                            </div>
                            <Button
                                label={'Crie uma nova meta'}
                                variant="secondary"
                                icon={<Plus />}
                                onClick={handleOpenModal}
                            />
                        </div>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {goals && goals.length > 0 ? (
                                goals.map((goal) => (
                                    <div
                                        key={goal.id}
                                        className="flex flex-col rounded-lg border bg-white p-6 shadow transition-shadow duration-200 hover:shadow-lg"
                                    >
                                        <div className="mb-4 flex items-start justify-between">
                                            <h2 className="text-lg font-semibold text-blue-600">{goal.titulo}</h2>
                                            <Button
                                                variant="secondary"
                                                icon={<PencilLine />}
                                                title={'Editar'}
                                                onClick={handleOpenModal}
                                            />
                                        </div>
                                        <p className="mb-2 text-gray-700">Prazo: {goal.prazo}</p>
                                        <p className="text-gray-700">
                                            Status:{' '}
                                            <span
                                                className={clsx(
                                                    'rounded-full border-2 px-4 py-1 text-sm font-medium',
                                                    {
                                                        CONCLUIDA: 'border-cyan-300 bg-green-200',
                                                        EM_ANDAMENTO: 'border-b-orange-600 bg-yellow-200',
                                                        PENDENTE: 'border-red-300 bg-red-200 text-red-600',
                                                    }[goal.statusMeta] || 'bg-red-200'
                                                )}
                                            >
                                                {{
                                                    CONCLUIDA: 'Concluída',
                                                    EM_ANDAMENTO: 'Em andamento',
                                                    PENDENTE: 'Pendente',
                                                }[goal.status] || 'Pendente'}
                                            </span>
                                        </p>
                                    </div>
                                ))
                            ) : (
                                <>Você não possui metas criadas</>
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
                    <Box sx={style} className="bg-black">
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
                                <button
                                    type="button"
                                    onClick={handleCloseModal}
                                    className="cursor-pointer rounded bg-gray-300 px-4 py-2 hover:bg-gray-400"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="button"
                                    onClick={handleCreateGoal}
                                    className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                                >
                                    Criar
                                </button>
                            </div>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </>
    );
};

export default Goals;
