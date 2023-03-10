'use client';

const Footer: React.FC = () => {
  return (
    <>
      <footer className="text-zinc-800 dark:bg-neutral-800 dark:text-white">
        <div className="container mx-auto flex h-[80px] items-center justify-between py-2 px-5 md:px-0">
          <p>Максим Шелест &copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
