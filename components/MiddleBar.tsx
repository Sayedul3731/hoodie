"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../public/logo.png";
import { VscThreeBars } from "react-icons/vsc";
import { BsCart3 } from "react-icons/bs";
import Link from "next/link";

const MiddleBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white border border-secondary py-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap">
        {/* Left Section: Logo and Title */}
        <div className="w-11/12 lg:w-1/2 flex justify-between items-center ">
          {/* Logo for mobile and desktop */}
          <Image
            src={logo}
            width={100}
            height={100}
            alt="Company logo"
            className="hidden lg:block "
          />

          {/* Hamburger Menu Button */}
          <button
            className="text-3xl pl-1 lg:hidden text-secondary"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <VscThreeBars />
          </button>

          {/* Title */}
          <p className="text-3xl font-extrabold text-primary pr-3 lg:pr-20">
            Red <span className="text-secondary">Hoodie!</span>
          </p>
          {/* Right Section: Cart Icon */}
          <div className="w-1/12 flex justify-center py-2 lg:hidden text-secondary">
            <button aria-label="View shopping cart" className="text-2xl pr-1">
              <BsCart3 />
            </button>
          </div>
        </div>

        {/* Center Section: Search Bar */}
        <div className="w-full md:w-1/2 lg:flex lg:justify-end py-2 hidden">
          <input
            type="text"
            placeholder="Search..."
            className="border-2 border-primary rounded-md focus:outline-none px-2 py-1 w-full md:w-4/5"
            aria-label="Search products"
          />
        </div>
      </div>

      {/* Mobile Menu (Optional) */}
      {isMenuOpen && (
        <div className={`fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden`}>
          {/* Sliding menu container */}
          <div
            className={`absolute -top-[1px] left-0 h-full w-3/4 max-w-xs bg-white z-20 p-5 transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div
              onClick={toggleMenu}
              className="flex justify-end cursor-pointer text-secondary font-semibold text-xl mb-4"
            >
              ✕
            </div>
            {/* Add your mobile menu items here */}
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-xl font-semibold text-secondary hover:text-primary"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/hoodie"
                  className="text-xl font-semibold text-secondary hover:text-primary"
                >
                  Hoodie
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="text-xl font-semibold text-secondary hover:text-primary"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MiddleBar;
