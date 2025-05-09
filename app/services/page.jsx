"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import {BsArrowDownRight} from "react-icons/bs"

const services = [
  {num: "01", title:"web Development"  ,description:"Lorem ipsum dolor sit amet, consectetur ratione voluptatem et quasi recusandae sunt.", href: ""}
  ,{num: '02', title:"UX/UI desgine"  ,description:"Lorem ipsum dolor sit amet, consectetur ratione voluptatem et quasi recusandae sunt.", href: ""}
  ,{num: '03', title:"Backend"  ,description:"Lorem ipsum dolor sit amet, consectetur ratione voluptatem et quasi recusandae sunt.", href: ""}
  ,{num: '04', title:"Wordpress"  ,description:"Lorem ipsum dolor sit amet, consectetur ratione voluptatem et quasi recusandae sunt.", href: ""},
]

const Services = () => {
  return (
    <section className=' min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <motion.div
        initial= {{ opacity:0 }}
        animate= {{
          opacity:1,
          transition: { delay:2.4, duration:0.4, ease: "easeIn" }
        }}
        >
          <div className="grid grid-cols-1 gap-[60px]  md:grid-cols-2">
          {
            services.map((service,index) => {
              return(
                <div key={index} className="flex flex-1 flex-col justify-center gap-6 group">
                  <div className="w-full flex justify-between items-center">
                    <div className="text-5xl font-extrabold
                    text-transparent text-outline  group-hover:text-outline-hover transition-all duration-500
                    "> {service.num}</div>
                    <Link href={service.href}
                      className=" w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                      >
                    <BsArrowDownRight className=" text-primary text-3xl" />
                    </Link>
                  </div>
                  <h2 className=" text-white text-[42px] font-bold leading-none group-hover:text-accent transition-all duration-500">{service.title}</h2>
                  <p className="text-white/60">{service.description}</p>
                  <div className=" border-b border-white/20 w-full"></div>
                 </div>
              )
            })
          }
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services