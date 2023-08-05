'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';

export const TypingText = ({ tittle, textStyles }) => (
  <motion.p
    variants={textContainer}
    initial="hidden"
    whileInView="show"
    className={`${textStyles} font-extrabold text-[36px] text-secondary-white`}
  >
    {Array.from(tittle).map((letter, index) => (
      <motion.span key={index} variants={textVariant2}>
        {letter === " " ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ tittle, textStyles }) => (
  <h2>Title Text</h2>
);
