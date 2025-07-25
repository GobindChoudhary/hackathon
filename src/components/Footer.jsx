import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <footer
      className={`relative px-6 md:px-20 py-12 my-4 overflow-hidden transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-[#eeeeee] text-black"
      }`}
    >
      <div className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-0 relative z-10">
        {/* Left Title */}
        <div>
          <h2
            className={`text-2xl md:text-3xl font-medium leading-snug ${
              darkMode ? "text-white" : "text-[#111]"
            }`}
          >
            Contact
            <br />
            <span
              className={`font-semibold ${
                darkMode ? "text-gray-300" : "text-[#000]"
              }`}
            >
              Information
            </span>
          </h2>
        </div>

        {/* Services */}
        <div>
          <h3
            className={`text-lg font-semibold mb-3 ${
              darkMode ? "text-white" : "text-[#111]"
            }`}
          >
            Menu
          </h3>
          <ul
            className={`space-y-2 text-sm ${
              darkMode ? "text-gray-400" : "text-[#222]"
            }`}
          >
            {[
              "Cardo",
              "Oversized T-shirts",
              "BB Merchandise",
              "Raised Right",
            ].map((item, i) => (
              <li
                key={i}
                className={`hover:${
                  darkMode ? "text-white" : "text-[#000]"
                } hover:underline underline-offset-4 transition duration-200 cursor-pointer`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3
            className={`text-lg font-semibold mb-3 ${
              darkMode ? "text-white" : "text-[#111]"
            }`}
          >
            Links
          </h3>
          <ul
            className={`space-y-2 text-sm ${
              darkMode ? "text-gray-400" : "text-[#222]"
            }`}
          >
            {[
              "Track Orders",
              "Privacy Policy",
              "Refund Policy",
              "Shipping Policy",
              "Terms of Service",
            ].map((item, i) => (
              <li
                key={i}
                className={`hover:${
                  darkMode ? "text-white" : "text-[#000]"
                } hover:underline underline-offset-4 transition duration-200 cursor-pointer`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3
            className={`text-lg font-semibold mb-3 ${
              darkMode ? "text-white" : "text-[#111]"
            }`}
          >
            Say hello!
          </h3>
          <div
            className={`flex gap-4 text-2xl ${
              darkMode ? "text-gray-400" : "text-[#222]"
            }`}
          >
            {[
              "ri-facebook-circle-fill",
              "ri-instagram-fill",
              "ri-twitter-x-line",
              "ri-youtube-fill",
            ].map((icon, i) => (
              <i
                key={i}
                className={`${icon} hover:${
                  darkMode ? "text-white" : "text-[#000]"
                } transition-transform transform hover:scale-110 duration-200 cursor-pointer`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Background Wordmark */}
      <h1
        className={`absolute bottom-14 left-1/2 -translate-x-1/2 translate-y-1/2 text-[20vw] sm:text-[15vw] md:text-[12vw] lg:text-[16vw] font-black ${
          darkMode ? "text-gray-700" : "text-[#111]"
        } opacity-20 pointer-events-none select-none leading-none whitespace-nowrap`}
      >
        Youthiyapaa
      </h1>
    </footer>
  );
};

export default Footer;
