
"use client"

import Image from "next/image";
import {useState} from "react"

import data from "@/app/data.json"

import Headline from "../components/Headline";


export default function CrewPage(){
    const [filter, setFilter] = useState(0)
    return (
        <div className="bg-[url(/crew/background-crew-mobile.jpg)] md:bg-[url(/crew/background-crew-tablet.jpg)]
                        lg:bg-[url(/crew/background-crew-desktop.jpg)] bg-cover
                        w-full min-h-screen flex text-white"> 
            <div className="flex flex-col">
                <Headline/>
                <div className="flex">
                    <div className="w-1/2">
                        <div className="flex flex-col">
                            <p>{data.crew[filter].role}</p>
                            <h1>{data.crew[filter].name}</h1>
                            <p>{data.crew[filter].bio}</p>


                        </div>
                    </div>

                    <div className="w-1/2">
                        <Image
                            src={`${data.crew[filter].images.png}`}
                            alt={`${data.crew[filter].name}`}
                            width={500}
                            height={400}

                        />
                    </div>
                </div>

            </div>

        </div>
    )
}