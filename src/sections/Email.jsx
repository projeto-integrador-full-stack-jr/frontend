import React from 'react';

const Email = () => {
  return (
    <section className="my-14 flex min-h-80 w-full items-center justify-between bg-[#2C49FA] p-8 text-white">
      <div className="flex flex-col justify-between lg:flex-row">
        <div className="flex flex-col lg:w-1/2 lg:px-14">
          <h1 className="text-4xl font-extrabold">
            Faça parte da nossa <br /> comunidade de mentoria
          </h1>
          <p className="pt-2 font-light">
            Receba insights exclusivos, dicas práticas e conteúdos que vão
            acelerar a sua evolução profissional. Inscreva-se e não perca
            nenhuma novidade da nossa mentoria.
          </p>
        </div>

        <form className="pt-4 lg:mr-12">
          <label htmlFor="email">E-mail</label>
          <div className="flex flex-row justify-center pt-2">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Digite seu email..."
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              className="w-3/5 rounded-l-xl border-2 border-white px-4 py-2 text-lg placeholder:bg-[#2C49FA] lg:w-90"
              required
            />
            <button
              type="submit"
              className="cursor-pointer rounded-r-xl bg-white px-4 py-2 text-[#2C49FA] hover:bg-[#f4f4f4]"
            >
              Inscrever-se
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Email;
