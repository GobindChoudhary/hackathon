import { useRef } from "react";

const newArrivals = [
  {
    id: 1,
    name: "Sand Kargo",
    price: 1999,
    image: "/product1.jpg",
    video: "/video1.mp4",
    category: "Kargo",
  },
  {
    id: 2,
    name: "Oversized BB Tee",
    price: 999,
    image: "/product2.jpg",
    video: "/video2.mp4",
    category: "T-shirt",
  },
  {
    id: 3,
    name: "Raised Right Hoodie",
    price: 2499,
    image: "/product3.jpg",
    video: "/video3.mp4",
    category: "Hoodie",
  },
  {
    id: 4,
    name: "Signature Cap",
    price: 499,
    image: "/product4.jpg",
    video: "/video4.mp4",
    category: "Cap",
  },
];

const VideoCard = ({ src }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    videoRef.current?.pause();
    videoRef.current.currentTime = 0; // Optional: rewind
  };

  return (
    <div
      className="card relative w-full sm:w-[80vw] md:w-[100%] h-[60vh] md:h-[70vh] bg-cover bg-center overflow-hidden transition-transform duration-300 hover:scale-105"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        className="w-full h-full object-cover"
      />

      {/* Bottom Info Overlay */}
      <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 flex items-center justify-start gap-3 w-[90%] h-[15%] px-2 bg-white/40 shadow-md rounded-md">
        <img
          src="/public/hero1.jpg"
          className="h-full aspect-square object-cover rounded"
          alt="product"
        />
        <div className="flex flex-col justify-center">
          <h3 className="font-bold text-sm md:text-base"></h3>
          <p className="font-semibold text-xs md:text-sm"></p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
