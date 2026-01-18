"use client";

import { useParams } from "next/navigation";
import { blog_data } from "@/public/assets/assets";
import { useEffect, useState } from "react";

const Page = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const blog = blog_data.find((item) => item.id === Number(id));
    setData(blog);
  }, [id]);

  if (!data) return <p>Loading. Starting up the engine please wait</p>;

  return (
    <div className="bg-gray-100 mt-10 p-5 md:px-12 lg:px-28">
      <div className="flex flex-col justify-between items-center">
        <img src={data.image} alt={data.title} />
      </div>
      <div className="flex flex-col justify-between items-center py-10 gap-y-2">
        <h1 className="text-xl font-semibold font-">{data.title}</h1>
        <p className="text-sm">- {data.author}, {data.date}</p>
        <p className="text-sm">{data.description}</p>
      </div>
    </div>
  );
};

export default Page;
