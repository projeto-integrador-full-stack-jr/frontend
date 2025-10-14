import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import ProfileMenu from '../components/ProfileMenu';
import InputField from '../components/InputField';
import Header from '../components/Header';
import avatar from '../assets/profile.jpg';
import Modal from '../components/Modal';
import Snackbar from '../components/Snackbar';

const Settings = () => {
  // obs.: depois mudar para pegar o valor do backend
  const [currentEmail, setCurrentEmail] = useState('codificaedu@codifica.com');
  const [currentPassword, setCurrentPassword] = useState('123@codifica');

  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [passwordConfirmed, setPasswordConfirmed] = useState('');

  // snackbar states
  const [message, setMessage] = useState('');
  const [variant, setVariant] = useState('');

  function handleSubmit(event) {
    event.preventDefault(); // evita o refresh/reload

    if (!newEmail || !newPassword || !passwordConfirmed) {
      // se algum campo estiver vazio

      return (
        setMessage('Por favor, preencha todos os campos corretamente!'),
        setVariant('error')
      );
    }

    if (!/\S+@\S+\.\S+/.test(newEmail)) {
      // se o email não é válido
      return (
        setMessage('Por favor, insira um e-mail válido!'),
        setVariant('error')
      );
    }

    if (newPassword !== passwordConfirmed) {
      // se as senhas não são iguais
      return (setMessage('As senhas não coincidem!'), setVariant('error'));
    }

    setCurrentEmail(newEmail);
    setCurrentPassword(newPassword);

    setMessage('Perfil atualizado com sucesso!');
    setVariant('success');
    // aqui faria a chamada para o backend para atualizar os dados

    setNewEmail('');
    setNewPassword('');
    setPasswordConfirmed('');
  }

  return (
    <>
      <Header />
      <div className="flex h-[90vh] w-full">
        <div className="h-full">
          <ProfileMenu />
        </div>

        <main className="flex w-full flex-col items-center justify-center p-4">
          <h1 className="self-start pb-14 text-3xl font-extrabold text-[#3F3D56] lg:self-auto lg:pr-54 lg:text-5xl">
            Configurações
          </h1>

          <section className="flex gap-6 lg:flex-row">
            <img
              src={avatar}
              alt="Foto de perfil"
              className="h-30 w-30 rounded-3xl object-cover lg:h-36 lg:w-36"
            />

            <article>
              <h2 className="text-base font-semibold lg:text-lg">
                Codifica Edu
              </h2>
              <p className="text-sm font-light text-black/50 lg:text-lg">
                {currentEmail}
              </p>

              <div className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-baseline sm:gap-6">
                <Button label="Upload de imagem" />
                <button
                  type="button"
                  className="cursor-pointer text-red-500 hover:text-red-700"
                >
                  Remover Imagem
                </button>
              </div>
            </article>
            <Modal />
          </section>

          <form
            onSubmit={handleSubmit}
            className="mt-12 w-full items-start lg:w-2/7"
          >
            <InputField
              label="E-mail"
              placeholder="codificaedu@codifica.com"
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
            <InputField
              label="Senha"
              type="password"
              placeholder="*********************"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <InputField
              label="Confirmar senha"
              type="password"
              placeholder="*********************"
              value={passwordConfirmed}
              onChange={(e) => setPasswordConfirmed(e.target.value)}
            />

            <div className="mt-8 flex flex-col items-baseline gap-10 lg:flex-row">
              <Snackbar message={message} variant={variant}>
                <Button
                  label="Atualizar perfil"
                  variant="primary"
                  type="submit"
                  className="!bg-[#00C569] hover:!bg-[#00a455]"
                />
              </Snackbar>

              <Modal>
                {/* obs.: ver o pode ser feito aqui */}
                <button
                  type="button"
                  className="cursor-pointer px-4 text-red-500 hover:text-red-700"
                >
                  Deletar conta
                </button>
              </Modal>
            </div>
          </form>
        </main>
      </div>
    </>
  );
};

export default Settings;
