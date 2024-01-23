"use client";
import { ListingProps } from '@/types';
import React from 'react'
import Image from 'next/image';
import { Fragment } from 'react';
import { Dialog, Tab, Transition } from '@headlessui/react';
import useSound from 'use-sound';

import Hover from './Hover';


interface CastleDetailsProps{
    isOpen: boolean;
    closeModal: () => void;
    
}
const CastleDetails = ({isOpen, closeModal} : CastleDetailsProps) => {
  const [play, {stop}] = useSound('/macbeth.mp3');
  return (
  <>
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className={`relative z-10`} onClose={closeModal}>
            <Transition.Child as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
                <div className='fixed inset-0 bg-black bg-opacity-25'/>
            </Transition.Child>
            <div className='fixed inset-0 overflow-y-auto'>
                <div className='flex min-h-full items-center justify-center p-4 text-center'>
                <Transition.Child as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'>
                <Dialog.Panel>
              
                  <button onClick={() => play()} onDoubleClick={() => stop()}>
      <span role="img" aria-label="trumpet">
      <Hover
            title="Hover"
            containerStyles="bg-primary text-white rounded-full mt-10"
            
         
            />
           
             
      </span>
    </button>

                  <Tab.Group>
      <Tab.List>
      <Tab as={Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
          

<button type="button" className={selected ? "w-3 h-3  rounded-full bg-white dark:bg-primary mr-[5px]" : "w-3 h-3 rounded-full bg-primary dark:bg-gray-500 mr-[5px]"} aria-current="true" aria-label="Slide 2" data-carousel-slide-to="1"></button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
          

<button type="button" className={selected ? "w-3 h-3  rounded-full bg-white dark:bg-primary mr-[5px] ml-[5px]" : "w-3 h-3 rounded-full bg-primary dark:bg-grey mr-[5px] ml-[5px]"} aria-current="true" aria-label="Slide 2" data-carousel-slide-to="1"></button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
          

<button type="button" className={selected ? "w-3 h-3  rounded-full bg-white dark:bg-primary mr-[5px] ml-[5px]" : "w-3 h-3 rounded-full bg-primary dark:bg-grey mr-[5px] ml-[5px]"} aria-current="true" aria-label="Slide 2" data-carousel-slide-to="1"></button>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel><div className='relative mb-[100px] w-[600px] h-[568px]'>
   <Image src="/isix.png" alt="Iverness One" fill priority className=' object-contain'/>
</div></Tab.Panel>
        <Tab.Panel><div className='relative mb-[100px] w-[600px] h-[568px]'>
   <Image src="/ithree.png" alt="Iverness Two" fill priority className='object-contain'/>
</div></Tab.Panel>
        <Tab.Panel><div className='relative mb-[100px] w-[600px] h-[568px]'>
   <Image src="/ifour.png" alt="Iverness Four" fill priority className='object-contain'/>
</div></Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
           
    <button
                  type='button'
                  onClick={closeModal}>
                        <Image
                    src='/close.svg'
                    alt='close'
                    width={20}
                    height={20}
                    className='object-contain'
                  />

                  </button>
             
                </Dialog.Panel>
                </Transition.Child>
                </div>

            </div>

        </Dialog>
    </Transition>
  </>
  )
}
{/* <div className=' flex flex-col '>
                

<div className=' flex flex-wrap gap-4'>

</div>
</div>
<div className='flex-1 flex flex-col gap-3'>
<div className='relative mt-0 w-[600px] h-[568px]'>
   <Image src="/ione.png" alt="Iverness One" fill priority className='object-contain'/>
</div>


<div className='relative mb-[100px] w-[600px] h-[568px]'>
   <Image src="/ithree.png" alt="Iverness Two" fill priority className='object-contain'/>
</div>
<div className='relative mb-[100px] w-[600px] h-[568px]'>
   <Image src="/ithree.png" alt="Iverness Two" fill priority className='object-contain'/>
</div>
  <div className='flex-1 relative w-full '>
   
  </div>
</div> */}

export default CastleDetails