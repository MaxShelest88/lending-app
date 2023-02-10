'use client';

interface Props {
  id: string;
  children: React.ReactNode;
}

const Section: React.FC<Props> = ({ id, children }) => {
  return (
    <>
      <section className="section relative py-20 px-5" id={id}>
        <div className="container mx-auto">{children}</div>
        <div className="absolute bottom-0 left-0 z-10 block h-[1px] w-full bg-gray-200/80" />
      </section>
    </>
  );
};
export default Section;
