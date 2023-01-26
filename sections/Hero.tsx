'use client';

import styles from '@/styles';

const Hero = () => {
  return (
    <section className="min-h-screen overflow-hidden pt-[60px]">
      <div className="container mx-auto flex flex-col gap-1 md:flex-row">
        <div className="flex flex-[0.75] flex-col gap-[24px]">
          <h1>Test</h1>
        </div>
        <div className={`flex-1 ${styles.flexCenter} relative flex`}>
          <img
            src="/myfoto.jpg"
            className="absolute top-0 left-0 z-10 w-full object-cover"
            alt="my foto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
