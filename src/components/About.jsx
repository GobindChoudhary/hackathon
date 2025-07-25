import React, { useContext } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const About = () => {
  const { darkMode } = useContext(ThemeContext);

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div
      className={`w-full mt-14 min-h-screen font-sans transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <Navbar />

      {/* Page Title */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold opacity-80 py-8 px-12 uppercase"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About
      </motion.h1>

      {/* Hero Section */}
      <section className="w-full flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 gap-10 ">
        {/* Image */}
        <motion.div
          className="w-full lg:w-1/2 h-[300px] md:h-[500px] bg-[url('/bb-about.webp')] bg-cover bg-center "
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Text */}
        <motion.div
          className="w-full lg:w-1/2"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-5xl md:text-9xl font-bold opacity-90 mb-4">
            Bhuvan Bam
          </h2>
          <p className="text-base md:text-lg font-medium opacity-80 leading-relaxed">
            BB Ki Vines made Bhuvan the first Indian digital creator to cross 10
            million subscribers. But Bhuvan didn’t stop there. He ventured into
            music, acting, and web series—creating chart-topping songs and the
            acclaimed "Dhindora".
            <br />
            <br />
            Youthiapa is more than a brand — it's a celebration of hustle,
            humor, and heart. For every youth who dares to dream — just like
            Bhuvan did.
          </p>
        </motion.div>
      </section>

      {/* Large Text Background */}
      <div className="relative mb-20">
        <motion.h1
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[18vw] font-black opacity-10 pointer-events-none select-none leading-none whitespace-nowrap  ${
            darkMode ? "text-gray-600" : "text-gray-300"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1 }}
        >
          Youthiyapa
        </motion.h1>
      </div>

      {/* From Friends to Founder Section */}
      <section className="px-6 pt-10 md:px-12 flex flex-col lg:flex-row gap-10 items-center">
        <motion.div
          className="w-full lg:w-[60%]"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-4xl md:text-6xl font-bold opacity-90 mb-4">
            From Friends to Founder
          </h2>
          <p className="text-base md:text-lg font-medium opacity-80 leading-relaxed">
            We started as friends, just a couple of curious minds with a love
            for creativity, storytelling, and building things from the ground
            up. That passion took shape as Youthiapa — a brand that grew with
            Bhuvan’s journey.
            <br />
            <br />
            Over time, we felt a pull toward something deeper. We didn’t want to
            just chase trends — we wanted to stand for something. That’s how
            Raised Right came to life.
            <br />
            <br />
            It’s about wearing your values and feeling confident in your skin.
            At the end of the day, it’s not just about what you wear — it’s
            about what you stand for.
          </p>
        </motion.div>

        {/* Floating Images */}
        <motion.div
          className="w-full lg:w-[40%] relative h-[400px] md:h-[500px] mt-20 lg:h-[80vh]"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="absolute top-0 left-0 w-[60%] h-[50%] bg-[url('/cofunder.jpeg')] bg-cover bg-center shadow-2xl grayscale hover:grayscale-0 transition duration-700"
            variants={fadeInUp}
          />
          <motion.div
            className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60%] h-[50%] bg-[url('/bb-about.webp')] bg-cover bg-center shadow-2xl grayscale hover:grayscale-0 transition duration-700"
            variants={fadeInUp}
          />
        </motion.div>
      </section>

      {/* Products Preview */}
      <section className="px-6 md:px-12 py-20">
        <Link
          to={"/productlist"}
          className="flex items-center justify-between mb-10 "
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold opacity-90   uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Check Out Our New Collection
          </motion.h2>
          <i
            className={`ri-arrow-right-up-line text-3xl md:text-5xl font-bold ${
              darkMode ? "text-white" : "text-black/70"
            }`}
          ></i>
        </Link>
        <motion.div
          className="flex flex-col md:flex-row justify-center gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {["/product1.jpg", "/product2.jpg", "/product3.jpg"].map((src, i) => (
            <motion.div
              key={i} 
              className="w-full md:w-[30%] h-[70vh] bg-cover bg-center grayscale hover:grayscale-0 transition-transform duration-700 transform hover:scale-105"
              style={{ backgroundImage: `url(${src})` }}
              variants={fadeInUp}
            />
          ))}
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
