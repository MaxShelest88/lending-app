'use client';

import Section from '@/components/UI/Section';

const About = () => {
  return (
    <Section id="about" title="Обо мне / About me">
      <div className="flex flex-col-reverse items-center justify-between md:flex-row">
        <div className="relative flex-[40%] grow-0">
          <p className="pb-3 text-lg font-light">
            Мне 34. За плечами 10-летний опыт работы системным администратором в
            сфере информационных технологий. Сейчас проникся страстью к
            разработке интерфейсов. Стараюсь уделять первостепенное внимание
            семье, а также люблю читать и музицировать. Стремлюсь к
            самосовершенствованию, и всегда ищю новые вызовы и возможности.
          </p>
          <div className="flex gap-2">
            <a className="button" href="#contacts">
              Связаться со мной
            </a>
            <a className="button" href="resume.pdf">
              Скачать резюме
            </a>
          </div>
        </div>
        <div className="mb-5 flex justify-center">
          <div className="relative h-[400px] w-[400px] items-center justify-center overflow-hidden rounded-full">
            <img
              className="absolute h-full w-full object-cover"
              src="/about.jpg"
              alt="my foto"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};
export default About;
