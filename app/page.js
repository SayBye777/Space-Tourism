import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[url(/home/background-home-mobile.jpg)] md:bg-[url(/home/background-home-tablet.jpg)]
                    lg:bg-[url(/home/background-home-desktop.jpg)] bg-cover
                    w-full min-h-screen flex justify-center items-center text-white">
      <div className="flex flex-col">
        <h2 className="uppercase">So, You Want to Travel to</h2>
        <h1 className="uppercase">Space</h1>
        <p> Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience! Explore </p>
      </div>
    </div>
  );
}
