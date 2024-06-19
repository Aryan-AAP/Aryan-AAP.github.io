import Footer from '@/components/Footer'
import { ThreeDCardDemo } from '@/components/inHouse/blogCard'
import { FloatingNav } from '@/components/ui/FloatingNav'
import { Spotlight } from '@/components/ui/Spotlight'
import { InfiniteMovingCards } from '@/components/ui/infiniterMovingCards'
import { navItems, testimonials } from '@/data'
import React from 'react'

const page = () => {
  return (
    <div className="h-[100vh]">
 <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen  ' fill='white' />
        <Spotlight className='top-10 left-full w-[50vw] h-[80vh]  ' fill='purple' />
        <Spotlight className='top-28 left-80  h-[80vh] w-[50vw]  ' fill='blue' />
        </div>
   

      <h1 className="heading mt-8">
        Aryan&apos;s {"  "}
        <span className="text-purple ">Blogs</span>
        <ThreeDCardDemo blogImage='firstBlogPhoto.jpg'  pink="https://mud-jaw-603.notion.site/Personal-Website-ef89e8bff5b546d0908cf74318fad73f" heading='Know About Me' desc="
        It is my very first blog, this blog will tell you about me, stuffs that you won't get on a portfolio or any professional site, the insights and many more." 

        />

          <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

      </h1>

     
    </div>

  )
}

export default page