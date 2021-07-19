export const animationOne = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

export const animationTwo = {
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: 300,
  },
  end: {
    x: 0,
    opacity: 1,
  },
};

export const animationThree = {
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: -300,
  },
  end: {
    x: 0,
    opacity: 1,
  },
};

export const animationFour = {
  in: {
    opacity: 1,
    y: 100,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: 0,
    scale: 0.3,
  },
  end: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
};

export const transition = {
  duration: 1,
};
