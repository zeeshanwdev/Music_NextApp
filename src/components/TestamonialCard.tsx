"use client";
 
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "@/lib/utils";

const musicSchoolTestamonials = [
    {
      quote: "Joining the music school transformed my understanding of music. The instructors are incredibly talented and supportive, always ensuring that each student receives personalized guidance. I have improved my guitar skills far beyond what I expected, and I now feel confident playing in front of an audience.",
      name: "Alex Hormozi",
      title: "Guitar Student"
    },
    {
      quote: "I never thought I could play the piano so well in just a few months. The lessons are structured and easy to follow, and the instructors truly care about our progress. Thanks to their encouragement and expertise, I can now read sheet music and play my favorite songs effortlessly.",
      name: "Emily Carter",
      title: "Piano Student"
    },
    {
      quote: "The vocal training here is top-notch! My confidence and singing skills have improved tremendously, and I’ve learned techniques I never knew existed. The teachers help us master breath control, pitch, and tone, making sure we reach our full potential as vocalists.",
      name: "James Peterson",
      title: "Vocal Student"
    },
    {
      quote: "From beginner to advanced drumming techniques, this school has helped me every step of the way. The hands-on training, combined with in-depth theory lessons, has given me a strong foundation. I’ve even started playing in a band, something I never thought I’d be able to do.",
      name: "Michael Chen",
      title: "Drum Student"
    },
    {
      quote: "I love how personalized the lessons are. The teachers really focus on making sure you progress at your own pace while still challenging you to improve. Learning the violin has been an incredible experience, and I now feel capable of playing complex pieces with confidence.",
      name: "Sophia Martinez",
      title: "Violin Student"
    }
  ]
  


function MusicSchoolTestamonial() {
  return (
    <div className="h-[40rem] w-full bg-black bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        
        <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear Our Harmony: Voices Of Success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
                <InfiniteMovingCards
                 items={musicSchoolTestamonials}
                 direction="right"
                 speed="normal"
                />
            </div>
        </div>
    </div>
  )
}

export default MusicSchoolTestamonial
