'use client';

import { urlFor } from '@/lib/sanity';
import Image from 'next/image';

interface Props {
  projects: Project[];
}

const Projects: React.FC<Props> = ({ projects }) => {
  return (
    <section className="section p-5 sm:p-10" id="projects">
      <div className="container mx-auto">
        <h1 className="text-title py-10">Проекты</h1>
        <p className="w-72 text-lg font-light">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
          exercitationem doloremque laboriosam deserunt quod, eaque impedit
          provident perspiciatis nulla vitae aut! Architecto, distinctio
          deserunt aspernatur et ea animi dolor molestias?
        </p>
        <div className="flex w-full space-x-5 overflow-x-scroll py-5 scrollbar-hide xl:grid xl:grid-cols-3 xl:gap-10 xl:space-x-0 xl:px-5">
          {projects.map((project) => (
            <div
              key={project._id}
              className="relative z-10 flex h-[350px] w-[400px] flex-shrink-0 flex-col justify-between rounded-xl bg-white py-2 px-3 shadow dark:bg-slate-800 dark:shadow-gray-500"
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
                {project.difficulty === 1
                  ? 'Новичок'
                  : project.difficulty === 2
                  ? 'Продвинутый'
                  : project.difficulty === 3
                  ? 'Уверенный'
                  : project.difficulty === 4
                  ? 'Экспрерт'
                  : 'Мастер'}
              </p>
              <div>
                <p className="self-start pt-3 pb-1 font-semibold">
                  <span className="text-white-500">
                    {`Технологии ${project.title}`}
                  </span>
                </p>
                <div className="flex items-center space-x-4">
                  {project.stacks.map((stack, index) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
