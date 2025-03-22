"use client"
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";


function UpcomingWebiners() {

  const FeatureWebinars = [
    {
      title: "Understanding Music Theory",
      description: "Dive deep into the fundamentals of music theory and enhance your ability to read, compose, and understand music like never before.",
      slug: "understanding-music-theory",
      isFeatured: true
    },
    {
      title: "Mastering Guitar Techniques",
      description: "Learn advanced guitar techniques, from fingerpicking to shredding, and take your guitar skills to the next level with expert guidance.",
      slug: "mastering-guitar-techniques",
      isFeatured: true
    },
    {
      title: "The Art of Singing",
      description: "Discover vocal techniques that improve your range, pitch control, and confidence in performing, taught by professional vocal coaches.",
      slug: "the-art-of-singing",
      isFeatured: false
    },
    {
      title: "Piano for Beginners",
      description: "A step-by-step guide for beginners to learn piano fundamentals, including chords, scales, and reading sheet music effortlessly.",
      slug: "piano-for-beginners",
      isFeatured: true
    },
    {
      title: "Drumming Essentials",
      description: "Explore rhythm, timing, and essential drumming patterns to build a strong foundation as a drummer, whether you're a beginner or intermediate player.",
      slug: "drumming-essentials",
      isFeatured: false
    }
  ];

  return (
    <div className="py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURE Webiners</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhanced Your Journey</p>
        </div>

        <div className="mt-5">
          <HoverEffect items={FeatureWebinars.map(webiner => ({
            title:webiner.title,
            description:webiner.description,
            link:webiner.slug
          }))}/>
        </div>

        {/* <div className="mt-5 text-center">
        <Link href={'/courses'} className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">View All Courses</Link>
      </div> */}

      {/* Another Button */}
    <div className="mt-4 text-center">
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

export default UpcomingWebiners
