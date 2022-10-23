import React from "react";
import "./about.css";
import { motion } from "framer-motion";
import principalImg from "../../images/principal.jpg";
import buildingImg from "../../images/building.jpeg";

export const About = () => {
  const transition = { duration: 1.5, type: "spring", bounce: 0.35 };
  return (
    <>
      <section className="about-sec">
        <motion.div
          className="left"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ...transition }}
        >
          <img src={principalImg} alt="principal img" />
          <p>
            Rohit Tandon run this college. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Placeat, eveniet.
          </p>
        </motion.div>
        <div className="right">
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.1 }}
          >
            HIMT college is the best college in Hoshiarpur in IT sector. Here
            you can got your <strong>dream placement</strong>. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Vero pariatur labore itaque,
            aspernatur temporibus magnam voluptatum illum voluptatem ipsum
            doloremque impedit fugit quas voluptatibus odit quis, nihil facilis
            totam eius commodi quaerat eveniet quo. Maiores, eos perspiciatis?
            Perferendis rem atque vitae a, totam ipsa hic magnam minima quia
            asperiores, ad ut, vel iusto tempore reiciendis! Vero nesciunt odit,
            natus provident, saepe alias amet, ab sunt consequuntur sapiente
            tempore aliquid! Dolores sed porro, accusantium sunt vel nihil non
            commodi expedita unde.
          </motion.p>
          <motion.img
            src={buildingImg}
            alt="building img"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.2 }}
          />
        </div>
      </section>
    </>
  );
};
