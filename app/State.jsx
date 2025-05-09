"use client";
import CountUp from 'react-countup';

const stats = [
  {number: 12, text: "dpqdkeaopd aeopdk aopdk"},
  {number: 8, text: "cmez eafeofkop adae"},
  {number: 6, text: "fzoekfop  epfkzop"},
  {number: 500, text: "zfkqef  dad uoigtiugt"},
]
const State = () => {
  return (
    <section>
      <div className='container mx-auto'>
      <div className='flex flex-wrap gap-6 max-w-[100vw]  sm:max-w-[80vw] mx-auto xl:max-w-none'>
        {stats.map((stat,index) => {
          return (<div key={index} 
          className="flex-1 flex gap-4 items-center  justify-center xl:justify-start"
          >
            <CountUp
            end={stat.number}
            duration={5}
            delay={2}
            className="text-4xl xl:text-6xl font-extrabold"
            />
            <p className={`${stat.text.length < 15 ? 'max-w-[50px]' : 'max-w-[150px]'} leading-snug text-white/80`}>{stat.text}</p>
          </div>)
        })}
      </div>
      </div>
    </section>
  )
}

export default State