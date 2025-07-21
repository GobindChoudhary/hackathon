import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = ["Productlist", "About", "LogIn"];

  return (
    <header className="w-full bg-white border-b border-neutral-200 px-6 py-4 flex flex-wrap items-center justify-between uppercase tracking-wider font-medium text-sm z-50">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold italic tracking-tight">
        YOUTHIYAPAA
      </Link>

      {/* Navigation - responsive using flex-wrap */}
      <nav className="w-full mt-4 md:mt-0 md:w-auto flex flex-col md:flex-row gap-4 md:gap-10 items-start md:items-center">
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

      {/* Icons */}
      <div className="flex gap-4 items-center text-xl text-neutral-700 ml-auto md:ml-0 mt-4 md:mt-0">
        <i className="ri-search-line cursor-pointer hover:text-black"></i>
        <Link to="/cart">
          <i className="ri-handbag-line cursor-pointer hover:text-black"></i>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
