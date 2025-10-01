"use client";
import Image from "next/image";
import { useState } from "react";
import data from "@/app/data.json";
import Headline from "../components/Headline";



export default function DestinationPage() {
  const [filter, setFilter] = useState("Moon");

  return (
    <div
      className="bg-[url(/destination/background-destination-mobile.jpg)] md:bg-[url(/destination/background-destination-tablet.jpg)]
                        lg:bg-[url(/destination/background-destination-desktop.jpg)] bg-cover
                        w-full lg:h-screen overflow-hidden flex text-white"
    >
      <div className="flex flex-col items-center  md:items-start">

        <Headline number="01" content="Pick your destination" />
        
        <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
          <div className="lg:w-1/2 p-10 lg:p-20 ">
            <Image
              src={`/destination/image-${filter}.png`}
              width={500}
              height={500}
              alt={`${filter}`}
              className="lg:ml-[15%] w-40 h-40 md:w-80 md:h-80 lg:w-120 lg:h-120"
            />
          </div>
          <div className="lg:w-1/2 md:p-10">
            <ul className="flex gap-8 justify-center lg:justify-start">
              {data.destinations.map((item, id) => (
                <li
                  className={`uppercase text-primary font-barlow cursor-pointer pb-2 hover:text-white hover:border-b-4 hover:border-gray-500 
                                                ${
                                                  filter == item.name &&
                                                  "border-b-4 text-white border-white"
                                                }`}
                  onClick={() => setFilter(item.name)}
                  key={id}
                >
                  {item.name}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-6 lg:w-4/5 text-center lg:text-left px-2 md:px-0 lg:pr-[20%]">
              <h2 className="uppercase text-[70px] md:text-[100px] font-bellefair pt-6 md:pt-0">
                {filter}
              </h2>
              <p className="font-barlow text-gray-400 md:text-primary px-4 lg:px-0 text-[18px]">
                {data.destinations.find((d) => d.name === filter)?.description}
              </p>
              <hr className="w-[90%] mx-auto md:w-full border-0.5 border-primary/50" />
              <div className="flex flex-col md:flex-row uppercase md:justify-between lg:justify-start gap-6 md:gap-12 items-center px-10 lg:px-0 ">
                <div className="flex flex-col items-center md:items-start">
                  <h4 className="text-primary text-[16px] font-barlowcondensed tracking-[2px]">
                    Avg.Distance
                  </h4>
                  <span className="text-[28px] font-bellefair">
                    {data.destinations.find((d) => d.name === filter)?.distance}
                  </span>
                </div>
                <div className="flex flex-col items-center md:items-start pb-6 md:pb-0">
                  <h4 className="text-primary text-[16px] font-barlowcondensed tracking-[2px]">
                    Est. Travel Time
                  </h4>
                  <span className="text-[28px] font-bellefair">
                    {data.destinations.find((d) => d.name === filter)?.travel}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
