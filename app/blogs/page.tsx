import Footer from '@/components/Footer'
import { ThreeDCardDemo } from '@/components/inHouse/blogCard'
import { FloatingNav } from '@/components/ui/FloatingNav'
import { Spotlight } from '@/components/ui/Spotlight'
import { navItems, testimonials } from '@/data'
import React from 'react'
import { blogsarr } from '@/data/blogs'
import { InfiniteMovingCards } from '@/components/ui/infiniterMovingCards'
import { FollowerPointerCard } from '@/components/ui/following-pointer'
const page = () => {
  return (
    <div className="">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen  "
          fill="white"
        />
        <Spotlight
          className="top-10 left-full w-[50vw] h-[80vh]  "
          fill="purple"
        />
        <Spotlight
          className="top-28 left-80  h-[80vh] w-[50vw]  "
          fill="blue"
        />
      </div>

      <h1 className="heading mt-8">
        Aryan&apos;s {'  '}
        <span className="text-purple ">Blogs</span>
      </h1>

      <InfiniteMovingCards speed="slow" />
    </div>
  )
}

export default page
