import Image from "next/image";
import pic from "../../../public/mypic.jpeg";

import { Caveat } from "next/font/google";


const caveat = Caveat({
    subsets:['latin'],
  })

const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto flex justify-center mt-52">
        <div className="w-[70rem] h-96 flex shadow-lg rounded-lg bg-gray-100 dark:bg-black">
            <div className="left-side w-[40%] flex items-center justify-center">
                <div className="w-[80%] h-[90%] rounded-full">
                <Image src={pic} alt="picture" className="object-cover w-full h-full rounded-full"/>
                </div>
            </div>
            <div className="right-side w-[60%] flex flex-col gap-6">
                <div className="flex flex-col items-center mt-14">
                    <h1 className="text-3xl font-bold text-blue-500">
                        About me!
                    </h1> 
                    <h1 className="text-blue-500 underline ">
                        <i className={`${caveat.className} text-xl`}> Frontend Developer </i> 
                    </h1>
                </div>
                <p className={`mx-12 ${caveat.className} text-xl leading-10 text-blue-500`}>
                 I&apos;m a frontend Developer. Currently learning latest frameorks and technologies and also learning backend in GIAIC. I&apos;m also eager to command in Python and laran Artificial Intelligence in next level and eager to create an exciting models that will be helpful for everyone. My goal is to bring Artficial Intelligence in Health Care sector.    
                </p>
            </div>
        </div>
    </div>
  )
}

export default AboutPage