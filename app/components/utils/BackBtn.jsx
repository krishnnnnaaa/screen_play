"use client"

import { BiArrowBack } from 'react-icons/bi'

export default function Back(){
    return(
        <div>
            <BiArrowBack onClick={()=> history.back()} className='cursor-pointer text-4xl absolute ml-4 sm:ml-12 mt-5 sm:mt-10'/>
        </div>
    )
}