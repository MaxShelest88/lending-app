'use client';

import { motion } from 'framer-motion';
import { Section, SkillCard } from '@/components/UI';
import { fadeIn, staggerContainer } from '@/utils/motion';

interface Props {
  categories: GeneralCategory[];
}

const Skills: React.FC<Props> = ({ categories }) => {
  return (
    <Section id="skills">
      <motion.div
        variants={{ ...staggerContainer }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.h1
          variants={fadeIn('right', 'spring', 0.2, 1.25)}
          className="text-title mb-10"
        >
          Навыки / Skills
        </motion.h1>
        <motion.p
          variants={fadeIn('right', 'spring', 0.5, 1.25)}
          className="mb-8 max-w-xl text-lg font-light leading-6"
        >
          Имею опыт работы c HTML, CSS, JavaScript, CSS-фреймворках (Tailwind
          CSS), библиотекой JavaScript React и инструментами разработки Git. Я
          использую эти технологии для создания высококачественных, отзывчивых и
          интерактивных веб-приложений.
        </motion.p>
        <div className="flex w-full gap-3 overflow-x-scroll py-5 px-[2px] scrollbar-hide">
          {categories.map((category, index) => (
            <SkillCard item={category} index={index} key={category._id} />
          ))}
        </div>
      </motion.div>
    </Section>
  );
};
export default Skills;
