"use client";
import {useState} from 'react'
import { listings } from '@/constants'

import { ListingProps } from '@/types';

import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";
import { CustomButton } from '.';
import CastleDetails from './CastleDetails';

interface CastleCardProps {
  castle: ListingProps;
}

const CastleCard = ({castle}: CastleCardProps) => {
  const { name, price, detail, image } = castle;
  const [isOpen, setIsOpen] = useState(false);
    return(
      
     
        
        <motion.div
        
        whileHover={{
          scale: 1.1
        }}
        className='w-full  p-[3px] rounded-[20px] shadow-card'>
  
  <motion.div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-700">
  
      <div className="p-5">
        
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{name}</h5>
        
          <h1 className="mb-3 font-normal text-gray-700 dark:text-gray-400">$ {price}</h1>
          <a  className="inline-flex items-center  py-2 text-sm font-medium  text-black bg-secondary rounded-lg hover:bg-tertiary focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-secondary dark:hover:bg-tertiary dark:focus:ring-blue-800 ">
              {detail}                       
          </a>
      
      </div>
     
  </motion.div>
       
        </motion.div>
  

    )
  }



export default CastleCard;