'use client';

import styles from '@/styles';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const Hero: React.FC = () => {
  return (
    <section className="section">
      <div className="container mx-auto grid px-5 md:grid-cols-2 lg:px-0">
        <div className="py-5 lg:py-0">
          <h1 className="text-title">Фронтенд-разработка</h1>
          <h2 className="text-title font-medium">Максим Шелест</h2>
          <p className="my-5 max-w-xl text-xl">
            Разработка пользовательских интерфейсов, современные технологии,
            результат - все это здесь!
          </p>
          <a className="button" href="#contacts">
            Узнать больше
          </a>
        </div>
        <div className={`${styles.flexCenter} relative`}>
          <img
            src="/myfoto.jpg"
            className="absolute top-0 left-0 z-10 w-full object-cover"
            alt="my foto"
          />
        </div>
        <div className="absolute bottom-2 left-1/2 z-10">
          <a href="#technologies">
            <ChevronDownIcon className="h-7 w-7 text-black" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
