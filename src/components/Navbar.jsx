import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const { user, setUser } = useContext(UserContext);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", path: "/home" },
    { label: "Productlist", path: "/productlist" },
    { label: "About", path: "/about" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");

    navigate("/login");
    setIsOpen(false);
  };

  return (
    <header
      className={`w-full px-6 py-4 flex items-center justify-between uppercase tracking-wide font-medium text-sm fixed top-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        darkMode
          ? "bg-gray-900 text-white border-b border-gray-700"
          : "bg-white text-black border-b border-black"
      }`}
    >
      {/* Logo */}
      <Link
        to="/home"
        className={`text-xl font-extrabold italic tracking-tight ${
          darkMode
            ? "text-white hover:opacity-80"
            : "text-black hover:opacity-80"
        } transition`}
      >
        YOUTHIYAPA
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-10 items-center">
        {navItems.map(({ label, path }) => (
          <Link
            key={label}
            to={path}
            className={`relative group ${
              darkMode
                ? "text-white/80 hover:text-white"
                : "text-black/80 hover:text-black"
            } transition-colors`}
          >
            {label}
            <span
              className={`block h-[1px] ${
                darkMode ? "bg-white" : "bg-black"
              } w-0 group-hover:w-full transition-all duration-300 mt-1`}
            ></span>
          </Link>
        ))}
        {/* Auth Link */}
        {user ? (
          <button
            onClick={handleLogout}
            className={`uppercase ${
              darkMode
                ? "text-white/80 hover:text-white"
                : "text-black/80 hover:text-black"
            } transition`}
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className={`uppercase ${
              darkMode
                ? "text-white/80 hover:text-white"
                : "text-black/80 hover:text-black"
            } transition`}
          >
            Login
          </Link>
        )}
      </nav>

      {/* Desktop Icons */}
      <div className="hidden md:flex gap-6 items-center text-xl">
        {/* Theme Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle Theme"
        >
          {darkMode ? (
            <i className="ri-sun-line text-yellow-400 hover:text-yellow-300"></i>
          ) : (
            <i className="ri-moon-line text-gray-800 hover:text-gray-600"></i>
          )}
        </button>
        <Link to="/cart">
          <i className="ri-handbag-line hover:text-gray-400 transition"></i>
        </Link>
        {user && (
          <span className="text-sm font-semibold">Hi, {user.name}!</span>
        )}
      </div>

      {/* Mobile Hamburger */}
      <div
        className={`md:hidden text-2xl cursor-pointer ${
          darkMode ? "text-white" : "text-black"
        }`}
        onClick={() => setIsOpen(true)}
      >
        <i className="ri-menu-line"></i>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 h-full z-50 shadow-lg  transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={() => setIsOpen(false)} className="text-2xl">
            <i className="ri-close-line"></i>
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="flex flex-col p-6 gap-6  uppercase text-sm font-medium">
          {navItems.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              onClick={() => setIsOpen(false)}
              className="hover:opacity-80"
            >
              {label}
            </Link>
          ))}
          <Link
            to="/cart"
            onClick={() => setIsOpen(false)}
            className="hover:opacity-80"
          >
            Cart
          </Link>
          {user ? (
            <button
              onClick={handleLogout}
              className="hover:opacity-80 text-left"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="hover:opacity-80"
            >
              Login
            </Link>
          )}
          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center gap-2"
          >
            {darkMode ? (
              <>
                <i className="ri-sun-line text-yellow-400"></i> Light Mode
              </>
            ) : (
              <>
                <i className="ri-moon-line text-gray-700"></i> Dark Mode
              </>
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0  bg-opacity-40  z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Navbar;
