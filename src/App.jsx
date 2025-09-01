import Logo from './assets/logo.svg';
import './main.css';
import Button from './components/Button';
import logo from './assets/logo.svg';
function App() {
  return (
    <div className="min-h-screen w-full">
      <header className="mx-20 flex items-center justify-between pt-2">
        <img
          src={logo}
          alt="Logo mentorIA"
          className="w-50 cursor-pointer"
          onClick={''}
        />

        <ul className="flex gap-4 text-black">
          <li className="hover:text-black/70">
            <a href="#home">Início</a>
          </li>
          <li className="hover:text-black/70">
            <a href="#about">Sobre</a>
          </li>
          <li className="hover:text-black/70">
            <a href="#features">Funcionalidades</a>
          </li>
          <li className="hover:text-black/70">
            <a href="#support">Suporte</a>
          </li>
          <li className="hover:text-black/70">
            <a href="#faq">Dúvidas</a>
          </li>
          <li className="hover:text-black/70">
            <a href="#contact">Contato</a>
          </li>
        </ul>

        <div className="flex gap-4">
          <Button label="Entrar" style="outline" />
          <Button label="Criar Conta" style="primary" />
        </div>
      </header>
      <main className="flex h-screen items-center justify-start px-20">
        <div>
          <div className="w-2/3">
            <h1 className="text-7xl leading-tight font-extrabold text-[#0046BC]">
              Mentoria objetiva <br /> para a sua{' '}
              <span className="font-serif">evolução profissional 🚀</span>
            </h1>
            <p className="w-3/4 pt-6 text-sm font-light text-zinc-400">
              Com recursos intuitivos, dashboards claros e acompanhamento pe
              jornrsonalizado, você tem tudo em um só lugar para evoluir na sua
              jornada.
            </p>
          </div>

          <div className="mt-10 flex gap-4">
            <Button label="Saiba Mais" style="outline" />
            <Button label="Começar Agora" style="primary" />
          </div>
        </div>
      </main>
      <footer className="py-4 text-center text-zinc-400">
        <p>
          © {new Date().getFullYear()} mentorIA. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}

export default App;
