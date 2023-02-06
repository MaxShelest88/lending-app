'use client';

import { Section } from '@/components/UI';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';

interface Props {
  categories: GeneralCategory[];
}

const Technologies: React.FC<Props> = ({ categories }) => {
  return (
    <Section id="skills" title="Навыки / Skills">
      <p className="max-w-xl text-lg font-light">
        Имею опыт работы c HTML, CSS, JavaScript, CSS-фреймворках (Tailwind
        CSS), библиотеке JavaScript React и инструментми разработки Git. Я
        использую эти технологии для создания высококачественных, отзывчивых и
        интерактивных веб-приложений.
      </p>
      <div className="flex w-full space-x-5 overflow-x-scroll py-5 scrollbar-hide">
        {categories.map((category) => (
          <div
            key={category._id}
            className="flex h-60 w-80 flex-shrink-0 flex-col justify-between rounded-xl bg-white py-2 px-3 shadow dark:bg-slate-800 dark:shadow-gray-500 sm:h-72 sm:w-96"
          >
            <div>
              <h3
                className={`text-${category.color}-500 pb-2 text-lg font-bold sm:text-xl`}
              >
                {category.title}
              </h3>
              <p className="text-xs font-light sm:text-sm ">
                {category.description}
              </p>
              <div>
                <p className="self-start pt-3 pb-1 font-semibold">
                  <span className={`text${category.color}-500`}>
                    {`Технологии ${category.title}`}
                  </span>
                </p>
                <div className="flex items-center space-x-4">
                  {category.stacks.map((stack, index) => (
                    <div key={index} className="flex items-center">
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
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
export default Technologies;
