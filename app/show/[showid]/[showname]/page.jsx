"use client";

import Booking from "@/app/components/showPage/Booking";
import Back from "@/app/components/utils/BackBtn";
import { AppDataContext } from "@/app/context/Appdata";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
export default function Show() {
  const [result, setResult] = useState(null);
  const [toggleBooking, setToggleBooking] = useState(false)
  const pathname = usePathname();
  let showid = pathname.split("/")[2];

  const { data, userLogged } = useContext(AppDataContext);   // getting api data and userlogged state from AppDataContext

  function dataid(item) {
    return item.show.id == showid;  // filtering the selected show from other shows
  }

  useEffect(() => {
    const getId = data.filter(dataid);
    setResult(getId[0].show);
  });

  function setBooking(){
    if(userLogged){
      setToggleBooking(true)  // toggle booking component only if user is logged, otherwise you'll get an alert
    }
  }

  return (
    <>
      {result && (
        <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
          <Back/>
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  {result?.genres[0]}
                </h2>
                <h1 className="text-white text-4xl title-font font-medium my-4">
                  {result?.name}
                </h1>
                <div>
                <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto h-auto sm:hidden object-cover object-center rounded"
                src={result?.image?.original}
              />
                </div>
                <div className="flex mb-4">
                  <a className="flex-grow text-indigo-400 border-b-2 border-indigo-500 py-2 text-2xl my-4  sm:text-lg">
                    Summary
                  </a>
                </div>
                <p className="leading-relaxed mb-4">{result?.summary.slice(3,-4)}</p>
                <div className="flex border-t border-gray-800 py-2">
                  <span className="text-gray-500">Rating</span>
                  <span className="ml-auto text-white">
                    {result?.rating?.average ? result?.rating?.average : "Not Available"}
                  </span>
                </div>
                <div className="flex border-t border-gray-800 py-2">
                  <span className="text-gray-500">Premiered On</span>
                  <span className="ml-auto text-white">
                    {result?.premiered ? result?.premiered : "Not Available"}
                  </span>
                </div>
                <div className="flex border-t border-b mb-6 border-gray-800 py-2">
                  <span className="text-gray-500">Ended On</span>
                  <span className="ml-auto text-white">
                    {result?.ended ? result?.ended : "Not Available"}
                  </span>
                </div>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-white">
                    Status: {result?.status}
                  </span>
                  <button onClick={setBooking} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Book Now
                  </button>
                  {
                    toggleBooking ?
                    <Booking setToggleBooking={setToggleBooking} name={result?.name} rating={result?.rating?.average}/> : ""
                  }
                </div>
                  {
                    !userLogged ? 
                    <div className="bg-orange-100 mt-4 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
                    <p className="font-bold">Alert!</p>
                    <p>Please Sign up first to book your show!</p>
                  </div> : ""
                  }
              </div>
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto hidden sm:block h-64 sm:h-auto object-cover object-center rounded"
                src={result?.image?.original}
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
