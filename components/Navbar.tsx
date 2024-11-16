"use client";

import Link from "next/link";
import { HiUserCircle } from "react-icons/hi";
import { BsCart3 } from "react-icons/bs";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <nav className="bg-[#d00000] text-white py-2 font-semibold hidden lg:block">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Mobile menu toggle */}
        <div className="lg:hidden">
          {/* Placeholder for mobile hamburger icon */}
          <button className="text-white">
            <span className="material-icons">menu</span>{" "}
            {/* Use Material Icons for mobile toggle */}
          </button>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:block">
          <ul className="flex justify-center items-center gap-5">
            <li>
              <Link href="/" className="hover:text-gray-300 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/hoodie" className="hover:text-gray-300 transition">
                Hoodie
              </Link>
            </li>
          </ul>
        </div>

        {/* Login and Icons */}
        <div className="flex justify-center items-center gap-10">
          <Link
            href="/login"
            className="hover:text-gray-300 transition flex items-center"
          >
            <HiUserCircle className="mr-2 text-white" />
            Login
          </Link>
          <div aria-label="Icons">
            {/* Placeholder for future icons */}
            <span className="material-icons text-2xl">
              <BsCart3 />
            </span>{" "}
            {/* Example shopping cart icon */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
