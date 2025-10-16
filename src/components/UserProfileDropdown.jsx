import { useState } from 'react';
import { User, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const UserProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const linksDropdown = [
    { label: 'Editar perfil', href: '/profile' },
    { label: 'Configurações', href: '/settings' },
    { label: 'Metas', href: '/minhas-metas' },
    { label: 'Notas', href: '/minhas-notas' },
    { label: 'Mentoria', href: '/mentoria' },
    { label: 'Logout', href: '#logout', isLogout: true },
  ];

  return (
    <div className="relative">
      <div
        onClick={toggleDropdown}
        className="flex cursor-pointer items-center justify-center gap-2 rounded-md p-2"
      >
        <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-blue-700 bg-blue-50 outline-none">
          <User size={18} className="text-blue-700" />
        </div>
        <p className="font-semibold text-blue-700">Codifica Edu</p>
        <ChevronDown
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-48 rounded-md border border-gray-200 bg-white shadow-lg">
          <ul className="flex flex-col">
            {linksDropdown.map((link, index) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className={`block px-4 py-2 text-sm text-gray-800 hover:bg-blue-700 hover:text-gray-100 ${index === 0 ? 'rounded-tl-md rounded-tr-md' : ''} ${
                    link.isLogout
                      ? 'hover rounded-br-md rounded-bl-md border-t-2 font-bold text-red-600 hover:bg-red-700 hover:text-zinc-100'
                      : ''
                  }`}
                >
                  {' '}
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserProfileDropdown;
