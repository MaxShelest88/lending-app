'use client';

import styles from '@/styles';
import { BsMouse } from 'react-icons/bs';

const Hero: React.FC = () => {
  return (
    <section className="section">
      <div className="container relative mx-auto h-full px-5 md:grid md:grid-cols-2 lg:px-0">
        <div className="relative pt-[200px]">
          <h1 className="text-title">Фронтенд-разработка</h1>
          <h2 className="text-title font-medium">Максим Шелест</h2>
          <p className="my-5 max-w-xl text-xl">
            Разработка пользовательских интерфейсов, современные технологии,
            результат.
          </p>
          <a className="button" href="#contacts">
            Узнать больше
          </a>
        </div>
        <div className={`${styles.flexCenter} m-h-[400px] relative`}>
          <img
            src="/myfoto.jpg"
            className="absolute top-0 left-0 z-10 w-full object-cover"
            alt="my foto"
          />
        </div>
        <div className="absolute bottom-2 left-0 z-10 animate-bounce">
          <a href="#technologies">
            <BsMouse className="h-9 w-9 text-black" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
