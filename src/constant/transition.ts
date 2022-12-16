const dropIn = {
  hidden: {
    top: '0%',
  },
  visible: {
    top: '20%',
    transition: {
      // duration: 0.8,
      type: 'spring',
      stiffness: 700,
      damping: 30,
    },
  },
  exit: {
    top: -80,
  },
};

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const pageMotion = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', bounce: 0.4 },
  },
  exit: {
    opacity: 0,
    x: 0,
    transition: { type: 'spring', bounce: 0.4 },
  },
};

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};

export { pageMotion, cardVariants, spring, dropIn };
