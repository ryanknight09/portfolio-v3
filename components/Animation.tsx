"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

const fadeUpAnimationVariants = {
  initial: { y: 25, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
};

interface Props {
  children: ReactNode;
  className?: string;
  index?: number;
}

export const FadeUpDiv = ({ children, className }: Props) => {
  return (
    <motion.div
      variants={fadeUpAnimationVariants}
      initial={"initial"}
      whileInView="animate"
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const staggeredFadeInAnimationVariants = {
  initial: { y: 0, opacity: 0 },
  animate: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay: index * 0.05,
    },
  }),
};

export const StaggeredFadeUpDiv = ({ children, className, index }: Props) => {
  return (
    <motion.div
      variants={staggeredFadeInAnimationVariants}
      initial={"initial"}
      animate={"animate"}
      viewport={{ once: true }}
      custom={index}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const staggeredXAnimationVariants = {
  initial: { x: -100, opacity: 0 },
  animate: (index: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay: index * 0.1,
    },
  }),
};

export const StaggeredXDiv = ({ children, className, index }: Props) => {
  return (
    <motion.div
      variants={staggeredXAnimationVariants}
      initial={"initial"}
      animate={"animate"}
      viewport={{ once: true }}
      custom={index}
      className={className}
    >
      {children}
    </motion.div>
  );
};
