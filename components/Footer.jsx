import Image from 'next/image'
import React from 'react'
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-blue-200 py-5 items-center">
      <Image
        src="/assets/logo.png"
        width={180}
        height={100}
        alt="footer image"
        className='h-auto'
      />
      <p className="text-sm">All rights reserved. Copyright @Daksh</p>

      <div className="flex">
        <a href="https://github.com/dakshs-07">
          <FaGithub size={30} />
        </a>
      </div>
    </div>
  );
}

export default Footer