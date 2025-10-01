"use client";
import Image from "next/image";
import { useState } from "react";
import Headline from "../components/Headline";
import data from "@/app/data.json";

export default function TechnologyPage() {
  const [filter, setFilter] = useState(0);

  return (
    <div
      className="bg-[url(/technology/background-technology-mobile.jpg)] 
                        md:bg-[url(/technology/background-technology-tablet.jpg)]
                        lg:bg-[url(/technology/background-technology-desktop.jpg)] 
                        w-full bg-cover text-white lg:h-screen overflow-hidden"
    >
      <Headline number="03" content="Space Launch 101"/>

      <div className="flex flex-col-reverse lg:flex-row w-full py-6 lg:py-0">
        <div className="lg:w-1/2 flex items-center justify-center lg:my-15 lg:ml-[15%] py-6 lg:py-0">
          <div className="flex flex-col items-center lg:flex-row gap-6 lg:gap-20 lg:w-full">
            <ol className="flex lg:flex-col gap-4 lg:gap-10 font-bellefair ">
              {[0, 1, 2].map((i) => (
                <li
                  key={i}
                  onClick={() => setFilter(i)}
                  className={`w-12 md:w-16 h-12 md:h-16 flex items-center hover:border-2 hover:border-white justify-center rounded-full cursor-pointer transition-colors
                                        ${
                                          filter === i
                                            ? "bg-white text-black"
                                            : "text-white border border-gray-500"
                                        }`}
                >
                  {i + 1}
                </li>
              ))}
            </ol>

            <div className="flex items-center justify-center lg:items-start flex-col gap-4 max-w-xl">
              <p className="text-[22px] -mb-2 text-gray-500 font-bellefair uppercase tracking-widest">
                The Terminology...
              </p>
              <h3 className="text-[32px] md:text-[56px] font-bellefair uppercase">
                {data.technology[filter].name}
              </h3>
              <p className="text-[18px] font-barlow text-primary text-center lg:text-left lg:leading-relaxed min-h-[200px] p-4">
                {data.technology[filter].description}
              </p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 flex lg:justify-end justify-center">
          <Image
            src={data.technology[filter].images.portrait}
            width={650}
            height={200}
            alt={data.technology[filter].name}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
