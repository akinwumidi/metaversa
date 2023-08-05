'use client';

import { motion } from 'framer-motion';
import { staggerContainer, slideIn, textVariant } from '../utils/motion';
import styles from '../styles';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={staggerContainer}
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex items-center flex-col justify-center relative z-10">
        <motion.h1
          variants={textVariant(1.1)}
          initial="hidden"
          whileInView="show"
          className={styles.heroHeading}
        >
          Metaversa
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          initial="hidden"
          whileInView="show"
          className='flex flex-row justify-center items-center'
        >
          <h1 className={styles.heroHeading}>Ma</h1>
          <div className={styles.heroDText}></div>
          <h1 className={styles.heroHeading}>Ness</h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className='relative w-full md:-mt-[20px] -mt-[12px]'
      // initial="hidden"
      // whileInView="show"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
        <img src="/cover.png" alt="cover" className='w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative' />
        <a href="#explore">
          <div className="flex w-full relative justify-end z-10 pr-[40px] sm:-mt-[70px] -mt-[50px]"><img src="/stamp.png" alt="stamp" className='sm:w-[155px] w-[100px] h-[100px] sm:h-[155px] object-contain' /></div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
