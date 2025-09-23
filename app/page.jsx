// import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MdOutlineFileDownload } from "react-icons/md";
import Socials from "./Socials";
import { Phone } from "lucide-react";
import Photo from "@/components/Photo";
import State from "./State";

export default function Home() {
  return (
    <section className="h-full">
      <div className=" container h-full mx-auto">
      <div className="flex flex-col justify-between items-center xl:flex-row xl:pt-0 xl:pb-10">
      <div className=" order-2 xl:order-none text-center xl:text-left">
        <span className="text-xl">Full Stack Devoloper</span>
        <h1 className="text-4xl mb-6">
          Hello I&apos;m <br /> <span className="text-accent">Othmane Boukhris</span>
        </h1>
        <p className=" max-w-[500px] mb-9 text-white/80">
 I am a passionate full-stack web developer with experience in WordPress, Shopify, and modern web technologies. I enjoy creating clean, user-friendly websites that not only look great but also provide seamless experiences for users. Constantly learning and exploring new tools, I strive to bring innovative ideas to life while helping businesses grow online.        </p>
        {/* btn and socials */}
        <div className="flex flex-col items-center gap-8 xl:flex-row xl:gap-14">
          <a href="/resume/cv.pdf" download>
          <Button variant="outline" siz="lg" className="flex items-center justify-between uppercase gap-1" >
              <span>Download CV</span>              <MdOutlineFileDownload className=" text-xl" />
          </Button>
          </a>
          <div className="mb-8 xl:mb-0">
          <Socials containerStyle="flex gap-6" iconStyle=" w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent hover:bg-accent hover:text-primary hover:transtion-all duration-500" />
          </div>
        </div>
      </div>
      <div className="order-1 mb-8 xl:mb-0 xl:order-none"> 
      <Photo />
      </div>    
      </div>
      <State /> 
      </div>
    </section>
  );
}
