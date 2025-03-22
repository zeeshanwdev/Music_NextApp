"use client"

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import courseData from "@/data/music_courses.json"

function page() {
  return (
    <div className="min-h-screen bg-black py-12 pt-40">
      <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">All Courses ({courseData.courses.length})</h1>
      <div className="flex flex-wrap justify-center">

        {courseData.courses.map((course)=> (
          <CardContainer key={course.id} className="inter-var m-4">
          <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem translateZ="50" className="text-xl font-bold text-white">
              {course.title}
            </CardItem>
            <CardItem as="p" translateZ="60" className="text-sm max-w-sm mt-2 text-neutral-300">
              {course.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image src={course.image} height="1000" width="1000" className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl" alt={course.title}
/>
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://twitter.com/mannupaaji"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal text-white hover:text-gray-400"
              >
                Try now →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold hover:cursor-pointer hover:bg-gray-400"
              >
                Sign up
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        ))}

      </div>
    </div>
  )
}

export default page
