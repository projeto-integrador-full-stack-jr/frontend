import React, { useState } from 'react';
import clsx from 'clsx';

import { SquarePlus, PencilLine } from 'lucide-react';
import Header from '../components/Header';
import ProfileMenu from '../components/ProfileMenu';
import Button from '../components/Button';

// modal imports
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
  const [deadline, setDeadline] = React.useState('11/12/2025');
  const currentStatus = 'EM_ANDAMENTO'; // PENDENTE/ EM_ANDAMENTO / CONCLUIDA
  const title = 'Virar desenvolvedor Fullstack';

  // modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [goals, setGoals] = useState([
    {
      id: 1,
      title: 'Virar desenvolvedor Fullstack',
      deadline: '11/12/2025',
      status: 'EM_ANDAMENTO', // PENDENTE/ EM_ANDAMENTO / CONCLUIDA
    },
    {
      id: 2,
      title: 'Aprender React',
      deadline: '01/01/2024',
      status: 'PENDENTE',
    },
    {
      id: 3,
      title: 'Contribuir para projetos open source',
      deadline: '30/06/2024',
      status: 'CONCLUIDA',
    },
    {
      id: 4,
      title: 'Melhorar habilidades de design UI/UX',
      deadline: '15/08/2024',
      status: 'EM_ANDAMENTO',
    },
    {
      id: 5,
      title: 'Obter certificação em AWS',
      deadline: '20/11/2024',
      status: 'PENDENTE',
    },
    {
      id: 6,
      title: 'Aprender TypeScript',
      deadline: '05/05/2024',
      status: 'CONCLUIDA',
    },
    {
      id: 7,
      title: 'Desenvolver um aplicativo móvel',
      deadline: '12/09/2024',
      status: 'EM_ANDAMENTO',
    },
    {
      id: 8,
      title: 'Melhorar habilidades de comunicação',
      deadline: '25/12/2024',
      status: 'PENDENTE',
    },
  ]);

  const [openModal, setOpenModal] = useState(false);
  const [newGoal, setNewGoal] = useState({
    title: '',
    deadline: '',
    status: 'PENDENTE',
  });

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  // const handleCreateGoal = () => {
  //   // lógica para criar uma nova meta
  // };

  const handleUpdateGoal = () => {
    setGoals((prev) => [...prev, { ...newGoal, id: prev.length + 1 }]);
    setNewGoal({ title: '', deadline: '', status: 'PENDENTE' });
    handleCloseModal();
  };

  const handleSaveGoal = () => {
    setGoals((prev) => [...prev, { ...newGoal, id: prev.length + 1 }]);
    setNewGoal({ title: '', deadline: '', status: 'PENDENTE' });
    handleCloseModal();
  };

  // const handleDeleteGoal = (goalId) => {
  //   // lógica para deletar a meta existente
  // };

  return (
    <>
      <Header />
      <div className="flex h-[90vh] w-full">
        <div className="h-full">
          <ProfileMenu />
        </div>
        <main className="mx-4">
          <div className="my-10">
            <h1 className="self-start pb-14 text-3xl font-extrabold text-[#3F3D56] lg:self-auto lg:pr-54 lg:text-5xl">
              Suas metas
            </h1>
            <Button
              label={'Crie uma nova meta'}
              variant="secondary"
              icon={<SquarePlus />}
              onClick={() => {
                handleOpenModal();
                alert('implementar o modal que abre aqui');
              }}
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {goals.map((goal) => (
              <div
                key={goal.id}
                className="flex cursor-default flex-col rounded-lg border p-6"
              >
                <div className="flex justify-between gap-2 text-lg font-semibold">
                  <h2 className="max-w-60">{goal.title}</h2>
                  <Button
                    variant="secondary"
                    icon={<PencilLine />}
                    title={'Editar'}
                    onClick={() => {
                      handleOpenModal();
                      alert('implemntar o modal que abre aqui');
                    }}
                  />
                </div>
                <p className="text-black/70">Prazo: {goal.deadline}</p>
                <div className="mt-2 flex">
                  <p className="text-black/70">
                    Status:{' '}
                    <span
                      className={clsx(
                        'rounded-xl border-2 p-1.5',
                        {
                          CONCLUIDA: 'border-cyan-300 bg-green-200',
                          EM_ANDAMENTO: 'border-yellow-400 bg-yellow-200',
                          PENDENTE: 'border-red-300 bg-red-200',
                        }[goal.status] || 'bg-red-200'
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
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default Goals;
