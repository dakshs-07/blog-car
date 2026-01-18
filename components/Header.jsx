import React from "react";
import Image from "next/image";
import SubscriptionButton from "./SubscriptionButton";

const Header = () => {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Image
          src="/assets/logo.png"
          height={200}
          width={180}
          alt="maybach car lets go"
          className="w-[130] sm:w-auto"
        />
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#2A52BE] cursor-pointer">
          Go Vroom!
        </button>
      </div>
      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-medium">Latest Blogs</h1>
        <p className="mt-10 max-w-[740] m-auto text-xs sm:text-base">Get all the info you need about top cars, all in one place here.</p>
        <SubscriptionButton />
      </div>
    </div>
  );
};

export default Header;
