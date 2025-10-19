import React from "react";
import { LuUserRound } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
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
              <span className="hover:underline cursor-pointer">Register</span><span className="mx-1">or</span> <span className="hover:underline cursor-pointer">Sign in</span>
            </div>
          </div>
          {/* Logo and Search Box */}
          <div className="flex p-10 justify-between items-center">
            <div className="flex-1 text-4xl font-bold">
              <Link href="/">Devices Digest</Link>
            </div>
            <div className="flex-2">
              search box
            </div>
            <div className="flex-1 flex justify-end">
              <FaRegHeart className="hover:underline cursor-pointer"></FaRegHeart>
            </div>
          </div>
        </div>
      </div>
      {/* Navigation Bar */}
      <nav>Mobiles and Tablets, gadgets, Articles etc</nav>
      {/* Mobile Header */}
      <div className="md:hidden">
        this is mobile header
        <div>= devices digest</div>
        <div>search box</div>
        <nav>Mobiles and Tablets, gadgets, Articles etc</nav>
      </div>
    </header>
  );
}
