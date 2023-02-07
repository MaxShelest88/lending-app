'use client';

const Footer = () => {
  return (
    <>
      <footer className="text-zinc-800 dark:bg-zinc-800 dark:text-white">
        <hr />
        <div className="container mx-auto flex h-[80px] items-center justify-between py-2 px-5 lg:px-0">
          <p>Maksim Shelest &copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
