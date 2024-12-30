import Image from "next/image";
import heroimg from "../../../public/rb_2148653963.png";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Caveat } from "next/font/google";


const caveat = Caveat({
    subsets:['latin'],
  })

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row mt-16 items-center">
      <div className="left-side md:w-[50%] flex flex-col justify-center leading-6 gap-4 md:ml-10 lg:ml-10 xl-0 dark:text-slate-400">
      <h1 className={`font-roboto font-bold text-7xl ${caveat.className}`}>Welcome!</h1>
      <p className={`font-bold text-7xl w-[18rem] lg:w-full leading-[60px] ${caveat.className} `}>To The Blog Website</p>
      <div className="flex flex-col items-start gap-8">
      <p className={`w-[300px] md:w-[76%] font-roboto font-medium text-xl ${caveat.className}`}>Here&apos;s you can find an amazing vlogs related to latest technologies and programming.</p>
      <Link href="/blogs">
      <button className={`px-4 py-3 bg-red-300 rounded-lg hover:bg-red-400 flex gap-2 ${caveat.className}`}>
        See The Latest Blogs
        <span>
            <ArrowRight/>
        </span>
      </button>
      </Link> 
      </div>
      </div>
      <div className="right-side md:w-[50%]">
        {/* <Image src={homeImage} alt="homeImage"/> */}
        <Image src={heroimg} alt="heroimg"/>
      </div>
    </div>
  )
}

export default Hero