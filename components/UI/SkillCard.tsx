'use client';

import { urlFor } from '@/lib/sanity';
import { fadeIn } from '@/utils/motion';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface PropsSkillCard {
  item: GeneralCategory;
  index: number;
}

const SkillCard: React.FC<PropsSkillCard> = ({ item, index }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.3, 0.75)}
      key={item._id}
      className="flex flex-[320px] flex-shrink-0 flex-col justify-between rounded-xl bg-white py-2 px-3 shadow-md dark:bg-slate-800 xl:flex-[25%] xl:flex-shrink"
    >
      <h3
        className={`text-${item.color}-500 pb-2 text-lg font-bold sm:text-xl`}
      >
        {item.title}
      </h3>
      <p className="flex-auto text-xs font-light sm:text-sm">
        {item.description}
      </p>
      <div>
        <p className="self-start pt-3 pb-1 font-semibold">
          <span className={`text${item.color}-500`}>{`Мои навыки`}</span>
        </p>
        <div className="flex flex-wrap items-center">
          {item.stacks.map((stack, i) => (
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
  );
};
export default SkillCard;
