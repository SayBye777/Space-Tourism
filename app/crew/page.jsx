"use client"

import Image from "next/image";
import { useState } from "react";

import data from "@/app/data.json";
import Headline from "../components/Headline";

export default function CrewPage() {
  const [filter, setFilter] = useState(0);

  return (
    <div
      className="bg-[url(/crew/background-crew-mobile.jpg)] md:bg-[url(/crew/background-crew-tablet.jpg)]
                 lg:bg-[url(/crew/background-crew-desktop.jpg)] bg-cover 
                 w-full lg:h-screen flex flex-col text-white overflow-hidden"
    >
      
      <Headline number="02" content="Meet Your Crew" />

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full lg:mt-10 lg:h-full">
        
        <div className="flex flex-col gap-2 lg:gap-6 w-full lg:w-1/2 lg:ml-[15%] text-center lg:text-left min-h-[300px] px-2 lg:px-0">
          <p className="text-[20px] lg:text-[32px] font-bellefair uppercase text-gray-400">
            {data.crew[filter].role}
          </p>
          <h3 className="text-[30px] lg:text-[56px] font-bellefair uppercase lg:max-w-2xl">
            {data.crew[filter].name}
          </h3>
          <p className="text-[16px] lg:text-[18px] font-barlow text-primary lg:max-w-2xl">
            {data.crew[filter].bio}
          </p>

         
          <div className="flex gap-4 lg:gap-6 justify-center lg:justify-start mt-8">
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                onClick={() => setFilter(i)}
                className={`w-3 h-3 md:w-5 md:h-5 rounded-full cursor-pointer transition-colors ${
                  filter === i ? "bg-white" : "bg-gray-600 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        
        <div className="flex justify-end items-end w-full lg:w-1/2">
          <Image
            src={data.crew[filter].images.png}
            alt={data.crew[filter].name}
            width={500}
            height={500}
            className="object-contain w-60 h-90 lg:w-150 lg:h-170"
          />
        </div>
      </div>
    </div>
  );
}
