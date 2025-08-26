import Logo from './assets/logo.svg';
import './main.css';

function App() {
  return (
    <div className="flex min-h-screen w-full flex-col justify-between">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-4 text-center">
        <img src={Logo} alt="Logo mentorIA" />
        <h1 className="mt-10 text-5xl font-extrabold">
          Mentoria objetiva <br /> para a sua evolução profissional 🚀
        </h1>
        <p className="mt-2 text-sm font-light text-zinc-400">
          Aguarde, estamos preparando tudo para você...
        </p>
      </main>
      <footer className="py-4 text-center text-zinc-400">
        <p>© 2025 mentorIA. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
