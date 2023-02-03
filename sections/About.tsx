import Section from '@/components/UI/Section';

const About = () => {
  return (
    <Section id="about" title="Обо мне">
      <div className=" items-center justify-between xl:flex">
        <div className="flex-[40%] grow-0">
          <p className="text-lg font-light">
            Мне 34. За плечами 10-летний опыт работы системным администратором в
            сфере информационных технологий. Сейчас проникся страстью к
            разработке интерфейсов. Стараюсь уделять первостепенное внимание
            семье, а также люблю читать и музицировать. Стремлюсь к
            самосовершенствованию, и всегда ищю новые вызовы и возможности.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="relative h-[400px] w-[400px] items-center justify-center overflow-hidden rounded-full">
            <img
              className="absolute h-full w-full object-cover object-center"
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
