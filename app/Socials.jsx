import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaTwitter,FaGithub,FaYoutube,FaLinkedinIn  } from "react-icons/fa";

const links = [
  {icons:<FaTwitter />,
  name: "Twitter",
  path: "/"
  },
  {icons: <FaGithub />,
    name: "Github",
    path: "/"
    },
{
  icons: <FaYoutube />,
      name: "Youtube",
      path: "/"
      }
,{
  icons: <FaLinkedinIn />,
        name: "Linkdin",
        path: "/"
        } 
]
const Socials = ({containerStyle,iconStyle}) => {
  
  return (
    <div className={containerStyle}>
      {
        links.map((link,index) => {
          return <Link href={link.path} key={index} className={iconStyle}>
            {link.icons}
          </Link>
        })
      }
    </div>
  )
}

export default Socials