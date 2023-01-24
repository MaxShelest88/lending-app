import styles from "@/styles";
import Link from "next/link";
import { GrCloudlinux } from "react-icons/gr";
import { SocialIcon } from "react-social-icons";

function Header() {
  return (
    <header
      className={`sticky top-0 mx-auto flex h-[60px] w-full justify-between text-zinc-800 dark:bg-zinc-800 dark:text-white 2xl:max-w-[1280px]`}
    >
      <Link
        href="/"
        className="tracking-widset flex items-center space-x-1 text-lg font-light"
      >
        <span>CMP</span>
        <i>
          <GrCloudlinux className="h-4 w-4" />
        </i>
      </Link>
      <div className="hidden space-x-5 sm:flex sm:items-center">
        <a href="#about" className="text-md font-light">
          Обо мне
        </a>
        <a href="#technologies" className="text-md font-light">
          Технологии
        </a>
        <a href="#projects" className="text-md font-light">
          Проекты
        </a>
        <a href="#contact" className="text-md font-light">
          Контакты
        </a>
      </div>
      <div className="items-center flex space-x-2">
        <SocialIcon
          url="https://github.com/MaxShelest88"
          bgColor="black"
          fgColor="white"
          style={{ width: 30, height: 30 }}
        />
      </div>
    </header>
  );
}
export default Header;
