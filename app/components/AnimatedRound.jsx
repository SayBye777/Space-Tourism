import Link from "next/link"

export default function AnimatedRound(){
    return(
        <div className="w-[320px] h-[320px] md:w-[420px] md:h-[420px] hover:bg-primary/10 transition delay-150 rounded-full flex items-center justify-center">
            <Link href="/destination">
                <p className="w-[144px] md:w-[272px] h-[144px] md:h-[272px] bg-white rounded-full flex items-center justify-center uppercase
                     text-black cursor-pointer font-bellefair text-[28px]"> Explore </p>
            </Link>
        </div>
    )
}