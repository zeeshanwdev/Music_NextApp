"use client"
import courseData from "@/data/music_courses.json"
import Link from "next/link"
import { BackgroundGradient } from "./ui/background-gradient"



interface CourseDataType{                                                                                     //Create Own Variable DataType Using TypeScript
        id: number,
        title: string,
        slug: string,
        description: string,
        price: number,
        instructor: string,
        isFeatured: boolean,
}

function FeatureCourses() {

  const freaturedCourses= courseData.courses.filter((course:CourseDataType) => course.isFeatured)            //Define DataType for "course" data


  return (
    <div className="py-12 bg-gray-900">

      <div className="mx-auto w-4/5">

      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURE COURSES</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With The Best</p>
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {freaturedCourses.map((course:CourseDataType)=>(
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-zinc-900 overflow-hidden h-full max-w-sm ">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-neutral-200 mt-4 mb-2">{course.title}</p>
                  <p className="text-sm text-neutral-400 flex-grow mb-4">{course.description}</p>
                  {/* <Link href={`/courses/${course.slug}`}>Learn More</Link> */}
                  <Link href={`/courses`}>Learn More</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="mt-20 text-center">
        <Link href={'/courses'} className="inline-block w-auto text-center min-w-[180px] px-1 py-4  transition-all  bg-white text-gray-800 rounded-md shadow-xl sm:w-auto hover:bg-gray-900 hover:text-white shadow-neutral-700 hover:shadow-2xl hover:shadow-neutral-400 hover:-tranneutral-y-px">View All Courses</Link>
      </div> */}

{/* Another Button */}
    <div className="mt-15 text-center">
    <div className="relative inline-flex group">
        <div
            className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
        </div>
        <Link href={'/courses'}
            className="relative inline-flex items-center justify-center px-6 py-5 font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button">View All Courses
        </Link>
    </div>
    </div>


      </div>

    </div>
  )
}

export default FeatureCourses


