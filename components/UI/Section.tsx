'use client';

interface Props {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<Props> = ({ id, title, children }) => {
  return (
    <>
      <section className="section relative py-20" id={id}>
        <div className="container mx-auto">
          <h1 className="text-title mb-10">{title}</h1>
          {children}
        </div>
        <div className="absolute bottom-0 left-0 z-10 block h-[2px] w-full bg-gray-200" />
      </section>
    </>
  );
};
export default Section;
