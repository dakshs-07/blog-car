import React from "react";
import BlogItem from "./BlogItem";
import { blog_data } from "@/public/assets/assets";
import { useState } from "react";

const BlogList = () => {
  const [menu, setMenu] = useState("All");

  return (
    <div>
      <div className="flex justify-center gap-6 my-10">
        <button onClick={()=> setMenu('All')} className={menu==="All"?"bg-blue-900 text-white py-1 px-4 rounded-sm":""}>
          All
        </button>
        <button onClick={()=> setMenu('cars')} className={menu==="cars"?"bg-blue-900 text-white py-1 px-4 rounded-sm":""}>Cars</button>
        <button onClick={()=> setMenu('driving')} className={menu==="driving"?"bg-blue-900 text-white py-1 px-4 rounded-sm":""}>Driving</button>
        <button onClick={()=> setMenu('technology')} className={menu==="technology"?"bg-blue-900 text-white py-1 px-4 rounded-sm":""}>Technology</button>
      </div>
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {blog_data.filter((item)=>menu==="All"?true:item.category===menu).map((item, index) => {
          return (
            <BlogItem
              key={index}
              id={item.id}
              title={item.title}
              description={item.description}
              category={item.category}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;
