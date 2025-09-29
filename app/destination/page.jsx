"use client"
import Image from "next/image";
import { useState } from "react";
import data from "@/app/data.json"
import Headline from "../components/Headline";

export default function DestinationPage(){
    const [filter, setFilter] = useState("Moon")    
    
    return (
        <div className="bg-[url(/destination/background-destination-mobile.jpg)] md:bg-[url(/destination/background-destination-tablet.jpg)]
                        lg:bg-[url(/destination/background-destination-desktop.jpg)] bg-cover
                        w-full min-h-screen flex text-white"> 
            <div className="flex flex-col">
                <Headline/>
                <div className="flex mx-auto gap-10">
                    <div className="w-1/2 p-10">
                        <Image
                            src={`/destination/image-${filter}.png`}
                            width={400}
                            height={400}
                            alt={`${filter}`}
                            className="mx-auto"                            
                        />
                    </div>
                    <div className="w-1/2 p-10">
                        <ul className="flex gap-4 ">
                            {data.destinations.map((item, id) => (
                                <li onClick={()=>setFilter(item.name)} key={id}>{item.name}</li>                    
                            ))}
                        </ul>
                        <div className="flex flex-col gap-6 w-1/2">
                            <h2 className="capitalize">{filter}</h2>
                            <p>{data.destinations.find(d => d.name === filter)?.description}</p>
                            <hr className="w-full border-2 border-white"/>
                            <div className="flex">
                                <div className="flex flex-col">
                                    <h2>Avg.Distance</h2>
                                    <span>{data.destinations.find(d => d.name === filter)?.distance}</span>
                                </div>
                                <div className="flex flex-col">
                                    <h2>Est. Travel Time</h2>
                                    <span>{data.destinations.find(d => d.name === filter)?.travel}</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                
            </div>



            


        </div>
    )
}