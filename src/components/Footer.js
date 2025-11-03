import Link from "next/link";
import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center w-full">
      {/* Desktop Footer */}

      <div className="bg-(--color-main) w-full hidden md:flex justify-center items-center">
        <div className="md:w-3/4 flex justify-between items-center p-2">
          <div className="flex justify-center items-center">
            <FaTelegramPlane />
            Sign up for our newsletter to get the latest updates.
          </div>
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-third)]"
            />
          </div>
        </div>
      </div>
      <div className="w-full hidden md:flex justify-center items-center">
        <div className="md:w-3/4 flex justify-center items-center p-2">
          <div className="flex-2">
            DevicesDigest
          </div>
          <div className="flex-1">
            Find it Fast
            <Link href="/"> Mobiles</Link><br/>
            <Link href="/"> Gadgets</Link><br/>
            <Link href="/"> Articles</Link>
          </div>
          <div className="flex-1">
            <Link href="/"> Mobiles</Link><br/>
            <Link href="/"> Gadgets</Link><br/>
            <Link href="/"> Articles</Link>
          </div>
          <div className="flex-1">
            Customer Service
            <Link href="/"> My Account</Link><br/>
            <Link href="/"> Favorite</Link><br/>
            <Link href="/"> FAQs</Link>
          </div>
        </div>
      </div>
      <div className="w-full hidden md:flex justify-center items-center">
        <div className="md:w-3/4 flex justify-center">© 2026 DevicesDigest</div>
      </div>
      {/* Mobile Footer */}
      <div className="md:hidden">This is the mobile footer</div>
    </footer>
  );
}
