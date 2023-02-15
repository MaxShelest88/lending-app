'use client';

import Section from '@/components/UI/Section';
import { fadeIn, opacityVariant, staggerContainer } from '@/utils/motion';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Section id="about">
      <motion.div
        variants={{ ...staggerContainer }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.h1
          variants={fadeIn('right', 'spring', 0.2, 1)}
          className="text-title mb-10"
        >
          Обо мне / About
        </motion.h1>
        <div className="flex flex-col-reverse md:flex-row">
          <div className="relative flex-[40%] grow-0">
            <motion.p
              variants={fadeIn('right', 'spring', 0.5, 1.25)}
              className="max-w-xl pb-3 text-lg font-light leading-6"
            >
              Мне 34. За плечами 10-летний опыт работы системным администратором
              в сфере информационных технологий. Сейчас проникся страстью к
              разработке интерфейсов.
            </motion.p>
            <motion.p
              variants={fadeIn('right', 'spring', 0.8, 1.25)}
              className="max-w-xl pb-3 text-lg font-light leading-6"
            >
              Стараюсь уделять первостепенное внимание семье, а также люблю
              читать, играть в настолки и музицировать. Стремлюсь к
              самосовершенствованию, и всегда ищю новые вызовы и возможности.
            </motion.p>
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
          <motion.div
            variants={opacityVariant(0.2)}
            className="mb-5 flex flex-auto items-center justify-center"
          >
            <div className="relative h-[360px] w-[360px] items-center justify-center overflow-hidden rounded-full sm:h-[450px] sm:w-[450px]">
              <img
                className="absolute h-full w-full object-cover"
                src="/about.jpg"
                alt="my foto"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
};
export default About;
