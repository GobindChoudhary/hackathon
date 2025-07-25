import { useRef } from "react";

const newArrivals = [
  {
    id: 1,
    name: "Sand Kargo",
    price: 1999,
    image: "/ruged t-shirt.jpg",
    video: "/sand Cargo.mp4",
    category: "Kargo",
  },
  {
    id: 2,
    name: "VTG Cargo",
    price: 999,
    image: "/green cargo.jpg",
    video: "/VTG.mp4",
    category: "T-shirt",
  },
  {
    id: 3,
    name: "Twin koi Tee",
    price: 2499,
    image: "/green t-shirt.jpg",
    video: "/Twin.mp4",
    category: "Hoodie",
  },
  {
    id: 4,
    name: "Summer time_happiness",
    price: 499,
    image: "/white t-shirt.jpg",
    video: "/summer.mp4",
    category: "Cap",
  },
];

const VideoCard = () => {
  return newArrivals.map((item) => {
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
      videoRef.current?.play();
    };

    const handleMouseLeave = () => {
      videoRef.current?.pause();
      videoRef.current.currentTime = 0;
    };

    return (
      <div
        key={item.id}
        className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden   transition-transform duration-200 hover:scale-102"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <video
          ref={videoRef}
          src={item.video}
          muted
          loop
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/70 w-[90%] flex items-center gap-4 p-2  backdrop-blur-sm">
          <img
            src={item.image}
            alt={item.name}
            className="h-16 w-16 object-cover "
          />
          <div>
            <h3 className="text-sm font-semibold">{item.name}</h3>
            <p className="text-xs font-medium">₹{item.price}</p>
          </div>
        </div>
      </div>
    );
  });
};

export default VideoCard;
