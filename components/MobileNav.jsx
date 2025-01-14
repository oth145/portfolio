"use client";
import { usePathname } from "next/navigation";
import { Sheet , SheetTrigger , SheetContent } from "./ui/sheet";
// import { usePathname } from "next/navigation";
import {CiMenuFries} from "react-icons/ci"
import Link from "next/link";


const links = [
  {
    name: "Home",
    path: "/"
  },{
    name: "Services",
    path: "/services"
  },
  {
    name: "Resume",
    path: "/resume"
  },
  {
    name: "Work",
    path: "/work"
  },{
    name: "Contact",
    path: "/contact"
  }
]
const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-accent text-[32px]" />
      </SheetTrigger>
      <SheetContent className="flex flex-col ">
        <div className=" mt-32 mb-32 text-center">
          <Link href="/">
          <h1 className=" text-4xl font-semibold">Othmane<span className="text-accent">.</span></h1>
          </Link>
          </div>
        <nav className="flex flex-col justify-center items-center gap-8">   
          {
            links.map((link,index) => {
              return <Link key={index} href={link.path} className={` transition-all hover:text-accent  text-xl capitalize ${pathname === link.path && 'text-accent border-accent border-b-2'}`}>
              {link.name}
              </Link>
            })
          }
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav