"use client";
import {FaHtml5, FaCss3,FaJs,FaReact,FaFigma,FaNodeJs} from 'react-icons/fa';
import badge from "@/public/resume/badge.svg";
import cap from "@/public/resume/cap.svg";

import {SiTailwindcss, SiBootstrap} from 'react-icons/si'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';


//about data

const about = {
  title: "About me",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, necessitatibus perferendis sint consequuntur neque non odio impedit quidem.",
  info: [
    {
      filedName: "Name",
      filedValue: "Othmane Boukhris"
    },{
      filedName: "Phone",
      filedValue: "06 33 32 44 15"
    },{
      filedName: "Exerience",
      filedValue: "2+ Years"
    },{
      filedName: "linkdin",
      filedValue: "othmaneBoukhris"
    },{
      filedName: "Nationality",
      filedValue: "Morocco"
    },{
      filedName: "Email",
      filedValue: "oboukhris145@gmail.com"
    },{
      filedName: "Freelance",
      filedValue: "Available"
    },{
      filedName: "languges",
      filedValue: "English,French,Arabic"
    }
  ]
}
// experience data

const experince = {
  icon: badge,
  title: "my expericene",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, necessitatibus perferendis sint consequuntur neque non odio impedit quidem",
  items: [
    {
      company: "Tech Solutions Inc.",
      position: "Full Stack Developer",
      duration: "2022 - present",
    },{
      company: "Web Design Studio",
      position: "Front-End Developper Intern",
      duration: "Summer 2021",
    },{
      company: "E-commerce Startup",
      position: "Freelance web Developer",
      duration: "2020 - 2021",
    },{
      company: "Tech Academy",
      position: "Teaching Assistant",
      duration: "2019 - 2020",
    },,{
      company: "Tech Academy",
      position: "Teaching Assistant",
      duration: "2018 - 2019",
    },,{
      company: "Tech Academy",
      position: "Teaching Assistant",
      duration: "2017 - 2018",
    },
  ]
}

// education data
const eductation = {
  icon: cap,
  title: "my eductaion",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, necessitatibus perferendis sint consequuntur neque non odio impedit quidem",
  items: [
    {
      company: "Tech Solutions Inc.",
      position: "Full Stack Developer",
      duration: "2022 - present",
    },{
      company: "Web Design Studio",
      position: "Front-End Developper Intern",
      duration: "Summer 2021",
    },{
      company: "E-commerce Startup",
      position: "Freelance web Developer",
      duration: "2020 - 2021",
    },{
      company: "Tech Academy",
      position: "Teaching Assistant",
      duration: "2019 - 2020",
    },,{
      company: "Tech Academy",
      position: "Teaching Assistant",
      duration: "2018 - 2019",
    },,{
      company: "Tech Academy",
      position: "Teaching Assistant",
      duration: "2017 - 2018",
    },
  ]
}

//skills data
const skills = {
  title: "my skills",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, necessitatibus perferendis sint consequuntur neque non odio impedit quidem",
  skillList : [
    {
      icon: <FaHtml5 />,
      name: "html-5"
    },{
      icon: <FaCss3 />,
      name: "Css"
    },{
      icon: <FaCss3 />,
      name: "Css"
    },{
      icon: <FaJs />,
      name: "Javascripte"
    },{
      icon: <FaReact />,
      name: "React"
    },,{
      icon: <FaNodeJs />,
      name: "NodeJs"
    },,{
      icon: <SiTailwindcss />,
      name: "Tailwindcss"
    },,{
      icon: <SiBootstrap />,
      name: "Bootstrap"
    },
  ]
  
}

const Resume = () => {
  return (
    <motion.div
    initial = {{opacity: 0}}
    animate = {{
      opacity: 1,
      transition: {delay: 2.4, duration: 0.4 , ease: "easeIn"}
    }}
    className=' min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className=' container mx-auto'>
        <Tabs className="flex flex-col xl:flex-row gap-[60px]" defaultValue='experience'>
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="eductation">Eductation</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className=' min-h-[70vh] w-full'>
            <TabsContent value="experience" className="w-full">
            <div className='flex flex-col gap-[30px]
            text-center xl:text-left
            '>
              <h3 className='text-4xl font-bold'>{experince.title}</h3>
              <p className='max-w-[600px] mx-auto text-white/60 xl:mx-0'>
                {experince.description}
              </p>
              <ScrollArea className="h-[400px]">
              <ul className=' grid grid-cols-1 xl:grid-cols-2 gap-[30px]'>
                {experince.items.map((item,index) => {
                  return (
                    <li key={index} className=' bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center
                    lg:items-start gap-1
                    '>
                      <span className='text-accent'>{item.duration}</span>
                      <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                      <div className='flex items-center gap-3'>
                        <span className='h-[6px] w-[6px] rounded-full bg-accent'></span>
                        <p className='text-white/60'>{item.company}</p>
                      </div>
                    </li>
                  )
                })}
              </ul>
              </ScrollArea>
            </div>
            </TabsContent>
            <TabsContent value="eductation" className="w-full">
            <div className='flex flex-col gap-[30px]
            text-center xl:text-left
            '>
              <h3 className='text-4xl font-bold'>{eductation.title}</h3>
              <p className='max-w-[600px] mx-auto text-white/60 xl:mx-0'>
                {eductation.description}
              </p>
              <ScrollArea className="h-[400px]">
              <ul className=' grid grid-cols-1 xl:grid-cols-2 gap-[30px]'>
                {eductation.items.map((item,index) => {
                  return (
                    <li key={index} className=' bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center
                    lg:items-start gap-1
                    '>
                      <span className='text-accent'>{item.duration}</span>
                      <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                      <div className='flex items-center gap-3'>
                        <span className='h-[6px] w-[6px] rounded-full bg-accent'></span>
                        <p className='text-white/60'>{item.company}</p>
                      </div>
                    </li>
                  )
                })}
              </ul>
              </ScrollArea>
            </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
            <div className='flex flex-col gap-[30px]'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{skills.title}</h3>
                <p className=' text-white/60 max-w-[600px]
                mx-auto xl:mx-0
                '>{skills.description}</p>
              </div>
              <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4'>
                {skills.skillList.map((skill,index) => {
                  return (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                            <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className=' capitalize'>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  )
                })}
              </ul>
            </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
            <div className='flex flex-col gap-[30px]'>
              <h3 className='text-4xl font-bold'> {about.title}</h3>
              <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 '>{about.description}</p>
              <ul className=' grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                {about.info.map((item,index) => {
                  return (
                    <li key={index} className=' flex items-center justify-center xl:justify-start gap-4'>
                      <span className='text-white/60'>{item.filedName}</span>
                      <span className='text-xl'>{item.filedValue}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
            </TabsContent>
          </div>
        </Tabs>

      </div>
      
    </motion.div>
  )
}

export default Resume