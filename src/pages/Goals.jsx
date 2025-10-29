import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

import { SquarePlus, PencilLine, Trash2 } from 'lucide-react';
import Header from '../components/Header';
import ProfileMenu from '../components/ProfileMenu';
import Button from '../components/Button';
import Modal from '../components/Modal';
import GoalForm from '../components/GoalForm';

const Goals = () => {
  // obs.: depois mudar para pegar o valor do backend
  const [goals, setGoals] = useState(() => {
    const savedGoals = localStorage.getItem('goals');
    return savedGoals
      ? JSON.parse(savedGoals)
      : [
          {
            id: 1,
            title: 'Virar desenvolvedor Fullstack',
            deadline: '2027-01-20',
            status: 'EM_ANDAMENTO',
          },
          {
            id: 2,
            title: 'Aprender React',
            deadline: '2024-01-15',
            status: 'PENDENTE',
          },
          {
            id: 3,
            title: 'Contribuir para projetos open source',
            deadline: '2024-06-30',
            status: 'CONCLUIDA',
          },
        ];
  });

  // salvar metas no localstorage sempre que forem atualizadas
  useEffect(() => {
    localStorage.setItem('goals', JSON.stringify(goals));
  }, [goals]);

  // declarando estado para guardar a meta que está sendo atualizada
  const [updatingGoal, setUpdatingGoal] = useState(null);

  // adicionar/atualizar uma meta
  const handleUpdateGoal = (newGoal) => {
    if (updatingGoal) {
      // se o estafor for updatingGoal
      setGoals(
        (
          prev // atualiza a meta na lista
        ) =>
          prev.map((goal) =>
            goal.id == updatingGoal.id ? { ...goal, ...newGoal } : goal
          )
      );
    } else {
      // se for uma nova meta (null)
      const newId = goals.length // gera um novo id
        ? Math.max(...goals.map((goal) => goal.id)) + 1
        : 1;
      setGoals((prev) => [...prev, { id: newId, ...newGoal }]); // adiciona a nova meta na lista
    }
    setUpdatingGoal(null); // reseta o updatingGoal
  };

  // deleta meta pelo id
  const handleDeleteGoal = (goalId) => {
    setGoals((prev) => prev.filter((goal) => goal.id !== goalId));
  };

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

            <Modal
              trigger={
                <Button
                  label="Crie uma nova meta"
                  variant="secondary"
                  icon={<SquarePlus />}
                />
              }
            >
              {({ handleCloseModal }) => (
                <div>
                  <GoalForm
                    title={'Criar nova meta'}
                    goal={null}
                    onSave={(data) => {
                      handleUpdateGoal(data);
                      handleCloseModal();
                      handleShowSnackbar('Meta criada com sucesso!', 'success');
                    }}
                    onCancel={() => handleCloseModal()}
                  />
                </div>
              )}
            </Modal>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {goals.map((goal) => (
              <div
                key={goal.id}
                className="flex cursor-default flex-col rounded-lg border p-6"
              >
                <div className="flex justify-between gap-2 text-lg font-semibold">
                  <h2 className="max-w-60">{goal.title}</h2>
                  <div className="flex flex-col gap-2 lg:flex-row">
                    <Modal
                      trigger={
                        <Button
                          variant="secondary"
                          icon={<PencilLine />}
                          title={'Editar'}
                          onClick={() => setUpdatingGoal(goal)}
                        />
                      }
                    >
                      {({ handleCloseModal }) => (
                        <div>
                          <GoalForm
                            title={'Atualizando meta'}
                            goal={goal}
                            onSave={(data) => {
                              handleUpdateGoal(data);
                              handleCloseModal();
                              handleShowSnackbar(
                                'Meta atualizada com sucesso!',
                                'success'
                              );
                            }}
                            onCancel={() => handleCloseModal()}
                          />
                        </div>
                      )}
                    </Modal>

                    <Modal
                      trigger={
                        <Button
                          variant="danger"
                          icon={<Trash2 />}
                          title={'Apagar'}
                        />
                      }
                    >
                      {({ handleCloseModal }) => (
                        <div>
                          <div className="mb-5">
                            <h2 className="text-xl font-bold text-[#3F3D56]">
                              Tem certeza de que deseja apagar a meta?
                            </h2>
                            <p className="text-black/70">
                              Você perderá todas informações da sua meta.
                            </p>
                          </div>

                          <div className="flex justify-end gap-4">
                            <Button
                              label={'Deletar'}
                              variant="outline"
                              onClick={() => {
                                handleDeleteGoal(goal.id);
                                handleCloseModal();
                              }}
                            />
                            <Button
                              label={'Cancelar'}
                              variant="danger"
                              onClick={() => handleCloseModal()}
                            />
                          </div>
                        </div>
                      )}
                    </Modal>
                  </div>
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
                      {goal.status === 'CONCLUIDA'
                        ? 'Concluída'
                        : goal.status === 'EM_ANDAMENTO'
                          ? 'Em andamento'
                          : 'Pendente'}
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
