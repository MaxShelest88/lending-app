'use client';

interface Props {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<Props> = ({ id, title, children }) => {
  return (
    <>
      <section className="section p-5 sm:p-10" id={id}>
        <div className="container mx-auto">
          <h1 className="text-title py-10">{title}</h1>
          {children}
        </div>
      </section>
    </>
  );
};
export default Section;
