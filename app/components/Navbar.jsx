import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
    <header className="fixed top-10 left-0 w-full flex items-center justify-between z-50 pl-10">
        <Link href="/">
            <Image
                src="/shared/logo.svg"
                alt="logo"
                width={48}
                height={48}
                className="relative z-20"
            />
        </Link>

      
      <div className="relative flex items-center flex-1">
        
        <hr className="absolute top-1/2 right-165 w-[62%] border-t border-white/20 z-20" />

        
        <nav className="pl-12 py-6 relative z-10 backdrop-blur-xl bg-background/5 ml-auto pr-20">
          <ul className="flex gap-8 uppercase tracking-widest text-white">
            <li><Link href="/">00 Home</Link></li>
            <li><Link href="/destination">01 Destination</Link></li>
            <li><Link href="/crew">02 Crew</Link></li>
            <li><Link href="/technology">03 Technology</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
