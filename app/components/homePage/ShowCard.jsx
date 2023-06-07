"use client"

import Image from "next/image"
import Link from "next/link"

export default function ShowCard({showName, genres, premiered, rating, image, link}){
    return(
        <>
        <div className="p-4 w-[80%] sm:w-[300px] m-8 hover:scale-125 transition-all">
        <div className="h-full bg-gray-800 bg-opacity-40 px-8 py-8 rounded-lg overflow-hidden text-center relative">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">{genres[0]}</h2>
          <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">{showName}</h1>
          <p className="text-sm my-3 text-gray-500">Premiered on  <span className="text-white">{premiered}</span></p>
          <div className="w-[205px] h-[294px] m-auto relative">
          <Image src={image} alt="show" fill={true} className="w-full h-full object-contain"/>
        </div>
          <Link href={`/show/${link}/${showName}/`} className="text-indigo-400 inline-flex hover:bg-black py-2 cursor-pointer px-4 rounded-lg transition-all items-center my-5">Know More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
          <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
            <div className="text-gray-500 mr-3 flex items-center leading-none text-sm pr-3 py-1 border-opacity-50">
              <p>Rating: {rating != null ? rating : "NA"}</p>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}