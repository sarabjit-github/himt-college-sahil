import React from "react";
import "./gallery.css";
import { motion } from "framer-motion";
import college1Img from "../../images/college1.jpg";
import college2Img from "../../images/college2.jpg";
import college3Img from "../../images/college3.jpg";
import buildingImg from "../../images/building.jpeg";

export const Gallery = () => {
  const galleryImages = [
    { id: 1, image: college1Img },
    { id: 2, image: college2Img },
    { id: 3, image: college3Img },
    { id: 4, image: buildingImg },
  ];
  const transition = { duration: 1.5, type: "spring", bounce: 0.35 };
  return (
    <>
      <section className="gallery-sec">
        <h1 className="mid-heading">Gallery</h1>
        <div className="img-con">
          {galleryImages.map(({id, image}) => {
            return <motion.img src={image} alt={image} loading="lazy" key={id}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ...transition, delay: `0.${id}` }} />;
          })}
        </div>
      </section>
    </>
  );
};
