import React from "react";
import { LuUserRound } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-col justify-center items-center bg-(--color-main)">
      {/* Desktop Header */}
      <div className="w-full md:w-3/4 bg-(--color-secondary)">
        <div className="hidden md:block pt-1">
          <div>
            <div className="flex justify-end text-xs">
              <LuUserRound className="mx-1"></LuUserRound>
              <span className="hover:underline cursor-pointer">Register</span>
              <span className="mx-1">or</span>{" "}
              <span className="hover:underline cursor-pointer">Sign in</span>
            </div>
          </div>
          {/* Logo and Search Box */}
          <div className="flex p-10 justify-between items-center">
            <div className="flex-1 text-4xl font-bold">
              <Link href="/">Devices Digest</Link>
            </div>
            <div className="flex-2 flex justify-center items-center">
              <div className="flex justify-center items-center w-full md:w-3/4">
                <div className="relative flex items-center w-full">
                  {/* Search Input */}
                  <input
                    id="search"
                    type="text"
                    name="search"
                    placeholder="Search for Products"
                    className="bg-white w-full py-2 pl-28 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--color-third)]"
                  />

                  {/* Category Dropdown (inside left side of input) */}
                  <select className="absolute left-2 top-1/2 -translate-y-1/2 bg-transparent border-none text-sm text-gray-700 focus:outline-none">
                    <option value="all">All</option>
                    <option value="mobiles">Mobiles</option>
                    <option value="gadgets">Gadgets</option>
                    <option value="articles">Articles</option>
                  </select>

                  {/* Search Icon (inside right side of input) */}
                  <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-black cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-end">
              <FaRegHeart className="hover:underline cursor-pointer"></FaRegHeart>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-black h-1 w-full"></hr>
      {/* Navigation Bar */}
      <nav>Mobiles and Tablets, gadgets, Articles etc</nav>
      {/* Mobile Header */}
      <div className="md:hidden">
        this is mobile header
        <div>= devices digest</div>
        <div>search box</div>
        <nav>
          Mobiles and Tablets, Watches, Headphones, Articles, Computer, Cameras,
          TV &Audio, Games & Consoles, Accesories
        </nav>
      </div>
    </header>
  );
}
