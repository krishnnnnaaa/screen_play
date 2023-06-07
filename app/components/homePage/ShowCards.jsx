"use client"

import { useContext } from "react"
import ShowCard from "./ShowCard"
import { AppDataContext } from "@/app/context/Appdata"



export default function ShowCards(){
const { data } = useContext(AppDataContext)   // to set the api data
    return(
        <div className="flex flex-wrap justify-center">
            {
                data &&
                data.map(item => <ShowCard key={item.show.id} showName={item.show.name} premiered={item.show.premiered} rating={item.show.rating.average} genres={item.show.genres} image={item.show.image.medium} link={item.show.id}/>)
            }
        </div>
    )
}