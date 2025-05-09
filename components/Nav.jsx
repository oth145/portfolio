"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  }
  ,
  {
    name: "Work Wordpress",
    path: "/workWordpress"
  },{
    name: "Contact",
    path: "/contact"
  }
]
const Nav = ({className}) => {
  const pathname = usePathname();
  return (
    <nav className={` flex  gap-8 ${className}`}>
      {links.map((link, index) => {
        return <Link className={`${pathname == link.path && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`} href={link.path} key={index}>
          {link.name}
        </Link>
      })}
    </nav>
  )
}

export default Nav