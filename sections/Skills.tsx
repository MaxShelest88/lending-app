'use client';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Section, SkillCard } from '@/components/UI';
import { fadeIn, staggerContainer, opacityVariant } from '@/utils/motion';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import type SwiperCore from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.min.css';

interface Props {
  categories: GeneralCategory[];
}

const Skills: React.FC<Props> = ({ categories }) => {
  const swiperRef = useRef<SwiperCore>();
  return (
    <Section id="skills">
      <motion.div
        variants={{ ...staggerContainer }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.h1
          variants={fadeIn('right', 'spring', 0.2, 1.25)}
          className="text-title mb-10"
        >
          Навыки / Skills
        </motion.h1>
        <motion.p
          variants={fadeIn('right', 'spring', 0.5, 1.25)}
          className="mb-8 max-w-xl text-lg font-light leading-6"
        >
          Имею опыт работы c HTML, CSS, JavaScript, CSS-фреймворках (Tailwind
          CSS), библиотекой JavaScript React и инструментами разработки Git. Я
          использую эти технологии для создания высококачественных, отзывчивых и
          интерактивных веб-приложений.
        </motion.p>
        <motion.div
          variants={opacityVariant(1.31)}
          className="mb-1 flex items-center justify-end gap-2"
        >
          <button onClick={() => swiperRef.current?.slidePrev()}>
            <BsArrowLeft className="h-8 w-8 text-sky-500" />
          </button>
          <button onClick={() => swiperRef.current?.slideNext()}>
            <BsArrowRight className="h-8 w-8 text-sky-500" />
          </button>
        </motion.div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          slidesPerView={4}
          breakpoints={{
            // when window width is >= 480px
            320: {
              slidesPerView: 1,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 1,
            },
            758: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          pagination={{
            el: '.custom-pagination',
            clickable: true,
          }}
        >
          {categories.map((category, index) => (
            <SwiperSlide key={category._id}>
              <SkillCard item={category} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
        <motion.div
          variants={opacityVariant(1.34)}
          className="custom-pagination flex items-center justify-center gap-1"
        ></motion.div>
      </motion.div>
    </Section>
  );
};
export default Skills;
