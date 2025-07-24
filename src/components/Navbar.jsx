import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["home", "Productlist", "About", "LogIn"];

  return (
    <header className="w-full bg-white border-b border-neutral-200 px-6 py-4 flex items-center justify-between uppercase tracking-wider font-medium text-sm z-50 relative">
      {/* Logo */}
      <Link to="/home" className="text-xl font-bold italic tracking-tight">
        YOUTHIYAPAA
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-10 items-center">
        {navItems.map((item, idx) => (
          <Link
            key={idx}
            to={`/${item.toLowerCase().replace(/\s/g, "")}`}
            className="text-neutral-800 hover:text-black transition-colors relative group"
          >
            {item}
            <span className="block h-[1px] bg-black w-0 group-hover:w-full transition-all duration-300 mt-1"></span>
          </Link>
        ))}
      </nav>

      {/* Icons for Desktop */}
      <div className="hidden md:flex gap-4 items-center text-xl text-neutral-700">
        <Link to="/cart">
          <i className="ri-handbag-line cursor-pointer hover:text-black"></i>
        </Link>
        <Link to="/cart">
          <i className="ri-user-line cursor-pointer hover:text-black"></i>
        </Link>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div
        className="md:hidden text-2xl cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <i className="ri-menu-line"></i>
      </div>

      {/* Sidebar for Mobile (RIGHT SIDE) */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={() => setIsOpen(false)} className="text-2xl">
            <i className="ri-close-line"></i>
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="flex flex-col p-6 gap-6 uppercase text-sm font-medium">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              to={`/${item.toLowerCase().replace(/\s/g, "")}`}
              className="text-neutral-800 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link to="/cart" onClick={() => setIsOpen(false)}>
            <i className="ri-handbag-line mr-2"></i> Cart
          </Link>
          <Link to="/login" onClick={() => setIsOpen(false)}>
            <i className="ri-user-line mr-2"></i> Login
          </Link>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Navbar;
