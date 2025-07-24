const Footer = () => {
  return (
    <footer className="relative bg-[#eeeeee] text-black px-6 md:px-20 py-12 my-4 overflow-hidden">
      <div className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-0 relative z-10">
        {/* Left Title */}
        <div>
          <h2 className="text-2xl md:text-3xl font-medium leading-snug">
            Contact
            <br />
            <span className="font-semibold">Information </span>
          </h2>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Menu</h3>
          <ul className="space-y-2 text-sm">
            <li>Cardo</li>
            <li>Oversized T-shirts</li>
            <li>BB Merchandise</li>
            <li>Raised Right</li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Links</h3>
          <ul className="space-y-2 text-sm">
            <li>Track Orders</li>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Shipping Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Say hello!</h3>
          <div className="flex gap-4 text-xl">
            <i className="ri-facebook-circle-fill"></i>
            <i className="ri-instagram-fill"></i>
            <i className="ri-twitter-x-line"></i>
            <i className="ri-youtube-fill"></i>
          </div>
        </div>
      </div>

      {/* Half-visible Background Text */}
      <h1 className="absolute bottom-14 left-1/2 -translate-x-1/2 translate-y-1/2 text-[20vw] sm:text-[15vw] md:text-[12vw] lg:text-[16vw] font-black text-black opacity-20 pointer-events-none select-none leading-none whitespace-nowrap">
        Youthiyapaa
      </h1>
    </footer>
  );
};

export default Footer;
