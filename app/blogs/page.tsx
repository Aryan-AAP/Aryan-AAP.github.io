import Footer from '@/components/Footer'
import { ThreeDCardDemo } from '@/components/inHouse/blogCard'
import { FloatingNav } from '@/components/ui/FloatingNav'
import { navItems } from '@/data'
import React from 'react'

const page = () => {
  return (
    <div className="h-[100vh]">

   

      <h1 className="heading">
        My {" "}
        <span className="text-purple ">Blogs</span>
        <ThreeDCardDemo blogImage='firstBlogPhoto.jpg'  pink="https://mud-jaw-603.notion.site/Personal-Website-ef89e8bff5b546d0908cf74318fad73f" heading='Know About Me' desc="
        It is my very first blog, this blog will tell you about me, stuffs that you won't get on a portfolio or any professional site, the insights and many more." 

        />

      </h1>

     
    </div>

  )
}

export default page