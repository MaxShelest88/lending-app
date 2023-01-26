import styles from '@/styles';
import Link from 'next/link';
import { GrCloudlinux } from 'react-icons/gr';
import { SocialIcon } from 'react-social-icons';
import DarkModeButton from './DarkModeButton';

interface Props {
  socialIcons: SocialIcon[];
}

function Header({ socialIcons }: Props) {
  return (
    <header className="sticky top-0 mx-auto text-zinc-800 dark:bg-zinc-800 dark:text-white">
      <div
        className={`${styles.innerWidth} mx-auto flex h-[60px] justify-between 2xl:max-w-[1280px]`}
      >
        <Link
          href="/"
          className="tracking-widset flex items-center space-x-1 text-lg font-light"
        >
          <span>SHP</span>
          <span>
            <GrCloudlinux className="h-4 w-4" />
          </span>
        </Link>
        <div className="hidden space-x-5 sm:flex sm:items-center">
          <a href="#about" className="text-sm font-light">
            Обо мне
          </a>
          <a href="#technologies" className="text-sm font-light">
            Технологии
          </a>
          <a href="#projects" className="text-sm font-light">
            Проекты
          </a>
          <a href="#contact" className="text-sm font-light">
            Контакты
          </a>
        </div>
        <div className="flex items-center space-x-2">
          {socialIcons.map((icon) => (
            <SocialIcon
              url={icon.url}
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
