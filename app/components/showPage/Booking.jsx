"use client"

import { useEffect, useState } from "react"
import Loading from "../utils/Loading"

export default function Booking({setToggleBooking, rating, name}){
    const [showBooked, setShowBooked] = useState(false)   // to toggle booking form
    const [user, setUser] = useState([])   // to store the user data for booking purpose

    useEffect(() => {
        if (localStorage.getItem("user") != null) {
          // To retrieve the user data from localstorage if it exists
          let user = JSON.parse(localStorage.getItem("user")); 
          setUser(user)
        }
      }, []);

    // function to book show
    const bookMyShow = ()=>{
        setShowBooked(true)
        setTimeout(() => {
            setShowBooked("Booked")
        }, 3000);
        setTimeout(() => {
            setToggleBooking(false)
        }, 4000);
    }
    return(
        <div className="fixed top-0 h-full left-0 items-center w-full dark flex justify-center">
            <div className="bg-white sm:w-[400px] w-[80%] h-fit text-black p-4 rounded-lg">
            <div>
                <h1 className="text-2xl my-4">Let&apos;s watch some show, hehe</h1>
            </div>
            <div>
                <div className="my-6">
                    <p>Show Name: <span className="font-semibold">{name}</span></p>
                </div>
                <div className="my-6">
                    <p>Booking for: <span className="font-semibold">{user.name}</span></p>
                </div>
                <div className="my-6">
                    <p>Email: <span className="font-semibold">{user.email}</span></p>
                </div>
                <div className="my-6">
                    <p>Rating: <span className="font-semibold">{rating ? rating : "Not Available"}</span></p>
                </div>
                <div className="mt-6 flex justify-between w-[90%] m-auto">
                    <button onClick={bookMyShow} className="bg-green-700 py-2 px-4 rounded-lg w-[160px] 
                     text-white">{(showBooked == 'Booked'? "Booked, Enjoy!" : "") || (showBooked == true ? <Loading/> :  "Confirm Booking")}</button>
                    <button onClick={()=> setToggleBooking(false)} className="py-2 px-4 rounded-lg text-black sm:w-[160px] w-auto">Cancel</button>
                </div>
            </div>
            </div>
        </div>
    )
}