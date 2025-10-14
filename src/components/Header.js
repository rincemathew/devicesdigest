import React from "react";

export default function Header() {
  return (
    <div className="flex justify-center items-center bg-(--color-main)">
      <div className="w-full md:w-3/4 bg-(--color-secondary)">
        <div className="hidden md:block">
          this is desktop header
          <div>Register or sign in</div>
          <div>devices digest, search box, heart symbol</div>
          <div>Mobiles and Tablets, gadgets, Articles etc</div>
        </div>
        <div className="md:hidden">
          this is mobile header
          <div>= devices digest</div>
          <div>search box</div>
          <div>Mobiles and Tablets, gadgets, Articles etc</div>
        </div>
      </div>
    </div>
  );
}
