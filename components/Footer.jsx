'use client';

import styles from "../styles";
import { socials } from "../constants";
import { motion } from "framer-motion"
import { footerVariants } from "../utils/motion";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial='hidden'
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />

    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`} >
      <div className="flexitems-center flex justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white ">Enter the Metaversa</h4>
        <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]">

          <img src="/headset.svg" alt="headset" className="w-[24px] h-[24px] object-contain " /><span className="font-normal text-[16px] text-white ">ENTER METAVERSA</span>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="bg-white mb-[50px] h-[2px] opacity-10" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            Metaversa </h4>
          <p className="font-normal text-white text-[14px] opacity-50">Copyright &copy; 2020-2023 Metaversa. All right reserved.</p>
          <div className="flex gap-4">{

            socials.map((social) => (

              < img src={social.url} alt={social.name} className="w-[24px] h-[24px] cursor-pointer object-contain" />
            ))
          }
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
