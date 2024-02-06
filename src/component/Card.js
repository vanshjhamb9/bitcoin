import React, { useEffect, useState } from 'react'

const Card = ({image, heading , subheading}) => {


    
  return (
    <>
        <div className=" flex flex-row rounded-3xl space-x-4 py-4 px-4 w-[369px] h-[132px] items-center bg-white rounded-lg ">
          <div className="rounded-xl">
            <img
              src={image}
              alt=" thumnail"
              className={` h-2rem sm:w-full xs:w-[95%]  rounded-xl object-cover `}
            />
          </div>
          <div className="flex flex-col font-inter gap-2 px-1 py-3">
            <p className="text-xl text-richblack-100">{heading}</p>
            <p className="text-md font-semibold text-black w-[227px]">
              {subheading}
            </p>
            
          </div>
        </div>
      
    </>
  )
}

export default Card
