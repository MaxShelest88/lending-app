import Link from 'next/link';
import { GrCloudlinux } from 'react-icons/gr';
import { SocialIcon } from 'react-social-icons';
import DarkModeButton from './DarkModeButton';

interface Props {
  socialIcons: SocialIcon[];
}

function Header({ socialIcons }: Props) {
  return (
    <header className="sticky top-0 z-50 mx-auto w-full bg-slate-50 text-zinc-800 dark:bg-zinc-800 dark:text-white">
      <div className=" container mx-auto flex h-[60px] justify-between">
        <Link
          href="/"
          className="tracking-widset flex items-center space-x-1 text-lg font-light"
        >
          <span>MSH</span>
          <span>
            <GrCloudlinux className="h-4 w-4" />
          </span>
        </Link>
        <div className="hidden space-x-5 sm:flex sm:items-center">
          <a href="#technologies" className="text-xl font-light">
            Технологии
          </a>
          <a href="#about" className="text-xl font-light">
            Обо мне
          </a>
          <a href="#projects" className="text-xl font-light">
            Проекты
          </a>
          <a href="#contacts" className="text-xl font-light">
            Контакты
          </a>
        </div>
        <div className="flex items-center space-x-2">
          {socialIcons.map((icon) => (
            <SocialIcon
              url={icon.url}
              key={icon._id}
              bgColor="black"
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
