'use client';

import { DiAtom } from 'react-icons/di';
import { SocialIcon } from 'react-social-icons';
import DarkModeButton from './UI/DarkModeButton';

interface Props {
  socialIcons: SocialIcon[];
}

function Header({ socialIcons }: Props) {
  return (
    <header className="sticky top-0 z-50 mx-auto w-full bg-slate-50 text-zinc-800 shadow-md dark:bg-zinc-800 dark:text-white">
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
        <div className="hidden space-x-5 sm:items-center md:flex">
          <a
            href="#skills"
            className="rounded-lg p-2 text-xl font-light hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Навыки
          </a>
          <a
            href="#about"
            className="rounded-lg p-2 text-xl font-light hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Обо мне
          </a>
          <a
            href="#projects"
            className="rounded-lg p-2 text-xl font-light hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Проекты
          </a>
          <a
            href="#contacts"
            className="rounded-lg p-2 text-xl font-light hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Контакты
          </a>
        </div>
        <div className="flex items-center space-x-2">
          {socialIcons.map((icon) => (
            <SocialIcon
              url={icon.url}
              key={icon._id}
              bgColor="#0ea5e9"
              fgColor="white"
              style={{ width: 30, height: 30 }}
            />
          ))}
          <DarkModeButton />
        </div>
      </div>
    </header>
  );
}
export default Header;
