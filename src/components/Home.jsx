import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import VideoCard from "./VideoCard";
import Footer from "./Footer";
import TextPressure from "./StyleCompnent/TextPressure";
import ScrollVelocity from "./StyleCompnent/ScrollVelocity";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Home = () => {
  const { darkMode } = useContext(ThemeContext);
  const [themeTransition, setThemeTransition] = useState(false);

  useEffect(() => {
    setThemeTransition(true);
    const timeout = setTimeout(() => setThemeTransition(false), 500);
    return () => clearTimeout(timeout);
  }, [darkMode]);

  const velocity = 100;

  return (
    <div
      className={`overflow-hidden px-4 md:px-10 pt-[80px] transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } ${themeTransition ? "opacity-0 animate-fade-in" : "opacity-100"}`}
    >
      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 w-full z-50 shadow-md transition-colors duration-500 ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="relative h-screen flex justify-center items-center">
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none opacity-70 select-none w-full flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1.2 }}
        >
          <TextPressure
            text="Youthiapa"
            flex
            alpha={false}
            stroke={false}
            width
            weight
            italic
            textColor={darkMode ? "#ffffff" : "#000000"}
            strokeColor="#ff0000"
            minFontSize={36}
          />
        </motion.div>

        <motion.img
          src="/BB.png"
          alt="Bhuvan Bam"
          className="relative z-10 max-w-[90vw] md:max-w-[60vw] h-[60vh] md:h-[80vh] object-contain transition-transform duration-500 hover:scale-105"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>

      {/* New Arrivals */}
      <motion.h1
  className={`text-3xl md:text-4xl font-bold py-6 uppercase ${
    darkMode ? "text-white" : "text-black"
  }`}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  New Arrivals
</motion.h1>  

      <div className="flex flex-col md:flex-row justify-between gap-6">
        {["/product1.jpg", "/product2.jpg", "/product3.jpg"].map((src, i) => (
          <Link to="/productlist" key={i}>
            <motion.div
              className={`card w-full md:w-[30vw] h-[70vh]  overflow-hidden bg-cover bg-center border ${
                darkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-gray-100 border-gray-300"
              }`}
              style={{ backgroundImage: `url(${src})` }}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
            />
          </Link>
        ))}
      </div>

      {/* Oversized */}
      <motion.h1
        className={`text-3xl md:text-4xl font-bold py-6 uppercase ${
          darkMode ? "text-white" : "text-black"
        }`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Oversized
      </motion.h1>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <Link
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          to={"/productlist"}
        >
          <VideoCard />
        </Link>
      </motion.div>

      {/* Curved Text Scroll */}
      <ScrollVelocity
        texts={["✦ So Stylish, Even Your Ex Might Text."]}
        velocity={velocity}
        className={`custom-scroll-text py-8 ${
          darkMode ? "text-white" : "text-black/70"
        }`}
      />

      {/* About Section */}
      <div
        className={`w-full h-[90vh] mt-4 bg-cover bg-center  ${
          darkMode ? "bg-gray-700" : "bg-gray-100"
        }`}
        style={{ backgroundImage: "url('/bb-about.webp')" }}
      ></div>

      <Link
        to={"/About"}
        className={`w-full flex justify-between items-center py-10 ${
          darkMode ? "text-white" : "text-black/70"
        }`}
      >
        <h1 className="uppercase text-5xl md:text-8xl font-bold">About me</h1>
        <i
          className={`ri-arrow-right-up-line text-5xl md:text-8xl font-bold ${
            darkMode ? "text-white" : "text-black/70"
          }`}
        ></i>
      </Link>

      <Footer />
    </div>
  );
};

export default Home;
