import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="w-full min-h-screen px-4 md:px-10 overflow-x-hidden bg-white text-black font-sans">
      <Navbar />

      <h1 className="text-4xl md:text-5xl font-bold opacity-80 py-4 uppercase">
        About
      </h1>

      {/* Fixed Hero Section */}
      <div
        id="div1"
        className="fixed top-0 left-0 w-full h-screen z-10 flex flex-col lg:flex-row overflow-hidden gap-4 bg-white px-4 md:px-10"
      >
        {/* Image */}
        <div className="w-full lg:w-[40%] h-[300px] md:h-[400px] lg:h-full bg-[url('/bb-about.webp')] bg-cover bg-center" />

        {/* Text */}
        <div className="lg:w-[60%] flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold opacity-70">
            Bhuvan Bam
          </h1>
          <div className="py-6 md:py-10 text-lg md:text-xl font-semibold text-black opacity-70 z-20">
            BB Ki Vines made Bhuvan the first Indian digital creator to cross 10
            million subscribers. But Bhuvan didn’t stop there. He ventured into
            music, acting, and web series—creating chart-topping songs and the
            acclaimed "Dhindora".
            <br />
            <br />
            Youthiapa is more than a brand — it's a celebration of hustle,
            humor, and heart. For every youth who dares to dream — just like
            Bhuvan did.
          </div>
        </div>

        {/* Faded Large Background Text */}
        <h1 className="absolute -bottom-40 left-1/2 transform -translate-x-1/2 text-[20vw] font-black text-black opacity-10 pointer-events-none select-none">
          Youthiapa
        </h1>
      </div>

      {/* Content that scrolls over */}
      <div className="relative z-20 pt-[110vh]">
        {/* From Friends to Founder Section */}
        <div className="flex flex-col lg:flex-row gap-10 bg-white mt-10">
          <div id="div2" className="w-full  lg:w-[60%]">
            <h1 className="text-4xl md:text-6xl font-bold opacity-80 mb-4">
              From Friends to Founder
            </h1>
            <p className="text-base md:text-lg font-medium opacity-70 leading-relaxed">
              We started as friends, just a couple of curious minds with a love
              for creativity, storytelling, and building things from the ground
              up. That passion took shape as Youthiapa — a brand that grew with
              Bhuvan’s journey.
              <br />
              <br />
              Over time, we felt a pull toward something deeper. We didn’t want
              to just chase trends — we wanted to stand for something. That’s
              how Raised Right came to life.
              <br />
              <br />
              It’s about wearing your values and feeling confident in your skin.
              At the end of the day, it’s not just about what you wear — it’s
              about what you stand for.
            </p>
          </div>

          {/* Staggered Images */}
          <div className="relative w-full lg:w-[40%] h-[400px] md:h-[500px] lg:h-[80vh]">
            <div className="absolute top-0 left-0 w-[60%] h-[50%] bg-[url('/cofunder.jpeg')] bg-cover bg-center shadow-lg" />
            <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60%] h-[50%] bg-[url('/bb-about.webp')] bg-cover bg-center shadow-lg" />
          </div>
        </div>

        {/* Product Cards */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-16">
          <div className="w-full md:w-[30%] h-[70vh] bg-[url('/product1.jpg')] bg-cover bg-center" />
          <div className="w-full md:w-[30%] h-[70vh] bg-[url('/product2.jpg')] bg-cover bg-center" />
          <div className="w-full md:w-[30%] h-[70vh] bg-[url('/product3.jpg')] bg-cover bg-center" />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default About;
