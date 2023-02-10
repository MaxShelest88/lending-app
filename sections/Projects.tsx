'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/UI';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
import { fadeIn, staggerContainer } from '@/utils/motion';

interface Props {
  projects: Project[];
}

const Projects: React.FC<Props> = ({ projects }) => {
  return (
    <Section id="projects">
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
          Проекты / Projects
        </motion.h1>
        <motion.p
          variants={fadeIn('right', 'spring', 0.3, 1.25)}
          className="mb-8 max-w-xl text-lg font-light "
        >
          К каждому проекту подхожу с особой тщательностью. Несмотря на
          проблемы, которые могут возникнуть,никогда не сдаюсь и остаюсь
          сосредоточенными на своей цели до тех пор, пока проект не будет
          завершен и не будет удовлетворять моим требованиям и требованиям
          заказчика. Усердие и стремление выполнять работу качественно делают
          меня ценным активом для любой команды.
        </motion.p>
        <div className="flex w-full gap-3 overflow-x-scroll py-5 scrollbar-hide xl:grid xl:grid-cols-3 xl:gap-8 xl:space-x-0 xl:px-[2px]">
          {projects.map((project, index) => (
            <motion.div
              variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
              key={project._id}
              className="relative z-10 flex h-[350px] flex-[320px] flex-shrink-0 flex-col justify-between rounded-xl bg-white py-2 px-3 shadow-md dark:bg-slate-800 xl:flex-[320px]"
            >
              <h3
                className={'text-white-500 pb-2 text-lg font-bold sm:text-xl'}
              >
                {project.title}
              </h3>
              <a
                href={project.url}
                className="relative flex-auto overflow-hidden"
              >
                <Image
                  src={urlFor(project.mainImage).url()}
                  alt={project.title}
                  fill={true}
                  style={{ objectFit: 'cover' }}
                  className="transition-all hover:scale-105"
                />
              </a>
              <p className="py-1 text-sm italic text-gray-500">
                Уровень:{' '}
                {project.difficulty === 1
                  ? 'Начальный'
                  : project.difficulty === 2
                  ? 'Продвинутый'
                  : project.difficulty === 3
                  ? 'Средний'
                  : project.difficulty === 4
                  ? 'Экспрерт'
                  : 'Мастер'}
              </p>
              <div>
                <p className="self-start pt-3 pb-1 font-semibold">
                  <span className="text-white-500">{`Tech Stack:`}</span>
                </p>
                <div className="flex items-center space-x-2">
                  {project.stacks.map((stack, i) => (
                    <div key={i} className="flex items-center">
                      <div className="flex items-center">
                        <Image
                          src={urlFor(stack.mainImage).url()}
                          alt={stack.title}
                          width={20}
                          height={20}
                          className="mr-[2px]"
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
export default Projects;
