'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';
import styles from '../styles';

const About = () => (
  <section className={`${styles.paddings} relative z-10 `}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText tittle="| About Metaversa" textStyles="text-center" />
      <motion.p className='mt-[8px] font-normal text-center text-secondary-white sm:text-[32px] text-[20px]'
        variants={fadeIn("up", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
      >
        <span className='text-white font-extrabold'>  Metaverse</span> is a new thing in the future, where you can enjoy the virtual world by feeling like it's really real, you can feel what you feel in this metaverse world, because this is really the
        <span className='text-white font-extrabold'> madness of the metaverse</span>  of today, using only  <span className='text-white font-extrabold'>  VR</span> devices you can easily explore the metaverse world you want, turn your dreams into reality. Let's <span className='text-white font-extrabold'> explore</span> the madness of the metaverse by scrolling down
      </motion.p>
      <motion.img src="/arrow-down.svg" alt="arrow down" className='w-[19px] h-[28px] object-contain mt-[28px]'
        variants={fadeIn("up", "tween", 0.3, 1)}
        initial="hidden" whileInView="show" />
    </motion.div>
  </section>
);

export default About;
