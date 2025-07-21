import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <Navbar />

      {/* Seamless Scrolling Text */}
      <div className="absolute top-1/4 left-0 w-full -translate-y-1/2 z-0 overflow-hidden pointer-events-none">
        <div className="marquee whitespace-nowrap text-[12vw] font-bold uppercase text-neutral-800">
          <span className="mx-8 inline-block">
            Bhuvan Bam — Storyteller — Musician — Comedian — Actor —
          </span>
          <span className="mx-8 inline-block" aria-hidden="true">
            Bhuvan Bam — Storyteller — Musician — Comedian — Actor —
          </span>
          <span className="mx-8 inline-block" aria-hidden="true">
            Bhuvan Bam — Storyteller — Musician — Comedian — Actor —
          </span>
        </div>
      </div>

      {/* Foreground Image */}
      <div className="relative z-10 flex items-center justify-center h-[calc(100vh-80px)] px-4">
        <img
          src="./public/BB.png"
          alt="Bhuvan Bam"
          className="max-w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Home;
