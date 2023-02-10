'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DiAtom } from 'react-icons/di';
import { SocialIcon } from 'react-social-icons';
import DarkModeButton from './UI/DarkModeButton';
import { navVariants } from '@/utils/motion';

const MENU_ITEMS = [
  { name: 'Навыки', id: 'skills' },
  { name: 'Обо мне', id: 'about' },
  { name: 'Проекты', id: 'projects' },
  { name: 'Контакты', id: 'contacts' },
];

interface HeaderProps {
  socialIcons: SocialIcon[];
}

const Header: React.FC<HeaderProps> = ({ socialIcons }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setScrolled(window.pageYOffset > 100),
      );
    }
  }, []);

  return (
    <header className="fixed top-0 z-50 mx-auto w-full text-zinc-800 dark:text-white">
      <motion.div variants={navVariants} initial="hidden" whileInView="show">
        <div
          id="navigation-background"
          className={`absolute h-[60px] w-full bg-transparent transition-all  duration-500  ${
            scrolled
              ? 'bg-slate-200/80 backdrop-blur-[8px] dark:bg-neutral-800/80'
              : ''
          }`}
        />
        <div className="container mx-auto flex h-[60px] px-5 md:px-0">
          <a
            href="/"
            className="relative z-50 flex items-center space-x-1 text-lg font-medium"
          >
            <span>MSH</span>
            <span>
              <DiAtom className="h-5 w-5" />
            </span>
          </a>
          <div className="w-100% relative z-50 flex flex-auto items-center justify-end pl-8 md:justify-between">
            <nav className="sm:items-left hidden space-x-5 md:flex">
              {MENU_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-md relative cursor-pointer font-light transition-all hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:h-[2px] hover:after:w-full hover:after:bg-sky-500 hover:after:content-['']"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="flex items-center space-x-2">
              {socialIcons.map((icon) => (
                <SocialIcon
                  url={icon.url}
                  key={icon._id}
                  bgColor="#0ea5e9"
                  fgColor="white"
                  style={{ width: 25, height: 25 }}
                  className="transition-all hover:scale-125"
                />
              ))}
              <DarkModeButton />
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  );
};
export default Header;
