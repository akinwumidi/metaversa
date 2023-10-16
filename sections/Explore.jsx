'use client';

import { useState } from "react"
import { motion } from 'framer-motion';
import { TypingText, ExploreCard, TitleText } from '../components';
import { staggerContainer } from '../utils/motion';
import styles from '../styles';
import { exploreWorlds } from "../constants";

const Explore = () => {
  const [active, setActive] = useState("world-2");

  return (
    <section id="explore"
      className={`${styles.paddings}`}
    >
      <motion.div
        className={`${styles.innerWidth} mx-auto flex flex-col `}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <TypingText textStyles="text-center" tittle="| The world" />
        <TitleText textStyles="text-center" tittle={<>Choose the world you want <br className="md:block hidden" /> to explore </>} />
        <div className="flex flex-col lg:flex-row mt-[50px] gap-5 min-h-[70vh] ">

          {
            exploreWorlds.map((world, index) => (
              <ExploreCard {...world} key={world.id} index={index} active={active} handleClick={setActive} />
            ))
          }

        </div>
      </motion.div>
    </section>
  )
};

export default Explore;
