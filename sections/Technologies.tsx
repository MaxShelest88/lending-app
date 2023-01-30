import { urlFor } from '@/lib/sanity';
import Image from 'next/image';

interface Props {
  categories: GeneralCategory[];
}

const Technologies: React.FC<Props> = ({ categories }) => {
  return (
    <section className="section">
      <div className="container mx-auto">
        <h1 className="text-title py-10">Технологии</h1>
        <p className="w-72 text-lg font-light">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
          exercitationem doloremque laboriosam deserunt quod, eaque impedit
          provident perspiciatis nulla vitae aut! Architecto, distinctio
          deserunt aspernatur et ea animi dolor molestias?
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
                      {category.title}
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
      </div>
    </section>
  );
};
export default Technologies;
