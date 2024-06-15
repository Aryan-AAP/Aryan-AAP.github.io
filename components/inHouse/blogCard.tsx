"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo({
  heading,
  desc,
  pink,
  blogImage
}: {
  heading: string;
  desc: string;
  pink
  :string;
  blogImage:string;
}) {
  return (
    <CardContainer className="inter-var  bg-violet-500 ">
<CardBody className="
 bg-black
   border-black/[0.1]

flex flex-col justify-center items-center relative group/card w-full sm:w-[30rem] h-[70vh] rounded-xl p-6 border dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] transition-all duration-300 ease-in-out">
<CardItem
          translateZ="50"
          className="text-xl font-bold  text-white-100 mb-5"
        href={pink}
          >
          {heading}
        </CardItem>
        <CardItem
        href={pink}
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
          {desc}
        </CardItem>
        <CardItem
          href={pink}
         translateZ="100" className="w-full pt-8 mt-4">
          <Image
            src={blogImage}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
            />
        </CardItem>
        <div className="flex justify-between items-center mt-8">
          <CardItem
            translateZ={20}
            // as={div  }
           href={pink}
            target="__blank"
            className="px-4 py-2 text-lg rounded-xl  font-extrabold dark:text-white"
            >
            Thanks for Visiting
           
          </CardItem>
       
        </div>
      </CardBody>
    </CardContainer>
           
  );
}
