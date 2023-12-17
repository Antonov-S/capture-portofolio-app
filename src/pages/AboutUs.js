import React from "react";
import { motion } from "framer-motion";

import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";

import { pageAnimation } from "../animation";
import { ScrollTop } from "../components/ScrollTop";

export default function AboutUs() {
  return (
    <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <ScrollTop />
    </motion.div>
  );
}
