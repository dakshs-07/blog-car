import { blog_data } from "@/public/assets/assets";
import Image from "next/image";
import React from "react";

const BlogItem = ({ title, description, category, image }) => {
  return (
    <div className="max-w-[330] sm:max-w-[300] bg-white border border-blue-900 hover:shadow ">
      {image && (
        <Image
          src={image}
          height={400}
          width={400}
          alt="image"
          className="border-b border-blue-900"
        />
      )}
      <p className="ml-5 mt-5 px-1 inline-block bg-blue-900 text-white text-sm rounded">
        {category}
      </p>
      <div className="p-5">
        <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="mb-3 text-sm tracking-tight text-gray-700">
          {description}
        </p>
        <div className=" inline-flex items-center py-2 font-semibold text-center">
          read more!
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
