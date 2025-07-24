import Navbar from "./Navbar";
import VideoCard from "./VideoCard";
import Footer from "./Footer";
import TextPressure from "./StyleCompnent/TextPressure";

const Home = () => {
  return (
    <div className="overflow-hidden px-4 md:px-10 pt-[80px]">
      {" "}
      {/* Add padding for fixed navbar */}
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <Navbar />
      </div>
      {/* Hero Section */}
      <div className="relative h-screen flex justify-center items-center">
        {/* Brand Text Behind Image */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none opacity-70 select-none w-full flex justify-center">
          <TextPressure
            text="Youthiapa"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#000000ff"
            strokeColor="#ff0000ff"
            minFontSize={36}
          />
        </div>

        {/* Center Image */}
        <img
          src="/BB.png"
          alt="Bhuvan Bam"
          className="relative z-10 max-w-[90vw] md:max-w-[60vw] h-[60vh] md:h-[80vh] rounded-xl object-contain transition-transform duration-500 hover:scale-105"
        />
      </div>
      {/* Paragraph Section */}
      <div className="z-20 w-full md:w-[90%] px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-black font-bold opacity-80 mt-[-2rem]">
        <p className="text-center md:text-left text-sm md:text-base w-full md:w-[50%]">
          Born out of Youthiapa, Raised Right is our fresh drop for everyday
          comfort and clean, confident style. But this isn’t just about what you
          wear. It’s about what you stand for.
        </p>
        <h1 className="text-center md:text-right text-lg md:text-2xl w-full md:w-[40%] opacity-70">
          No noise. No nonsense. Just daily wear, done right.
        </h1>
      </div>
      {/* New Arrivals */}
      <h1 className="text-3xl md:text-4xl font-bold py-6">New Arrivals</h1>
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div className="card w-full md:w-[30vw] h-[70vh] bg-[url('/product1.jpg')] bg-cover bg-center" />
        <div className="card w-full md:w-[30vw] h-[70vh] bg-[url('/product2.jpg')] bg-cover bg-center" />
        <div className="card w-full md:w-[30vw] h-[70vh] bg-[url('/product3.jpg')] bg-cover bg-center" />
      </div>
      {/* Oversized */}
      <h1 className="text-3xl md:text-4xl font-bold py-6">Oversized</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <VideoCard src={"/sand Cargo.mp4"} />
        <VideoCard src={"/VTG.mp4"} />
        <VideoCard src={"/Twin.mp4"} />
        <VideoCard src={"/summer.mp4"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
