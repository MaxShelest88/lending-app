import { urlFor } from '@/lib/sanity';
import { fadeIn } from '@/utils/motion';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface PropsProjectCard {
  item: Project;
  index: number;
}

const ProjectCard: React.FC<PropsProjectCard> = ({ item, index }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.3, 0.75)}
      key={item._id}
      className="relative z-10 flex h-[350px] flex-[300px] flex-shrink-0 flex-col justify-between rounded-xl bg-white py-2 px-3 shadow-md dark:bg-slate-800"
    >
      <h3 className={'text-white-500 pb-2 text-lg font-bold sm:text-xl'}>
        {item.title}
      </h3>
      <a href={item.url} className="relative flex-auto overflow-hidden">
        <Image
          src={urlFor(item.mainImage).url()}
          alt={item.title}
          fill={true}
          style={{ objectFit: 'cover' }}
          className="transition-all hover:scale-105"
        />
      </a>
      <p className="py-1 text-sm italic text-gray-500">
        Уровень:{' '}
        {item.difficulty === 1
          ? 'Начальный'
          : item.difficulty === 2
          ? 'Продвинутый'
          : item.difficulty === 3
          ? 'Средний'
          : item.difficulty === 4
          ? 'Экспрерт'
          : 'Мастер'}
      </p>
      <div>
        <p className="self-start pt-3 pb-1 font-semibold">
          <span className="text-white-500">{`Tech Stack:`}</span>
        </p>
        <div className="flex flex-wrap items-center space-x-2">
          {item.stacks.map((stack, i) => (
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
  );
};
export default ProjectCard;
