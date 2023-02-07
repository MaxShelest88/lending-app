'use client';

import { DiAtom } from 'react-icons/di';
import { SocialIcon } from 'react-social-icons';
import DarkModeButton from './UI/DarkModeButton';
import { Link } from 'react-scroll/modules';

const MENU_ITEMS = [
  { name: 'Навыки', id: 'skills' },
  { name: 'Обо мне', id: 'about' },
  { name: 'Проекты', id: 'projects' },
  { name: 'Контакты', id: 'contacts' },
];

interface Props {
  socialIcons: SocialIcon[];
}

function Header({ socialIcons }: Props) {
  return (
    <header className="fixed top-0 z-50 mx-auto w-full bg-slate-50 text-zinc-800 shadow-md dark:bg-zinc-800 dark:text-white">
      <div className="container mx-auto flex h-[60px] justify-between px-5 lg:px-0 ">
        <a
          href="/"
          className="tracking-widset flex items-center space-x-1 text-lg font-medium"
        >
          <span>MSH</span>
          <span>
            <DiAtom className="h-5 w-5" />
          </span>
        </a>
        <div className="hidden space-x-5 sm:items-center lg:flex">
          {MENU_ITEMS.map((item) => (
            <Link
              activeClass="active"
              to={item.id}
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={-5}
              duration={500}
              key={item.id}
              spyThrottle={500}
              className="cursor-pointer rounded-lg p-2 text-xl font-light transition-all hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-2">
          {socialIcons.map((icon) => (
            <SocialIcon
              url={icon.url}
              key={icon._id}
              bgColor="#0ea5e9"
              fgColor="white"
              style={{ width: 30, height: 30 }}
              className="transition-all hover:translate-y-1"
            />
          ))}
          <DarkModeButton />
        </div>
      </div>
    </header>
  );
}
export default Header;
