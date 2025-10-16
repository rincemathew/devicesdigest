import React from "react";
import { LuUserRound } from "react-icons/lu";


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
          <div>devices digest, search box, heart symbol</div>
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
