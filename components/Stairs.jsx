import { animate,motion } from "framer-motion"

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%"
  },
  exit: {
    top: ["100%","0%"],
  },
}
const Stairs = () => {
  const reverseindex = (index) => {
    const totalindex = 6;
    return totalindex - index - 1;
  }
  return (
    <>
    {[...Array(6)].map((_,index) => {
      return (
      <motion.div
      key={index}
      variants={stairAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: 0.4,
        ease:'easeInOut',
        delay: reverseindex(index)*0.1
      }}
      className=" h-full w-full relative pointer-events-none bg-white"
      />);
    } )}
    </>
  )
}

export default Stairs