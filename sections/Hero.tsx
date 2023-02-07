'use client';

import styles from '@/styles';
import { BsMouse } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Hero: React.FC = () => {
  return (
    <section className="section pt-[60px]">
      <div className="container relative mx-auto h-full overflow-hidden md:grid md:grid-cols-2">
        <div className="relative py-10 px-5 xl:py-[200px]">
          <h1 className="text-title">
            <mark className="mark-text">
              <span className="span-text">Frontend</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 400 60"
                preserveAspectRatio="none"
                stroke="#0ea5e9"
                className="svg-text"
              >
                <path d="m 3.518915,27.827324 c 55.429038,4.081 111.581115,5.822 167.117815,2.867 22.70911,-1.208 45.39827,-0.601 68.126,-0.778 28.38172,-0.223 56.76078,-1.024 85.13721,-1.33 24.17378,-0.261 48.4273,0.571 72.58114,0.571" />
              </svg>
            </mark>{' '}
            - разработка
          </h1>
          <h2 className="text-title mb-5">Максим Шелест</h2>
          <p className="mb-5 max-w-xl text-xl">
            Разработка пользовательских интерфейсов, современные технологии,
            результат.
          </p>
          <div className="flex gap-2">
            <a className="button" href="#contacts">
              Связаться со мной
            </a>
            <a className="button" href="resume.pdf">
              Скачать резюме
            </a>
          </div>
        </div>
        <div
          className={`${styles.flexCenter} m-h-[400px] relative overflow-hidden`}
        >
          <img
            src="/myfoto.jpg"
            className="absolute top-0 left-0 w-full object-cover"
            alt="my foto"
          />
        </div>
        <div className="absolute bottom-2 left-0 z-10 hidden animate-bounce xl:block">
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-5}
            duration={500}
            className="cursor-pointer"
          >
            <BsMouse className="h-9 w-9 text-black dark:text-white" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
