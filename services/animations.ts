export const LandingAnimation = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { ease: "linear", duration: 0.4 }
  },
}

export const SliderAnimation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { ease: "linear", duration: 0.4 }
  },
}