"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function Navbar() {
  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: "/", label: "00 Home" },
    { href: "/destination", label: "01 Destination" },
    { href: "/crew", label: "02 Crew" },
    { href: "/technology", label: "03 Technology" },
  ]

  return (
    <header className="fixed top-10 left-0 w-full flex items-center justify-between z-50 px-10 md:pl-10">
      <Link href="/">
        <Image
          src="/shared/logo.svg"
          alt="logo"
          width={48}
          height={48}
          className="relative z-20"
        />
      </Link>

      <div className="relative hidden  md:flex items-center flex-1">
        <hr className="absolute hidden lg:block top-1/2 right-185 w-[50%] border-t border-white/20 z-20" />
        <nav className="md:px-20 lg:px-50 py-10 relative z-10 backdrop-blur-lg bg-background/10 ml-auto pr-20">
          <ul className="flex gap-12 text-[18px] uppercase tracking-widest text-white font-barlowcondensed">
            {links.map(({ href, label }) => {
              const isActive = pathname === href
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`pb-10 transition-colors ${
                      isActive ? "border-b-4 border-white" : "border-b-4 border-transparent hover:border-white/50"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      <div>
        <Image
          src="/shared/icon-hamburger.svg"
          alt="logo"
          width={30}
          height={30}
          onClick={()=>setIsOpen(!isOpen)}
          className="relative z-50 cursor-pointer md:hidden"
        />

       {isOpen && (
        <div className="fixed top-0 right-0 z-50 w-3/4 h-screen bg-background/10 backdrop-blur-xl flex flex-col p-8">        
          
          <Image
            src="/shared/icon-close.svg"
            alt="close"
            width={24}
            height={24}
            onClick={() => setIsOpen(!isOpen)}
            className="absolute top-12 right-10 cursor-pointer"
          />

          
          <ul className="mt-28 flex flex-col gap-8 uppercase tracking-widest text-white text-lg font-barlow">
            {links.map(({ href, label }, index) => {
              const isActive = pathname === href;
              return (
                <li key={href} className="flex items-center gap-4">                  
                  <Link
                    href={href}
                    onClick={()=>setIsOpen(false)}
                    className={`pb-1 transition-colors border-b-2 ${
                      isActive
                        ? "border-white text-white"
                        : "border-transparent hover:border-white/50"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
    </ul>
  </div>
)}

      </div>
    </header>
  )
}
