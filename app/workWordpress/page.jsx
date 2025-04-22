"use client";
import { Tooltip, TooltipContent,TooltipProvider,TooltipTrigger } from "@/components/ui/tooltip";
import {motion} from "framer-motion"
import React , { useState } from "react";
import {BsArrowUpLeft, BsArrowUpRight, BsGithub } from "react-icons/bs";
import {Swiper , SwiperSlide} from "swiper/react";
import "swiper/css";
import Link from "next/link";
import Image from "next/image";
import img1 from "@/public/workwordpress/thumb1.png"
import img2 from "@/public/workwordpress/thumb2.png"
import img3 from "@/public/workwordpress/thumb3.png"
import WorkSliderBtn from "@/components/ui/WorkSliderBtn";

const projects = [
  {
    num : "01",
    category: "fbarchitecture",
    title: "fbarchitecture",
    description: "FB Architectureas a digital portfolio, highlighting architectural projects, design philosophy, and professional services. Responsive Design Project Showcase Developed and customized the WordPress theme to align with the brand's identity",
    stack: [{name: "Elementor"},{name: "Frisk"},{name:"Advance custom fields"},{name:"Rank Math SEO"}],
      image: img1,
      github: '',
      live:"https://fbarchitecture.ma/"
  },
  {
    num : "02",
    category: "Namodec ",
    title: "Namodec ",
    description: "Namodec est une entreprise marocaine innovante spécialisée dans les transactions immobilières, l'architecture d'intérieur et la réalisation de travaux d'aménagement clé en main",
    stack: [{name: "TF real state"},{name: "homedec"},{name:"Elementor"}],
      image: img2,
      github: '',
      live:"https://namodec.com/"
  },
  {
    num : "03",
    category: "restaurant",
    title: "restaurant",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, animi eum. Quaerat, quidem alias fugiat labore recus",
    stack: [{name: "Elementor pro"},{name: "code snippets"},],
      image: img3,
      github: '',
      live:""
  },
]


const WorkWordpress = () => {
  const [project, setproject] = useState(projects[0])

  const handleSlideChange = (swiper) => {
    const currentSlide = swiper.activeIndex 
    setproject(projects[currentSlide])
  }
  return (
    <motion.section
    initial= {{opacity:0}} animate={{opacity: 1 , transition: {delay:2.4, duration:0.4, ease:"easeIn"}}}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className=" flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px]
          flex flex-col xl:justify-between order-2 xl:order-none
          ">
            <div className=" flex flex-col gap-[30px] h-[50%] ">
              <div className="group">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline
              group-hover:text-outline-hover">{project.num}</div>
              <h2 className=" text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} </h2> </div>
              <p className="text-white/60"> {project.description}</p>
              <ul className=" flex gap-4">
              {
                project.stack.map((item,index) => {
                  return <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length-1 && ","}
                  </li>
                })
              }
              </ul>
              <div className=" border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="rounded-full w-[70px] h-[70px] bg-white/5 flex items-center justify-center group">
                      <BsArrowUpRight className="text-3xl group-hover:text-accent text-white"/>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>
                <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="rounded-full w-[70px] h-[70px] bg-white/5 flex items-center justify-center group">
                      <BsGithub className="text-3xl group-hover:text-accent text-white"/>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
            spaceBetween={30}
            slidesPerView={1}
            className="xl:h-[520px] mb-12 "
            onSlideChange={handleSlideChange}
            >
              {projects.map((project,index) => {
                return <SwiperSlide key={index}>
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 left-0 bg-black/10 w-full h-full z-10">
                    </div>
                    <div className="h-full w-full relative">
                      <Image src={project.image} fill alt="" className="object-cover " />
                    </div>
                  </div>
                </SwiperSlide>
              })}
              <WorkSliderBtn containerStyles="flex gap-2
              absolute right-0 bottom-[calc(50%_-_22px)] justify-between w-full z-20 xl:bottom-0 xl:justify-none xl:w-max 
              "
               btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" 
               iconsStyles />
            </Swiper>
          </div>
        </div>
      </div>
      <div className=" flex  inset-y-0  relative top-1/2"></div>
      </motion.section>
  )
}

export default WorkWordpress