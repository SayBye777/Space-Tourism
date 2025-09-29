"use client"
import Image from "next/image"
import { useState } from "react"
import Headline from "../components/Headline"
import data from "@/app/data.json"

export default function TechnologyPage(){
    const [filter, setFilter] = useState(0)
    return (
        <div className="bg-[url(/technology/background-technology-mobile.jpg)] md:bg-[url(/technology/background-technology-tablet.jpg)]
                        lg:bg-[url(/technology/background-technology-desktop.jpg)] w-full h-full bg-cover text-white"> 
            <Headline/>
            <div className="flex w-full">
                <div className="w-2/3">
                    <div className="flex mx-auto gap-4 w-1/2">
                        <ol className="flex flex-col justify-between">
                            <li onClick={()=>setFilter(0)} className="p-4 bg-white rounded-full">1</li>
                            <li onClick={()=>setFilter(1)} >2</li>
                            <li onClick={()=>setFilter(2)} >3</li>
                        </ol>

                        <div className="flex flex-col gap-4">
                            <p> The Terminology</p>
                            <h1> {data.technology[filter].name}</h1>
                            <p> {data.technology[filter].description} </p>
                        </div>
                    </div>                    
                </div>
                <div className="w-1/3 my-10 flex justify-end">
                    <Image
                        src={`${data.technology[filter].images.portrait}`}
                        width={600}
                        height={300}
                        alt={`${data.technology[filter].name}`}
                    />
                </div>
            </div>

        </div>
    )
}