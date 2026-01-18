import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="px-5 py-3 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <a href="/">
          <Image
            src="/assets/logo.png"
            height={100}
            width={180}
            alt="logo"
            className="w-[130] sm:w-auto h-auto"
          />
        </a>

        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#2A52BE] cursor-pointer">
          Go Vroom!
        </button>
      </div>
      <div className="text-center -my-10">
        <h1 className="text-3xl sm:text-5xl font-medium">Car Blogs</h1>
        <p className="mt-10 max-w-[740] m-auto text-xs sm:text-base">
          Get all the info you need about top cars, all in one place here.
        </p>
      </div>
    </div>
  );
};

export default Header;
