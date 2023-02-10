'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/UI';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
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
          variants={fadeIn('right', 'spring', 0.2, 1)}
          className="text-title mb-10"
        >
          Навыки / Skills
        </motion.h1>
        <motion.p
          variants={fadeIn('right', 'spring', 0.5, 1.25)}
          className="mb-8 max-w-xl text-lg font-light leading-6"
        >
          Имею опыт работы c HTML, CSS, JavaScript, CSS-фреймворках (Tailwind
          CSS), библиотеке JavaScript React и инструментми разработки Git. Я
          использую эти технологии для создания высококачественных, отзывчивых и
          интерактивных веб-приложений.
        </motion.p>
        <div className="flex w-full gap-4 overflow-x-scroll py-5 px-[2px] scrollbar-hide">
          {categories.map((category, index) => (
            <motion.div
              variants={fadeIn('right', 'spring', index * 0.3, 0.75)}
              key={category._id}
              className="flex flex-[25%] flex-shrink-0 flex-col justify-between rounded-xl bg-white py-2 px-3 shadow-md dark:bg-slate-800 md:flex-shrink"
            >
              <h3
                className={`text-${category.color}-500 pb-2 text-lg font-bold sm:text-xl`}
              >
                {category.title}
              </h3>
              <p className="flex-auto text-xs font-light sm:text-sm">
                {category.description}
              </p>
              <div>
                <p className="self-start pt-3 pb-1 font-semibold">
                  <span className={`text${category.color}-500`}>
                    {`Мои навыки`}
                  </span>
                </p>
                <div className="flex flex-wrap items-center">
                  {category.stacks.map((stack, i) => (
                    <div key={i} className="flex flex-[33.333%] items-center ">
                      <div className="flex items-center space-x-1">
                        <Image
                          src={urlFor(stack.mainImage).url()}
                          alt={stack.title}
                          width={20}
                          height={20}
                        />
                        <span className="text-xs font-light text-gray-500">
                          {stack.title}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};
export default Skills;
