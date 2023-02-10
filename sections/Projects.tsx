'use client';

import { motion } from 'framer-motion';
import { ProjectCard, Section } from '@/components/UI';
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
          проблемы, которые могут возникнуть, никогда не сдаюсь и остаюсь
          сосредоточенными на своей цели до тех пор, пока проект не будет
          завершен и не будет удовлетворять моим требованиям и требованиям
          заказчика. Усердие и стремление выполнять работу качественно делают
          меня ценным активом для любой команды.
        </motion.p>
        <div className="flex w-full gap-3 overflow-x-scroll py-5 scrollbar-hide xl:grid xl:grid-cols-3 xl:gap-8 xl:space-x-0 xl:px-[2px]">
          {projects.map((project, index) => (
            <ProjectCard item={project} index={index} key={project._id} />
          ))}
        </div>
      </motion.div>
    </Section>
  );
};
export default Projects;
