export const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 0.2,
    },
  },
};

export const fadeIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number,
) => ({
  hidden: {
    x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
    y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
    },
  },
});

export const textVariant = (delay: number) => ({
  hidden: {
    x: -50,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.25,
      delay: delay * 0.2,
    },
  },
});

export const opacityVariant = (delay: number) => ({
  hidden: {
    x: 0,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1,
      delay,
    },
  },
});

export const staggerContainer = (
  staggerChildren: number,
  delayChildren: number,
) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});
