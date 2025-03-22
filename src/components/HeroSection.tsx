import Link from "next/link"
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      {/* SpotLight  Link:https://ui.aceternity.com/components/spotlight*/}
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />

      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Master The Art of Music</h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">Dive into our comprehensive music course and transform your musical journey today. Whether you&apos;re Beginner or looking to refine your skills, Join us to unlock your true potential.</p>
        <div className="mt-10">
        <Link href="/courses" passHref>
            <Button borderRadius="1.75rem" className="bg-black text-white border-slate-800 hover:cursor-pointer border hover:bg-[#1a1a1a]">  {/*deep blue:#001f3f */}
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
