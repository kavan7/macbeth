"use client";
import Image from "next/image"
import CustomButton from "./CustomButton"
import CastleCard from "./CastleCard";
import { listings } from "@/constants";
import Link from "next/link";
import { useState } from "react";
import CastleDetails from "./CastleDetails";
import { ListingProps } from "@/types";
import { SearchBar } from ".";
import React, { ButtonHTMLAttributes } from 'react';

interface CastleCardProps {
  castle: ListingProps;
}



const Hero = ({castle}: CastleCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__subtitle">Welcome to <br/><span className="hero__title">Macduff Estates</span></h1>
            <p className="hero__description pt-1">Streamline your experience with our effortless booking process.</p>
           
           
          
           
            <CustomButton 
            title="Featured"
            containerStyles="bg-primary text-white rounded-full mt-10"
            handleClick={() => setIsOpen(true)}
         
            />
             
    
          
        
         
            
          <div className="mt-12 padding-y max-width" id="discover">
        <div className="home__text-container">
          

            <p className=" text-2xl">
              Meet our team.
            </p>
        </div>
          <div className="home__filters">
          <SearchBar/>
            <div className="home__filter-container">
          
            </div>
        
          </div>
        

      </div>
              <div className=''>
              <h1 className='text-4xl font-extrabold mt-11'>Catalogue</h1>
              <p className="home__text-container mt-5">
              Explore places you might like.
            </p>
             <div className="mt-10 flex flex-wrap gap-10">

        
       {listings.map((castle, index) => (
         <CastleCard castle={castle} 
         
         {...castle} />
       ))}
   

     </div>
              
               </div>
        </div>
        
        <div className="hero__image-container">
            <div className="hero__image">
              <Image src="/castle.png" alt="hero" fill className="absolute z-0 object-contain filter drop-shadow-xl"/>
             



            </div>
          
        </div>
   
        <CastleDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} castle={castle}/>
    </div>
  )
}

export default Hero