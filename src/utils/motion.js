export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];
export const EASE_OUT_QUART = [0.25, 1, 0.5, 1];

export const viewportOnce = { once: true, amount: 0.1, margin: "-80px" };

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT_EXPO } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: EASE_OUT_QUART } },
};

export const slideLeft = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: EASE_OUT_EXPO } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: EASE_OUT_EXPO } },
};

export const staggerParent = (stagger = 0.07, delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
});
