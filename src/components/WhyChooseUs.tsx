"use client";
import React from "react";
import { StickyScroll } from "./ui/stickyScrollReveal";
import Image from "next/image";

const musicSchoolContent = [
    {
      title: "Foundations of Music Theory",
      description:
        "This course provides a comprehensive introduction to music theory, covering essential topics such as notation, scales, intervals, chords, and rhythm. Students will develop a solid understanding of how music is structured and gain practical skills to read and write sheet music.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
          Foundations of Music Theory
        </div>
      ),
    },
    {
        title: "Vocal Training and Performance",
        description:
          "This course is tailored for aspiring singers who want to improve their vocal technique, breathing control, and stage presence. Students will learn warm-up exercises, pitch accuracy, and vocal projection while gaining experience performing in front of an audience.",
        content: (
          <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--yellow-500))] text-white">
            Vocal Training and Performance
          </div>
        ),
      },
      {
        title: "Music Production and Sound Engineering",
        description:
          "An in-depth exploration of digital music production, recording, and mixing techniques. Students will work with industry-standard software to create their own tracks, edit audio, and understand the fundamentals of sound engineering for professional-quality music production",
        content: (
          <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
            Music Production and Sound Engineering
          </div>
        ),
      },
      {
        title: "Mastering the Guitar: From Beginner to Advanced",
        description:
           "A step-by-step course designed for guitar enthusiasts of all levels. Beginners will learn basic chords, strumming patterns, and scales, while advanced students will explore soloing techniques, improvisation, and fingerstyle playing. By the end of the course, students will be able to play confidently across various genres.",
        content: (
          <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
            Mastering the Guitar Basic to Advance
          </div>
        ),
      },
  ];


function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={musicSchoolContent}/>
    </div>
  )
}

export default WhyChooseUs
