import { blog_data } from '@/public/assets/assets';
import Image from 'next/image';
import React from 'react'

const BlogItem = () => {
  return (
    <div className="max-w-[330] sm:max-w-[300] bg-white border border-blue-200 hover:shadow-[-2px_2px_0px_##2A52BE] ">
        <Image src={blog_data[0].image} height={400} width={400} alt='image' className='border-b border-blue-900'/>
        <p className='ml-5 mt-5 px-1 inline-block bg-blue-900 text-white text-sm rounded'>{blog_data[0].category}</p>
        <div className="p-5">
            <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{blog_data[0].title}</h5>
            <p className='mb-3 text-sm tracking-tight text-gray-700'>{blog_data[0].description}</p>
            <div className=' inline-flex items-center py-2 font-semibold text-center'>
                read more!
            </div>
        </div>
    </div>
  );
}

export default BlogItem