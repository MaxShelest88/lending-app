'use client';

import { motion } from 'framer-motion';
import styles from '@/styles';
import { fadeIn } from '@/utils/motion';

const Hero: React.FC = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      className="section relative overflow-hidden xl:h-[calc(100vh-60px)]"
    >
      <div className="container relative mx-auto h-full md:grid md:grid-cols-2">
        <div className="relative overflow-hidden px-5 pt-[80px] xl:py-[200px]">
          <div className="relative z-20">
            <motion.div variants={fadeIn('right', 'spring', 0.5, 1.25)}>
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
            </motion.div>
            <motion.div variants={fadeIn('right', 'spring', 0.8, 1.25)}>
              <p className="mb-5 max-w-xl text-xl">
                Разработка пользовательских интерфейсов, современные технологии,
                результат.
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn('right', 'spring', 1.1, 1.25)}
              className="flex gap-2"
            >
              <a className="button" href="#contacts">
                Связаться со мной
              </a>
              <a className="button" href="resume.pdf">
                Скачать резюме
              </a>
            </motion.div>
          </div>
        </div>
        <div className={`${styles.flexCenter} m-h-[400px] hidden md:flex`}>
          <img
            src="/myfoto.jpg"
            className="mr-[calc(-50vw+75%)] w-full max-w-[100vw] object-cover"
            alt="my foto"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
